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

const Single = () => {
  const [post, setPost] = useState({});
  const [post2, setPost2] = useState({});
  const [post3, setPost3] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];
  //new
  const getProject = async () =>{
    const response = await axios.get("http://localhost:5000/api/project/projectnumber/2")
    if(response.status === 200){
      setPost3(response.data)
      console.log("result =>>>>>>>>>>>>>>")
      console.log(response.data)
      console.log("result =>>>>>>>>>>>>>>")
    }
  }
  // const { currentUser } = useContext(AuthContext);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get(`/posts/${postId}`);
  //       setPost(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, [postId]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const requestOptions = {
  //         method: "GET",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({
  //           id: postId
  //         }),
  //       };
  //       const pathReq = "http://localhost:5000/api/project/projectnumber/"+postId;
  //       await fetch(pathReq, requestOptions)
  //         .then((response) => response.json())
  //         .then((data) => {
  //           // setLoading2(true)
  //           console.log(data)
  //       });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, [postId]);


  /// 2
  useEffect(() => {
    const fetchData = async () => {
      let getdata;
      try {
        const requestOptions = {
          method: "HEAD",
          mode: 'no-cors',
          headers: { "Content-Type": "application/json" },
         
        };
        //.then((response) => {
        const pathReq = "http://localhost:5000/api/project/projectnumber/"+postId; 
        await fetch(pathReq, requestOptions)
          .then((response) => {
            getdata=response;
            console.log(`response 1 : ${response.status}`);
            console.log(`response 2 : ${response.data}`);
            console.log(`response 3 : ${response.Response}`);
            // console.log(`response 3 : ${response.json}`);
            //debugger;
            Object.keys(response.json).forEach(function(key) {
              console.log('Key : ' + key + ', Value : ' + response[key])
            })
          }).then((data)=>{
            console.log("DATA :",data)
          })
          
      } catch (err) {
        console.log(err);
      }
      //console.log(`getdata 1 : ${getdata}`)
      // console.log(`getdata  2: ${getdata.json()}`)
     
    };
    fetchData(); 
  }, [postId]);

  useEffect(() => {
    const fetchData = async () => {
      let getdata;
      const testURL = "http://localhost:5000/api/project/projectnumber/2";
      const myInit = {
        method: 'GET',

        headers: { "Content-Type": "application/json","Access-Control-Allow-Origin": "*", },
        
        mode: 'no-cors',
      };
      const myRequest = new Request(testURL);
      await fetch(myRequest).then((response) => { 
        console.log("TESSSSSSSSSt"); 
        // let asdas = response.json();
        setPost2(response.json())
        // console.log("=> 0 =>  "+asdas);
        console.log("=> 1 =>  "+response.body);
        console.log("=> 2 =>  "+response['project']);
        // console.log("=> 3 =>  "+asdas);
        console.log("=> 4 =>  "+response.status);
        debugger
        console.log((response))
      }).then((data) =>{
        console.log("data 2 "+data)
      }).catch(function(e){
        console.log(e);
      });
    }
    // fetchData();
    const printAddress = async () => {
      const a = await fetchData();
      console.log(post2);
    };
    printAddress()
    getProject()
    // console.log(post2['PromiseResult']);
    // console.log(post2);
    // console.log(post2.promiseResult);
  },[])
  // fetch("http://localhost:5000/api/project/projectnumber/2").then((response) => {
  //   setPost3(response.json())
  //   console.log(post3)
  //   console.log("post3");
  //   console.log(post3)
  // },[])
  


  

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }


  


  return (
    <div className="single">
      <div className="content">
        <img src={`../upload/${post?.img}`} alt="" />
        <div className="user">
          {post.userImg && <img
            src={post.userImg}
            alt=""
          />}
        </div>
        <h1>{post.title}</h1>
        <h1>{post3.project}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
        ></p>      </div>
      <Menu cat={post.cat}/>
      
    </div>
  );
};

export default Single;

/*
useEffect(() => {
    const fetchData = async () => {
      let getdata;
      try {
        const requestOptions = {
          method: "GET",
          mode: 'no-cors',
          headers: { "Content-Type": "application/json" },
         
        };
        //.then((response) => {
        const pathReq = "http://localhost:5000/api/project/projectnumber/"+postId; 
        // await axios (pathReq, requestOptions)
        await axios.get(pathReq,{
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          responseType: "json",
          })
          .then((response) => {
            getdata=response;
            console.log(response.json());
            console.log(`response 1 : ${response.data}`);
            console.log(`response 2 : ${response.data}`);
            console.log(`response 2 : ${response.Response}`);
            // console.log(`response 3 : ${response.json}`);
            //debugger;
            Object.keys(response.json).forEach(function(key) {
              console.log('Key : ' + key + ', Value : ' + response[key])
            })
          }).then((data)=>{
            console.log("DATA :",data)
          })
          
      } catch (err) {
        console.log(err);
      }
      console.log(`getdata 1 : ${getdata}`)
      // console.log(`getdata  2: ${getdata.json()}`)
      debugger
    };
    fetchData(); 
  }, [postId]);
*/