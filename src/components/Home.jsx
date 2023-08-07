import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigaet=useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('token')){
    navigaet('/LoginApi');
    }
  },[])
  const userlogout=()=>{
    localStorage.removeItem("token")
    navigaet('/LoginApi');
  }
  return (
    <>
    <button
    onClick={userlogout}
    >logout</button>
    <div>
    this is home page
    </div>
    </>
  );
};

export default Home;
