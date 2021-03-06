import { Switch, Route } from "react-router-dom"; 
import Home from "./Screens/Home/Home"; 
import Post from "./Screens/Post/Post"; 
import PostEdit from "./Screens/PostEdit/PostEdit"; 
import PostDetail from "./Screens/PostDetail/PostDetail"; 

function Main(props) {
  
  
  
  return ( 
    <Switch> 
      <Route path="/home">
          <Home/>
        </Route> 
        <Route path="/post">
          <Post/>
        </Route>
        <Route path="/postedit">
          <PostEdit/> 
        </Route> 
        <Route path="/postdetail">
          <PostDetail/> 
        </Route>
    </Switch>
    
  )
} 

export default Main;
