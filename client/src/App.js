import { Switch, Route, useHistory } from "react-router-dom";  
import { loginUser, registerUser, verifyUser, removeToken } from './Services/users';
import { useState, useEffect } from 'react';
import { getPosts, getOnePost, postPost, putPost, destroyPost } from "./Services/posts";
import SignIn from "./Screens/SignIn/SignIn";
import Register from "./Screens/Register/Register";  
import Main from "./Components/Main";  
import Post from "./Screens/Post/Post";  
import PostEdit from "./Screens/PostEdit/PostEdit"; 
import PostDetail from "./Screens/PostDetail/PostDetail"; 
import Layout from "./Components/Layout/Layout";
import './App.css';

function App() {
  
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);
  const history = useHistory(); 
  const [posts, setPosts] = useState([]);  
  // const { currentUser } = props; 

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData)
    }
    handleVerify();
  }, [])

  const handleLogin = async (formData) => {
    try {
      const userData = await loginUser(formData);
      setCurrentUser(userData);
      setError(null);
      history.push('/main');
    } catch (e) {
      setError("invalid login credentials");
    }
  } 
  const handleRegister = async (formData) => {
    try {
      const currentUser = await registerUser(formData);
      setCurrentUser(currentUser);
      history.push('/main');
    } catch (e) {
      setError("invalid sign up info")
    }
  } 
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  }
/// post 
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
    // history.push('/main');
  }
  const handleDelete = async (id) => {
    await destroyPost(id); 
    setPosts(prevState => prevState.filter((post) => post.id !== id))
  }
  
  
  return (
    <div className="App">
      <Switch>  
        <Route exact path="/">
          <SignIn 
            handleLogin={handleLogin}
            // error={error}
          />
        </Route> 
        <Route path="/register">
          <Register 
            handleRegister={handleRegister}
          />
        </Route>  
        <Route exact path="/main">  
          <Layout
          currentUser={currentUser}
          handleLogout={handleLogout}
          >
              <Main/>
          </Layout>
        </Route>   
        <Route path="/post"> 
          <Layout currentUser={currentUser} >
            <Post 
              handleCreate={handleCreate}
            />
          </Layout>
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
    </div>
  );
}

export default App;

        

