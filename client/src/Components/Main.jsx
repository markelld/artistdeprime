import { Switch, Route, useHistory, Redirect} from "react-router-dom"; 
import { getPosts, getOnePost, postPost, putPost, destroyPost } from "../Services/posts";
import { useState, useEffect } from 'react';

import Post from "../Screens/Post/Post"; 
import PostEdit from "../Screens/PostEdit/PostEdit"; 
import PostDetail from "../Screens/PostDetail/PostDetail"; 

function Main(props) {
  const [posts, setPosts] = useState([]);  
  const { currentUser } = props; 
  const history = useHistory(); 
  // new post functions
  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await getPosts();
      setPosts(postList);
    }
    fetchPosts();
  }, [])  
  
  const handleCreate = async (postData) => {
    const newPost = await postPost(postData);
    setPosts(prevState => [...prevState, newPost]);
    history.push('/main');
  }
  const handleDelete = async (id) => {
    await destroyPost(id); 
    setPosts(prevState => prevState.filter((post) => post.id !== id))
  }
  
  
  return ( 
    <Switch>   
      <div className="home">
      </div>
        <Route path="/post">
          <Post 
            handleCreate={handleCreate}
          />
        </Route>
        <Route path="/postedit">
          <PostEdit 
            handleDelete={handleDelete}
          /> 
        </Route> 
        <Route path="/postdetail">
          <PostDetail/> 
        </Route>
    </Switch>
    
  )
} 

export default Main;
        
       




