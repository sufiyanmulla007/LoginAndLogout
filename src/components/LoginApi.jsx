import React, { useState } from "react";
import axios from "axios";

const LoginApi = () => {
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
      })
      .catch((error) => {
        alert("Service error");
        console.log(error);
      });
  };

  return (
    <>
      Email: <input type="text" value={email} onChange={handleEmail} /> <br />
      Password: <input type="password" value={password} onChange={handlePassword} /> <br />
      <button onClick={handleApi}>Login</button>
    </>
  );
};

export default LoginApi;
