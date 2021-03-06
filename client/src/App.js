import { Switch, Route } from "react-router-dom";  
import { loginUser, registerUser, verifyUser, removeToken } from './Services/users';
import { useState, useEffect } from 'react';

import SignIn from "./Screens/SignIn/SignIn";
import Register from "./Screens/Register/Register";  
import Main from "./Components/Main"; 
import Layout from "./Components/Layout/Layout";
import './App.css';

function App() {
  
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const currentUser = await verifyUser();
      setCurrentUser(currentUser)
    }
    handleVerify();
  }, [])

  const handleLogin = async (formData) => {
    try {
      const currentUser = await loginUser(formData);
      setCurrentUser(currentUser);
      setError(null);
      history.push('/');
    } catch (e) {
      setError("invalid login credentials");
    }
  }
  
  
  
  return (
    <div className="App">
      <Switch>  
        <Route path="/signin">
          <SignIn 
            handleLogin={handleLogin}
            error={error}
          />
        </Route> 
        <Route path="/register">
          <Register/>
        </Route>  
        <Route path="/">  
          {/* state can be passed Nav for username and Main for crud */}
          <Layout>
            <Main/>
          </Layout>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

        

