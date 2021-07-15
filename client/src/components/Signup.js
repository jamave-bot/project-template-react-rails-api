import React, {Component} from 'react';

class Signup extends Component {

  state = {
    username: "",
    password: ""
  }


  handleChange = (e)=>{
    console.log(e.target.name, ": ", e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e)=>{
    e.preventDefault()
    this.props.handleRegisterSubmit(this.state)
    
  }

  render (){
    return(
    <article className="container">
      <section className="signup">
          <h2>sign up</h2>
          <form className="signup" onSubmit={this.handleSubmit}>
              <label>username</label>
              <input id="username" placeholder="username" name="username" onChange={this.handleChange}></input>
              <br />
              <label>password</label>
              <input id="pwd" name="password" type="password" placeholder="password" onChange={this.handleChange}></input>
              <br />
              <input className="signup" type="submit" value="sign up"/>
          </form>
      </section>
    </article>
    )}
  }

export default Signup;