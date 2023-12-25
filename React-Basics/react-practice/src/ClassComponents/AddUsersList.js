import { Component } from "react";
import "./AddUsersList.css";
class AddUsersList extends Component {
  render() {
    const { userList } = this.props;

    return (
      <div>
        <table id="userTable">
          <thead>
            <tr>
              <th>SN</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Passowrd</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((e, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{e.firstName}</td>
                <td>{e.lastName}</td>
                <td>{e.email}</td>
                <td>{e.phoneNum}</td>
                <td>{e.passowrd}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default AddUsersList;
