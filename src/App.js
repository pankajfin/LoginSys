import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import {loginPostData} from './actions'
import "./App.css";

class App extends Component {
  state ={
    email :"",
    password :""
  }
  onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitHandler = () => {
    const values = this.state
    console.log("APP  ", values)
      this.props.loginPostData(values,(res)=>{
        console.log("NEW FORM : ",res);
        if (res.status === 202) {
           alert(res.data.error);
        }
        if (res.status === 200) {
          alert(res.data.success,
          this.props.history.push("/hello",res.data.user_email));
        }
      });
    // this.props.history.push("/hello", this.state);
  };
  render() {
    
    
    return (
      <div className="container">
      <div className="col-md-4">
      <input
          name = "email"
          onChange ={this.onChangeHandler}
          className="form-control"
          placeholder="Enter Email"
        />
        <br />
        <input
        name ="password"
        onChange ={this.onChangeHandler}
          className="form-control"
          placeholder="Enter Password"
        />
        <br />
        <button onClick = {()=>this.onSubmitHandler()} className="btn btn-primary" type="submit">
          Submit
        </button><br />
        <Link to="/signup">New User ! SignUp !</Link>
      </div>
       
        
        
      </div>
    );
  }
}

const mapStateToProps=(state)=>{  
  return { loginData : state.data}
}

export default connect(mapStateToProps,{loginPostData})(App);
