import React, {Component} from 'react';

class Login extends Component {


  state={
    username: '',
    password:''
  }


  handleChange = (e)=>{
    console.log(e.target.name, ": ", e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e)=>{
    e.preventDefault()
    this.props.handleLoginSubmit(this.state)
  }

  render (){
    return(
    <article className="container">
      <section className="login">
          <h2>log in</h2>
          <form className="login" onSubmit={this.handleSubmit}>
              <label>username</label>
              <input id="username" placeholder="username" name="username" onChange={this.handleChange}></input>
              <br />
              <label>password</label>
              <input id="pwd" name="password" type="password" placeholder="password" onChange={this.handleChange}></input>
              <br />
              <input className="login" type="submit" value="login"/>
          </form>
      </section>
    </article>
    )}
}

export default Login;