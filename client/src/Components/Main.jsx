import { Link } from "react-router-dom";  
import React from "react";
// import { getPosts, getOnePost, postPost, putPost, destroyPost } from "../Services/posts";
// import { useState, useEffect } from 'react';
import "./Main.css";
// import Post from "../Screens/Post/Post"; 
// import PostEdit from "./Screens/PostEdit/PostEdit"; 
// import PostDetail from "./Screens/PostDetail/PostDetail"; 

function Main(props) { 
  const { posts } = props;
  
  
  return (    
      <div className="post-home">
        {posts.map((post) =>  
          <React.Fragment key={post.id} > 
            <div className="post-container">
              <Link to={`/postdetail/${post.id}`}>
                <img src={post.image_url}  className="image-post"/> 
                <p>{post.user.username}</p>
              </Link> 
            </div>
          </React.Fragment>
      )}
      </div>
  )
} 

export default Main;
    
        
       




