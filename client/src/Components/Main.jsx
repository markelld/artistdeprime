import { Link } from "react-router-dom";  
import React from "react";
import "./Main.css";


function Main(props) { 
  const { posts,currentUser } = props; 
  return (    
      <> 
      
      {posts && ( 
        <div className="post-home">
          {posts.map((post) =>
            <React.Fragment key={post.id} >
              <div className="post-container">
                <Link to={`/postdetail/${post.id}`}>
                  <img src={post.image_url} className="image-post" />
                  <p className="user-name">{post.user.username}</p>
                </Link>
              </div>
            </React.Fragment>
          )}
        </div>)
      } 
      </>
  )
} 

export default Main;
    
        
       




