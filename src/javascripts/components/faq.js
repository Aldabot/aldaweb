import React from 'react';

export default class Faq extends React.Component {
  render() {
    return (
        <div>
            <section uk-height-viewport="true" className="uk-section uk-padding-remove-top uk-margin-remove-top">
                <h1 className="uk-heading-primary uk-text-center uk-light background-primary padding-bottom">Preguntas Frecuentes</h1>

                <div className="uk-container uk-container-expand">
                    <ul uk-accordion="multiple: true">
                        <li>
                            <h3 className="uk-accordion-title">01 &emsp; ¿Por qué Alda?</h3>
                            <div className="uk-accordion-content">
                                <p className="uk-dropcap">
                                    En pocas palabras, no creemos que los servicios o productos bancarios actuales sean lo suficientemente buenos. Nuestras finanzas deberían ser fáciles de entender, nuestros gastos deberían ser más manejables, y deberíamos poder tomar decisiones mejor informadas sobre nuestro futuro financiero. Si tenemos la capacidad de ver realmente lo que está pasando con nuestras finanzas seremos mejores gestionando. También creemos firmemente en el poder de las nuevas  tecnologías para ayudarnos a conocer mejor nuestro dinero. Y esa es la razón por la que construimos Alda.
                                </p>
                            </div>
                            <hr/>
                        </li>
                        <li>
                            <h3 className="uk-accordion-title">02 &emsp; ¿Cómo funciona Alda?</h3>
                            <div className="uk-accordion-content">
                                <p className="uk-dropcap">
                                    Alda funciona al acceder de forma segura a los datos de sus transacciones en modo de solo lectura. Eso significa que solo puede ver sus transacciones encriptadas. Alda lo hace mediante el uso de un software financiero líder en el mundo llamado SaltEdge. Luego, Alda utiliza su inteligente inteligencia artificial para escanear su historial de transacciones, calcular y detectar tendencias de gasto interesantes, hábitos y le permite realizar un seguimiento de los presupuestos. Alda también le permite ver su saldo, verificar los débitos directos, las últimas transacciones y ver su gasto por categoría.
                                </p>
                            </div>
                            <hr/>
                        </li>
                        <li>
                            <h3 className="uk-accordion-title">03 &emsp; ¿Qué seguridad ofrece Alda?</h3>
                            <div className="uk-accordion-content">
                                <p className="uk-dropcap">
                                    Alda es extremadamente segura. Usamos cifrado de nivel bancario y prácticas de seguridad, y Alda es un servicio de solo lectura para que nadie pueda mover dinero dentro o fuera de su cuenta. Para acceder a su historial de transacciones, nos conectamos directamente a la API privada de su banco o usamos SaltEdge, líderes mundiales en seguridad financiera y agregación de datos. Nunca almacenamos sus credenciales en nuestros servidores y su historial de transacciones se cifra con toda la información de identificación personal que se elimina al recibirla. Solo usted y Alda pueden ver sus transacciones.
                                </p>
                            </div>
                            <hr/>
                        </li>
                        <li>
                            <h3 className="uk-accordion-title">04 &emsp; ¿Por qué Alda necesita mi información de inicio de sesión?</h3>
                            <div className="uk-accordion-content">
                                <p className="uk-dropcap">
                                    Necesitamos que ingrese sus credenciales de inicio de sesión para que pueda establecer una conexión segura con su banco o compañía de tarjeta de crédito. Esta conexión segura es de solo lectura, lo que significa que nadie puede mover dinero dentro o fuera de su cuenta (¡y eso lo incluye a usted!)
                                    Una vez que se establece una conexión segura, Alda le permite analizar y clasificar miles de transacciones históricas, así como la información sobre el saldo actual, de forma segura y automática.
                                </p>
                            </div>
                            <hr/>
                        </li>
                        <li>
                            <h3 className="uk-accordion-title">05 &emsp; ¿Puede Facebook acceder a mis datos bancarios?</h3>
                            <div className="uk-accordion-content">
                                <p className="uk-dropcap">
                                    No. Facebook es simplemente la plataforma que Alda usa para chatear contigo. Sus servidores no almacenan ni acceden a ninguna de sus credenciales bancarias. Todo esto es manejado por su banco y SaltEdge en el proceso de registro.
                                </p>
                            </div>
                            <hr/>
                        </li>
                        <li>
                            <h3 className="uk-accordion-title">06 &emsp; ¿Alda trabaja con bancos de fuera de España?</h3>
                            <div className="uk-accordion-content">
                                <p className="uk-dropcap">
                                    Todavía no, pero vamos a expandirnos en breve.
                                </p>
                            </div>
                            <hr/>
                        </li>
                        <li>
                            <h3 className="uk-accordion-title">07 &emsp; ¿Cómo vaís a ganar dinero?</h3>
                            <div className="uk-accordion-content">
                                <p className="uk-dropcap">
                                    Ofreceremos nuestros propios productos financieros: más rápidos, más justos y más baratos. Tenemos un respaldo significativo de los inversores de primer nivel para ejecutar esta visión rápidamente. Y no te preocupes, nunca venderemos tus datos.
                                </p>
                            </div>
                            <hr/>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
  }
}
