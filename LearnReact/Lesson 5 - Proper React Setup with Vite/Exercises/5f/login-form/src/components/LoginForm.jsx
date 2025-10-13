import {useState} from 'react'
import './LoginForm.css'
export function LoginForm () {
        const [showPassword,setShowPassword]= useState(true); 
        console.log(showPassword)
        function toggleShowPassword() {
          console.log('Clicked');
          console.log(showPassword)
          if(showPassword) {
            setShowPassword(false)
          } else {
              setShowPassword(true);
          }
        }
          return (
          <div className = "login-form-container">
              <p className = "title">Hello, welcome to my website</p>
              <input className = "email-input" type="text" placeholder = "Email" />
              <div className = "password-input-container">
                  <input className = "password-input" type= {showPassword  ? 'text' : 'password'} placeholder = "Password"        
                  />
                  <button
                    onClick = {toggleShowPassword}
                  > {showPassword ?  'Hide' : 'Show'}</button>
              </div>
            
              <div className = "button-container">
                  <button>Login</button>
                  <button>Sign up</button>
              </div>
          </div>
        )
}
export default LoginForm