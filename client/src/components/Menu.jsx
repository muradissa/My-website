import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Menu = ({handleClickProject}) => {
  const [projects, setProjects] = useState([]);
  const location = useLocation();
  const projectId = location.pathname.split("/")[2];
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(`/posts/?cat=${cat}`);
//         setPosts(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchData();
//   }, [cat]);
  const getAllProject = async () =>{
    const response = await axios.get("http://localhost:5000/api/project")
    if(response.status === 200){
      setProjects(response.data)
      console.log(`project id is : ${projectId}`);
    }else{
      console.log("Cannot get the projects")
      // Error message
    }
  }
  useEffect(() =>{
    getAllProject()
  },[]);

  // function refreshPage() {
  //   window.location.reload(false);
  // }

  return (
    <div className="menu">
      <h1 style={{color:"white"}}>Other projects you may like</h1>
      {projects.map((project) => (
        ( project.num != projectId &&
        <div className="post" key={project.id}>
          <img src={`../upload/${project?.img}`} alt="" />
          <h2 style={{color:"white"}}>{project.title}</h2>
            <Link className="link" to={`/project/${project.num}`}>
              <button onClick={event =>handleClickProject(project.num)}>Read More</button>
            </Link>
          <br/>
        </div>
        )
      ))}
    </div>
  );
};

export default Menu;