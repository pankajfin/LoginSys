import React, { Component } from "react";
import { signupPostData } from "../actions";
import { connect } from "react-redux";

class Signup extends Component {
  state = {
    name: "",
    email: "",
    contact_num: "",
    password: ""
  };
  onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitHandler = () => {
    const values = this.state;
    this.props.signupPostData(values, (response) => {
      if (response.data.status === "error") {
        alert(response.data.msg);
      }
      if (response.status === 200) {
        alert(`You are successfully registered ${response.data.name}`,
          this.props.history.push("/"));
      }
    })
    // this.props.history.push("/hello", this.state);
  }
    ;
  render() {
    //const signupdata = this.props.signupdata;
    return (
      <div className="container">
        <div className="col-md-6">
          <div style={{ margin: 8 }}>
            <input
              name="name"
              placeholder="Enter your Name"
              onChange={this.onChangeHandler}
              className="form-control"
            />
            <input
              name="email"
              placeholder="Enter your Email"
              onChange={this.onChangeHandler}
              className="form-control"
            />
            <input
              name="contact_num"
              placeholder="Enter your Contact Number"
              onChange={this.onChangeHandler}
              className="form-control"
            />
            <input
              name="password"
              placeholder="Enter your Password"
              onChange={this.onChangeHandler}
              className="form-control"
            />
            <br />
            <button
              onClick={() => this.onSubmitHandler()}
              type="submit"
              className="btn btn-primary"
            >
              Submit
        </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    signupData: state.data
  };
};

export default connect(
  mapStateToProps,
  { signupPostData }
)(Signup);
