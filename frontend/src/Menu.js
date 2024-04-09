import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import axios from 'axios';

function Menu() {
  const navigate = useNavigate();
  const [nav, setNav] = useState(true);
  const [tokenStatus, setTokenStatus] = useState({});
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [adminToken, setAdminToken] = useState(localStorage.getItem('adminToken'));

  useEffect(() => {
    setToken(localStorage.getItem('token'));
    setAdminToken(localStorage.getItem('adminToken'));
  }, []);

  useEffect(() => {
    const value = localStorage.getItem('token') || localStorage.getItem('adminToken');
    axios.get("http://localhost:5000/verifytoken", {
      headers: {
        "x-token": value
      }
    }).then(async res => {
      const yaka = await res.data;
      setTokenStatus(yaka);
    }).catch(err => {
      console.error("Error verifying token:", err);
      setTokenStatus({ ...tokenStatus, expired: true });
    });
  }, []);

  const handleToggleNav = () => {
    setNav(!nav);
  };

  const handleLogout = () => {
    if (token) {
      localStorage.removeItem("token");
      setToken(null);
    } else if (adminToken) {
      localStorage.removeItem("adminToken");
      setAdminToken(null);
    }
    navigate('/');
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg  fixed-top ${'navbar-transparent'}`}>
        <h3 className='text-center text-dark' id="text">Welcome</h3>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggleNav}
        >
          <i className="bx bx-menu"></i>
        </button>
        <div className={`collapse navbar-collapse  ${nav ? 'show' : ''}`} id="btn">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link mx-3 fs-5" id="navtext">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/gallery" className="nav-link mx-3 fs-5" id="navtext">
                Gallery
              </Link>
            </li>
            {token || adminToken ? (
              <>
                <li className="nav-item">
                  <Link to={token ? `/form/${tokenStatus.username}` : "/employes"} className="nav-link mx-3 fs-5" id="navtext">
                    {token ? "profile" : "Employes"}
                  </Link>
                </li>
                <li className="nav-item">
                  <Button className="nav-link mx-3 fs-5" id="navtext" onClick={handleLogout}>
                    Logout
                  </Button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/form" className="nav-link mx-3 fs-5" id="navtext">
                    Emp login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/adminform" className="nav-link mx-3 fs-5" id="navtext">
                    Admin login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Menu;
