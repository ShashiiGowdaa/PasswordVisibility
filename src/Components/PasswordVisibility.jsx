import React, { Component } from 'react'

export default class PasswordVisibility extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         password:'',
         showPassword: false
      }
    }
    handlePassword = (event) =>{
        this.setState({
            password: event.target.value
        })
    }
    togglePassword = ()=>{
            this.setState((prevState)=>({
                showPassword: !prevState.showPassword
            }))

    }
  render() {
    return (
        <div className="container mt-5 d-flex justify-content-center">
        <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
          <h3 className="text-center mb-4">Password Input</h3>
          <div className="form-group">
            <label htmlFor="passwordInput" className="mb-2 font-weight-bold">
              Password:
            </label>
            <input
              type={this.state.showPassword ? 'text' : 'password'}
              className="form-control form-control-lg"
              id="passwordInput"
              placeholder="Enter your password"
              value={this.state.password}
              onChange={this.handlePassword}
              style={{ borderRadius: '8px' }}/>
          </div>
          <div className="form-check mt-3 mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="showPasswordCheck"
              checked={this.state.showPassword}
              onClick={this.togglePassword}/>
            <label className="form-check-label" htmlFor="showPasswordCheck">
              Show Password
            </label>
          </div>
        </div>
      </div>
    )
  }
}
