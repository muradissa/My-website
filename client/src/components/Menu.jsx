import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Menu = ({handleClickProject}) => {
  const [projects, setProjects] = useState([]);
  const location = useLocation();
  const projectId = location.pathname.split("/")[2];
  const [images, setImages] = useState([]);
  const [getdata, getData] = useState(false);
  let load =true;
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
  const getAllImages = async () =>{
    for (let num = 1; num <= 4; num++) {
      const response = await axios.get(`http://localhost:5000/api/image/${num}`)
      if(response.status === 200){
        setImages(images => [...images,response.data])
      }
    }
    getData(true)
  }
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
    if(load){
      getAllProject()
      getAllImages()
    }
    load=false;
  },[]);

  return (
    <div className="menu">
      <h1 style={{color:"white"}}>Other projects you may like</h1>
      { getdata &&
      (projects.map((project) => (
        ( project.num != projectId &&
        <div className="project" key={project.id}>
          {/* <img src={`../upload/${project?.img}`} alt="" /> */}
          <h3 style={{color:"white"}}>{project.title}</h3>
          <Link className="liknk" to={`/project/${project.num}`}>
            <img src={`data:image/jpg;base64,${images[project.num-1]}`} alt="" onClick={event =>handleClickProject(project.num)}/>
          </Link>

          
            {/* <Link className="link" to={`/project/${project.num}`}>
              <button onClick={event =>handleClickProject(project.num)}>Read More</button>
            </Link> 
          <br className="line"/>*/}
        </div>
        )
      )))
      }
    </div>
  );
};

export default Menu;