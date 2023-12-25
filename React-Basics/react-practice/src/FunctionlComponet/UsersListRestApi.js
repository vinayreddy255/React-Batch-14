import { useEffect, useState } from "react";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users";
const baseURL = "https://jsonplaceholder.typicode.com/posts";

function UsersListRestApi() {
  const [usersList, setUsersList] = useState([]);
  const [form, setForm] = useState({ firstName: "", lastName: "" });
  const [totolUserData, setTotalUserData] = useState([]);
  const [isLoader, setLoader] = useState(false);

  const formHandler = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const submitHandler = () => {
    setLoader(true);
    setTimeout(() => {
      axios.post(baseURL, { form }).then((response) => {
        console.log("response");
        setLoader(false);
      });
    }, 4000);

    // console.log("form data>>", form);
  };

  useEffect(() => {
    axios.get(url).then((response) => {
      setUsersList(response.data);
      setTotalUserData(response.data);
    });
  }, []);
  return (
    <div>
      <h2>Api calling uisng axios</h2>
      {isLoader && <h3>sending the data...</h3>}
      <div className="post-form">
        <label> First Name:</label>
        <span>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={formHandler}
          />
        </span>
        <label>LAst Name:</label>
        <span>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={formHandler}
          />
        </span>
        <div>
          <button onClick={submitHandler}>submit</button>
        </div>
      </div>

      <div>
        <input
          type="text"
          placeholder="Serach..."
          style={{
            width: "98%",
            padding: "15px",
            borderRadius: "30px",
            boxSizing: "border-box",
            marginTop: "20px",
          }}
        />
      </div>
      <table id="userTable" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone Num</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((itme) => (
            <tr key={itme.id}>
              <td>{itme.name}</td>
              <td>{itme.username}</td>
              <td>{itme.email}</td>
              <td>{itme.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default UsersListRestApi;
