import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Posts.css";
import { useDispatch, useSelector } from "react-redux";
import { single } from "./components/Redux/PostActions";

const SinglePost = () => {
  const [post, setPost] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const homePage = () => {
    navigate("/");
  };
  const dispatch=useDispatch();
  const oneData=useSelector((state)=>state.completePosts.onePost)
  // console.log(oneData)
  useEffect(() => {
  dispatch(single(id))
  }, []);
  return (
    <div>
      <div className="back" >
        <h4>{oneData.title}</h4>
        <p>{oneData.body}</p>
        <button onClick={() => homePage()}>Back</button>
      </div>
    </div>
  );
};

export default SinglePost;
