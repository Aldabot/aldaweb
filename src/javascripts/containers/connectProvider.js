import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { DoubleDounceLoading } from 'styled-spinkit'
import { selectProviderStatus } from '../actions/index'
const uuidv4 = require('uuid/v4')

class ConnectProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    this.props.setProviderStatus('Establishing Source Connection')
    setTimeout(() => {this.props.setProviderStatus('Updating Accounts')}, 1500)
    setTimeout(() => {this.props.setProviderStatus('Updating Transactions')}, 3000)
    setTimeout(() => {this.props.setProviderStatus('success')}, 4000)
  }

  render() {
    const { provider, providerStatus } = this.props

    const loadingAnimation = <div className="uk-text-center">
      <DoubleDounceLoading size={100} color='#0072ff' />
      <p>{providerStatus}</p>
    </div>


    return (
      <section uk-height-viewport="true" className="uk-section uk-padding-remove-top uk-margin-remove-top">
        <h1 className="uk-heading-primary uk-text-center uk-light background-primary padding-bottom">Conectar</h1>

        <div className="uk-text-center uk-padding">
          <div uk-icon="icon: lock; ratio: 3"></div>
          <p className="uk-text-lead">Alda securely connects to your account in read-only mode, using bank-level 256-bit encryption.</p>
        </div>

        {(() => {
          switch(providerStatus) {
            case "form":
              return <form onSubmit={this.handleSubmit} className="uk-text-center">
                <fieldset className="uk-fieldset">
                  <legend className="uk-legend">{provider.name}</legend>

                  <div className="uk-margin">
                    <input className="uk-input uk-form-large uk-form-width-large" type="text" placeholder="Customer Identifier" value={this.state.value} onChange={this.handleChange} />
                  </div>
                  <div className="uk-margin">
                    <div className="uk-margin uk-inline">
                      <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                      <input className="uk-input uk-form-large uk-form-width-large" type="password" placeholder="Password" value={this.state.value} onChange={this.handleChange} />
                    </div>
                  </div>

                  <input className="uk-input uk-form-large uk-form-width-large"  type="submit" value="Submit" />
                </fieldset>
              </form>
            case 'success':
              return <div className="uk-text-center">
                <div uk-icon="icon: check; ratio: 5" style={{color: "green"}}></div>
                <p style={{color: "green"}}>Connectado</p>
              </div>
            default:
              return loadingAnimation
          }
        })()}
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.isLoggedIn,
    provider: state.selectProvider.provider,
    providerStatus: state.selectProvider.status
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setProviderStatus: (status) => {
      dispatch(selectProviderStatus(status))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectProvider)
