import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginApi = () => {
  const navigaet=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleApi = () => {
    console.log({ email, password });
    const item = {
      email: email,
      password: password,
    };

    axios.post("https://reqres.in/api/register", item)
      .then((result) => {
        console.log(result);
        alert("Success");
        localStorage.setItem("token", result.data.token);
        navigaet("/");
      })
      .catch((error) => {
        alert("Service error");
        console.log(error);
      });
  };

  return (
    <>
    <div className="container">
      <div className="main-content">
      <label>email</label><br></br>
      <input type="text" value={email} onChange={handleEmail} /> <br />
      <label>Password</label><br></br>
      <input type="password" value={password} onChange={handlePassword} /> <br />
      <button className="sub" onClick={handleApi}>Login</button>
      </div>
      </div>
    </>
  );
};

export default LoginApi;
