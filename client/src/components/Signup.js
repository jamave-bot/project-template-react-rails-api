import React, {Component} from 'react';

class Signup extends Component {

render (){
  return(
  <article className="container">
    <section className="signup">
        <h2>sign up</h2>
        <form className="signup">
            <label>username</label>
            <input id="username" placeholder="username" name="username"></input>
            <br />
            <label>password</label>
            <input id="pwd" name="password" type="password" placeholder="password"></input>
            <br />
            <input className="signup" type="submit" value="sign up"/>
        </form>
    </section>
  </article>
  )}
}

export default Signup;