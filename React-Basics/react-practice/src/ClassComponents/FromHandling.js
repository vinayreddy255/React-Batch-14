import { Component } from "react";
import "./FromHandling.css";
import AddUsersList from "./AddUsersList";
class FromHandling extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        firstName: "",
        lastName: "",
        phoneNum: "",
        passowrd: "",
        email: "",
      },
      usersList: [],
    };
  }
  formHandler = (event) => {
    const obj = { ...this.state };
    const { name, value } = event.target;
    obj.form[name] = value;
    this.setState(obj);
    // console.log(event.target.name, ">>>", event.target.value);
    // console.log();
  };
  submitFomr = (e) => {
    e.preventDefault();
    const newStateData = { ...this.state };
    newStateData.usersList.push(this.state.form);
    newStateData.form = {
      firstName: "",
      lastName: "",
      phoneNum: "",
      passowrd: "",
      email: "",
    };
    this.setState({ ...newStateData });
  };
  render() {
    return (
      <div>
        <h2>FromHandling</h2>
        <form onSubmit={this.submitFomr}>
          <div className="form-continer">
            <div className="form-min-div">
              <label className="form-labels">First Name</label>
              <span>
                <input
                  type="text"
                  name="firstName"
                  onChange={this.formHandler}
                  value={this.state.form.firstName}
                />
              </span>
            </div>
            <div className="form-min-div">
              <label className="form-labels">Last Name</label>
              <span>
                <input
                  type="text"
                  name="lastName"
                  onChange={this.formHandler}
                  value={this.state.form.lastName}
                />
              </span>
            </div>
            <div className="form-min-div">
              <label className="form-labels">Phone Number</label>
              <span>
                <input
                  type="text"
                  name="phoneNum"
                  onChange={this.formHandler}
                  value={this.state.form.phoneNum}
                />
              </span>
            </div>
            <div className="form-min-div">
              <label className="form-labels">Email</label>
              <span>
                <input
                  type="text"
                  name="email"
                  onChange={this.formHandler}
                  value={this.state.form.email}
                />
              </span>
            </div>
            <div className="form-min-div">
              <label className="form-labels">Password</label>
              <span>
                <input
                  type="password"
                  name="passowrd"
                  onChange={this.formHandler}
                  value={this.state.form.passowrd}
                />
              </span>
            </div>
            <div>
              <input type="submit" value={"submit"} />
            </div>
          </div>
        </form>
        <AddUsersList userList={this.state.usersList} />
      </div>
    );
  }
}

export default FromHandling;
