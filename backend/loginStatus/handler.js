'use strict';
import dotenv from 'dotenv';
import { create } from 'apisauce';
dotenv.config();

////////////////////////////////////////////////////////////////////////////////
// SALTEDGE
////////////////////////////////////////////////////////////////////////////////

const saltedgeClientId = process.env.SALTEDGE_CLIENT_ID;
const saltedgeServiceSecret = process.env.SALTEDGE_SERVICE_SECRET;

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Client-id': 'QTPsSIxhOxBxIRf3IKzWew',
    'Service-secret': 'b6aeHuRHbvQouDqS_zB-R0cdXzKdvbi3kLnkMYE6EcU'
};
const saltedgeApi = create({
    baseURL: 'https://www.saltedge.com/api/v3',
    timeout: 1000,
    headers
});

const getLogin = (loginId) => {
    return saltedgeApi.get(`/logins/${loginId}`).then((response) => {
        console.log(JSON.stringify(response.data.data, null, 4));
        if (response.ok) {
            const data = response.data.data;
            return {
                finished: data.last_attempt.finished,
                succeededAt: data.last_attempt.success_at,
                failedAt: data.last_attempt.success_at
            };
        } else {
            if (response.problem == "CLIENT_ERROR") {
                throw response.data.error_class;
            } else  {
                throw response.problem;
            };
        }
    });
};

function deleteLogin(loginId) {
    return saltedgeApi.delete(`/logins/${loginId}`);
}


////////////////////////////////////////////////////////////////////////////////
// LAMBDA HANDLER
////////////////////////////////////////////////////////////////////////////////

export const index = (event, context, callback) => {
    const body = JSON.parse(event.body);
    const loginId = body.loginId;

    getLogin(loginId).then((login) => {
        let status = "inProgress";
        if (login.finished) {
            if (login.succeededAt) {
                status = "succeeded";
            } else {
                status = "failed";
            }
        }

        if (status == "failed") {
            // clean saltedge (delete login)
            return deleteLogin(loginId).then(() => {
                respond(callback, event, status);
            });
        } else {
            respond(callback, event, status);
        }
    }).catch((error) => {
        console.log(JSON.stringify(error, null, 4));
        respondError(callback, event, error);
    });
};


////////////////////////////////////////////////////////////////////////////////
// LAMBDA RESPONSES
////////////////////////////////////////////////////////////////////////////////

const respond = (callback, event, status) => {
    let lambdaHeaders = {
        "Access-Control-Allow-Origin" : "https://aldabot.es", // Required for CORS support to work
        "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
    };

    // CORS for testing
    if (event.headers.origin == "http://localhost:8080") {
        lambdaHeaders["Access-Control-Allow-Origin"] = "http://localhost:8080";
    }

    const response = {
        statusCode: 200,
        headers: lambdaHeaders,
        body: JSON.stringify({
            status,
            input: event
        })
    };

    callback(null, response);
};

const respondError = (callback, event, error) => {
    const response = {
        statusCode: 500,
        body: JSON.stringify({
            error,
            input: event
        })
    };

    callback(null, response);
};
