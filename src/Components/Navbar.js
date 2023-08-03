import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MyContext } from '../MyContext';
import axios from 'axios';

const Navbar = () => {
  const navigate = useNavigate();
  const { login, setLogin, isAdmin, setIsAdmin } = useContext(MyContext);//contextAPI
  const [ip, setIP] = useState('');
  const admin_ip = '103.255.146.154';

  useEffect(() => {
    getip()
    console.log(ip);
  }, [login, isAdmin]);

  const getip = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    // navigate("/");
    // console.log(res.data);
    setIP(res.data.ip);
  }

  const handleLogout = () => {
    navigate("/");
    setIsAdmin(false);
  }
  return (
    <>
      {ip === admin_ip ?
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                {/* <li className="nav-item">
                <Link className="nav-link active" to="abstract_submission">Abstract Submit</Link>
              </li> */}
                <li className="nav-item">
                <Link className="nav-link active" to="editreg">Edit Register</Link>
              </li>
                <li className="nav-item ">
                  <Link className="nav-link active" to="listofreg">List Of Registrations</Link>
                </li>
              </ul>
            </div>


            <div className="dropdown">
              <button className="btn btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Profile
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="profile">Profile</Link></li>
                {/* <li><Link className="dropdown-item" to="login" onClick={() => handleLogout()}>Log Out</Link></li> */}
                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
              </ul>
            </div>
            {/* <Link to='login'><button className="btn btn-outline-light" type="submit">Profile</button></Link> */}

          </div>
        </nav>
        :
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="abstract_submission">Abstract Submit</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="register">Register</Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link active" to="fileupload">File Upload</Link>
                </li> */}
                {/* <li className="nav-item ">
                  <Link className="nav-link active" to="listofreg">List Of Registrations</Link>
                </li> */}

              </ul>
            <Link to='login'><button className="btn btn-outline-light" type="submit">Login</button></Link>
            </div>

          </div>
        </nav>
      }
    </>
  )
}

export default Navbar