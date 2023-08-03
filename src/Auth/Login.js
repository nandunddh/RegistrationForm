import React, { useContext, useEffect, useState } from 'react'
import "../App.css"
import { MyContext } from '../MyContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState();
  const { login, setLogin, isAdmin, setIsAdmin } = useContext(MyContext);//contextAPI

  useEffect(() => {
    getLogin()
  }, []);

  const getLogin = () => {
    axios.get("http://localhost/crud/submit.php").then((response) => {
      console.log(response.data);
      setLogin(response.data);
    });
  }

  let {email} = {...loginData}; 
  email = login.find((ele) => ele.email === email);

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsAdmin(true);
      alert("Login Success");
      navigate("/");
    } else {
      alert("InValid Details");
      window.location.reload();
    }
    axios.get("http://localhost/crud/auth/").then((response) => {
      console.log(response.data);
      setLogin(response.data);
    });
  }
  return (
    <>
      <div className='container'>
        <main className="form-signin w-100 m-auto">
          <form>
            {/* <img className="mb-4" src="../assets/brand/bootstrap-logo.svg" alt width={72} height={57} /> */}
            <h1 className="h3 mb-3 fw-bold text-center">Please Login</h1>
            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" onChange={handleChange} />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name='password' onChange={handleChange} />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            {/* <div className="form-check text-start my-3">
              <input className="form-check-input" type="checkbox" defaultValue="remember-me" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Remember me
              </label>
            </div> */}
            <button className="btn btn-primary w-100 py-2" type='button' onClick={handleSubmit}>Login</button>
            <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
          </form>
        </main>
      </div>
    </>
  )
}

export default Login