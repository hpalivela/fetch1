import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import "./Posts.css";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "./components/Redux/PostActions";
const Posts = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const singlePost = (id) => {
    navigate(`/singlePost/${id}`);
  };
  const dispatch=useDispatch();
  const completeData=useSelector((state)=>state.completePosts.allPosts)
  console.log(completeData)
  useEffect(() => {
    dispatch(getAll())
  }, [dispatch]);
  // useEffect(()=>{
  //   const fetchPosts=async ()=>{
  //       const results=await axios.get('https://jsonplaceholder.typicode.com/posts')
  //       const response = results.data
  //       setData(response)
  //   }
  //   fetchPosts()
  // })
  return (
    <div>
      {completeData.map((lists, id) => {
        return (
          
            <div className="back"  key={id}>
              <h4>{lists.title}</h4>
              <p>{lists.body}</p>
              {/* <Link to={`/singlePost/${lists.id}`} style={{textDecoration:"none",border:"2px solid black",padding:"8px",margin:"8px",background:"white"}} >View </Link> */}
              <button onClick={()=>singlePost(lists.id)}>View</button>
            </div>
          
        );
      })}
    </div>
  );
};

export default Posts;
