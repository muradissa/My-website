import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../contexts/authContext";
// import { useAuth } from "../contexts/AuthContext"
// import ContactForm from "../pages/ContactForm";
// import { MDBIcon } from 'mdb-react-ui-kit';
import Logo from "../img/logo-no-background.png";
import { FaLinkedin,FaGithub } from 'react-icons/fa';

const Navbar = () => {
  // const { currentUser, logout } = useContext(useAuth);

  return (
    <div className="navbar" style={{borderRadius:"5px"}}>
      <div className="container">
        <div className="logo">
          <Link to="/">
          <img src={Logo} alt="" style={{borderRadius:"5px"}} />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/contactForm" >
            <h6>Contact me</h6>
          </Link>
          
          <Link className="link" to="/?cat=science">
            <h6>Projects</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>Skills</h6>
          </Link>
          {/* <Link className="link" to="/">
            <h6>Crypto</h6>
          </Link> */}
          <Link className="link" to="https://www.linkedin.com/in/murad-eissa-0b953318a/">
            <FaLinkedin style={{scale:"1.5"}}/>
          </Link>
          <Link className="link" to="https://github.com/muradissa">
            <FaGithub style={{scale:"1.5",paddingRight:"15px",color:""}}/>
          </Link>
          
          
          {/* <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )} */}
        
          
          {/* <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span> */}
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;