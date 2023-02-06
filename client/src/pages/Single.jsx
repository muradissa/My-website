import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
// import moment from "moment";
// import { useContext } from "react";
// import { AuthContext } from "../context/authContext";
// import { useAuth } from "../contexts/AuthContext"
// import DOMPurify from "dompurify";

import imagee from "../img/installanchor.jpg";


const Single = () => {
  const [project, setProject] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const [projectId, setProjectID] = useState( location.pathname.split("/")[2]);
  const [img ,setImg] = useState()
  // const { currentUser } = useContext(AuthContext);
  //const projectId = location.pathname.split("/")[2];
  
  const getProject = async () =>{
    const response = await axios.get(`http://localhost:5000/api/project/projectnumber/${projectId}`)
    if(response.status === 200){
      setProject(response.data[0])
      console.log(response.data[0])
    }
  }
  const getImage = async () =>{
    const response = await axios.get(`http://localhost:5000/api/image/${projectId}`)
    if(response.status === 200){
      setImg(response.data)
    }
  } 
  useEffect(() =>{
    getProject()
    getImage()
  },[]);
  
  useEffect(() =>{
    getProject()
    getImage()
  },[projectId]);

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  const handleClickProject = num => {
    // 👇️ take the parameter passed from the Child component
    setProjectID(num);
    // console.log('argument from Child: ', num);
  };

  return (
    <div className="single">
      <div className="content">
          {project.title !== undefined && 
          <div className="project" key={project.id}>
            <h1>{project.title}</h1>
            <br/>
            <div className="img" style={{alignItems:"center",display:"flex",justifyContent:"center",width:"100%"}}>
              <img src={`data:image/jpg;base64,${img}`} alt="" style={{maxWidth:"500px"}}/>
            </div>
            <br/>
            <div className="card">
              <div style={{display: "-webkit-inline-box"}}>
                {project.skills.map((feature) => (
                  <p >
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
                <Link className="link" to={project.githublink}>
                  <button >Go to github repository</button>
                </Link>
              </div>
            </div>
          </div>}
        </div>
      <Menu handleClickProject={handleClickProject}/>
      
    </div>
  );
};

export default Single;