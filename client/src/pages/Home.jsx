import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Logo from "../img/murad-issa.jpg";

const Home = () => {
  // const [posts, setPosts] = useState([]);

  // const cat = useLocation().search

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get(`/posts${cat}`);
  //       setPosts(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, [cat]);
  const posts = [
    {
      id: 1,
      title: "Project 1",
      features:["angular","react", "asdasd"],
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      githubLink:"https://github.com",
    },
    {
      id: 2,
      title: "Project 2",
      features:["angular","react", "asdasd"],
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      githubLink:"https://github.com",
    },
    {
      id: 3,
      title: "Project 3",
      features:["angular","react", "asdasd"],
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      githubLink:"https://github.com",
    },
    {
      id: 4,
      title: "Project 4",
      features:["angular","react", "asdasd"],
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      githubLink:"https://github.com",
    },
  ];

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }
  const readMore = () => {

  }
  const goToGithubRepo = () =>{

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
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.desc)}</p>
              <br/>
              <div class="card">
                <div style={{display: "-webkit-inline-box"}}>
                  {post.features.map((feature) => (
                    <p style={{paddingRight:"5px"}}>
                      {feature}
                    </p>
                  ))}
                </div>
                <span class="top"></span>
                <span class="right"></span>
                <span class="bottom"></span>
                <span class="left"></span>
              </div>
                
              <br/>
              <div>
               <Link className="link" to={`/post/${post.id}`}>
                  <button>Read More</button>
                </Link>
                <Link className="link" to={post.githubLink}>
                  <button >Go to github repositry</button>
                </Link>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;