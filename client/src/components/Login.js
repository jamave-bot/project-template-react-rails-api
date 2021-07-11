import React, {Component} from 'react';

class Login extends Component {

render (){
  return(
  <article className="container">
    <section className="login">
        <h2>log in</h2>
        <form className="login">
            <label>username</label>
            <input id="username" placeholder="username" name="username"></input>
            <br />
            <label>password</label>
            <input id="pwd" name="password" type="password" placeholder="password"></input>
            <br />
            <input className="login" type="submit" value="login"/>
        </form>
    </section>
  </article>
  )}
}

export default Login;