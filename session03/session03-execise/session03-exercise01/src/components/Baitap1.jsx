import React, { Component } from 'react'
import $ from "jquery"

export default class Baitap1 extends Component {
  constructor(){
    super();
    this.state = {
      username: "",
      password: "",
      cpassword: "",
      email: "",
    }
  }
    componentDidMount(){
        $(document).ready(function() {
            var panelOne = $('.form-panel.two').height();
            var panelTwo = 0;
          
            // Check if the element exists before accessing its scrollHeight
            var formPanelTwo = $('.form-panel.two')[0];
            if (formPanelTwo) {
              panelTwo = formPanelTwo.scrollHeight;
            }
          
            $('.form-panel.two').not('.form-panel.two.active').on('click', function(e) {
              e.preventDefault();
          
              $('.form-toggle').addClass('visible');
              $('.form-panel.one').addClass('hidden');
              $('.form-panel.two').addClass('active');
              $('.form').animate({
                'height': panelTwo
              }, 200);
            });
          
            $('.form-toggle').on('click', function(e) {
              e.preventDefault();
              $(this).removeClass('visible');
              $('.form-panel.one').removeClass('hidden');
              $('.form-panel.two').removeClass('active');
              $('.form').animate({
                'height': panelOne
              }, 200);
            });
          });
    
          const userData = localStorage.getItem('user') || [];

        }

  handleLoginSubmit = (event) => {
    event.preventDefault();
  }

  handleRegisterSubmit = (event) => {
    event.preventDefault();
  }


  render() {
    return (
      <div>
        <>
  {/* Form*/}
  <div className="form">
    <div className="form-toggle" />
    <div className="form-panel one">
      <div className="form-header">
        <h1>Account Login</h1>
      </div>
      <div className="form-content">
        <form onSubmit={this.handleLoginSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              required="required"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required="required"
            />
          </div>
          <div className="form-group">
            <label className="form-remember">
              <input type="checkbox" />
              Remember Me{" "}
            </label>
            <a className="form-recovery" href="#">
              Forgot Password?
            </a>
          </div>
          <div className="form-group">
            <button type="submit">Log In</button>
          </div>
        </form>
      </div>
    </div>
    <div className="form-panel two">
      <div className="form-header">
        <h1>Register Account</h1>
      </div>
      <div className="form-content">
        <form onSubmit={this.handleRegisterSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              required="required"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required="required"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cpassword">Confirm Password</label>
            <input
              type="password"
              id="cpassword"
              name="cpassword"
              required="required"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required="required" />
          </div>
          <div className="form-group">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</>

      </div>
    )
  }
}
