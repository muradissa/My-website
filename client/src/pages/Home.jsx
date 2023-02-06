import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Logo from "../img/murad-issa.jpg";
import imagee from "../img/installanchor.jpg";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [images, setImages] = useState([]);
  const [getdata, getData] = useState(false);
  let load =true;
 
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
      console.log(response.data[0])
      
    }
  }

  useEffect(() =>{
    if(load){
      getAllProject()
      getAllImages()
    }
    load=false;
  },[]);

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className="home">
      
      <div className="aboutme" style={{paddingTop:"50px"}}>
        <div className="img">
          <img src={Logo} alt="" style={{maxHeight:"250px",borderRadius:"50%"}}/>
        </div>
        <div className="content">
          
          <h1>Hi ! I'm Murad</h1>
          
          <p>Graduate Software Engineer and Full Stack Developer, highly experienced with both front and back end development of web and mobile applications, and equipped with tons of passion to create beautiful code and amazing UIs.</p>
          <br/>
          <p>My tech stack contains React.js, React Native, Node.js, Spring Boot, Express.js, SQL/NoSQL, TypeScript, MaterialUI and more. </p>
          <p>I also have comprehensive experience in C, C++, Java and Python.</p>
          <br/>
          <p>So if you look for an amazingly passionate developer</p>
          <p>to join your team, I'll be more than happy to contact!</p>
          <button>Get My Resume</button>
        </div>
      </div>
      { getdata &&
      <div className="posts">
        {projects.map((project) => (
          <div className="post" key={project.num}>
            <div className="img">
              <img src={`data:image/jpg;base64,${images[project.num-1]}`} alt="" style={{maxWidth:"450px"}}/>
            </div>
            <div className="content">
              <Link className="link" to={`/project/${project.num}`}>
                <h1>{project.title}</h1>
              </Link>
              <p>{getText(project.description)} </p>
              <br/>
              <h3>Technologies :</h3>
              <div className="card">
                <div style={{display: "-webkit-inline-box"}}>
                  {project.skills.map((feature) => (
                    <p style={{paddingRight:"15px"}}>
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
              <div>
               <Link className="link" to={`/project/${project.num}`}>
                  <button>Read More</button>
                </Link>
                <Link className="link" to={project.githublink}>
                  <button >Go to github repository</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      }
    </div>
  );
};

export default Home;