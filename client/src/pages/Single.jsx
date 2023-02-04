import React, { useEffect, useState } from "react";
// import Edit from "../img/edit.png";
// import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { useContext } from "react";
// import { AuthContext } from "../context/authContext";
import { useAuth } from "../contexts/AuthContext"
import DOMPurify from "dompurify";

import imagee from "../img/installanchor.jpg";


const Single = () => {
  const [project, setProject] = useState({});
  // const [post2, setPost2] = useState({});
  // const [post3, setPost3] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];
  //new
  const getProject = async () =>{
    const response = await axios.get("http://localhost:5000/api/project/projectnumber/2")
    if(response.status === 200){
      setProject(response.data[0])
      console.log(response.data[0])
    }
  }
  useEffect(() =>{
    getProject()
  },[]);
  // const { currentUser } = useContext(AuthContext);


  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className="single">
      <div className="content">
          {project.title !== undefined && 
          <div className="project" key={project.id}>
            <h1>{project.title}</h1>
            <br/>
            {/* 
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%
           */}
            <div className="img" style={{alignItems:"center",display:"flex",justifyContent:"center",width:"100%"}}>
              <img src={imagee} alt=""  style={{maxWidth:"500px"}}/>
            </div>
            <br/>
            <div className="card">
              <div style={{display: "-webkit-inline-box"}}>
                {project.skills.map((feature) => (
                  <p style={{paddingRight:"5px"}}>
                    {feature}
                  </p>
                ))}
              </div>
              <span className="top"></span>
              <span className="right"></span>
              <span className="bottom"></span>
              <span className="left"></span>
            </div>
            <br/>
            <div className="content">
              <p>{(project.description)}</p>
              <br/>
              
               
              <div>
               
                {/* <Link className="link" to={project.githubLink}> */}
                  <button >Go to github repositry</button>
                {/* </Link> */}
              </div>
              
            </div>
          </div>}
        </div>
      <Menu cat={project.cat}/>
      
    </div>
  );
};

export default Single;