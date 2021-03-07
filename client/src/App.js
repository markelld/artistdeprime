import { Switch, Route, useHistory } from "react-router-dom";  
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
          {/* state can be passed Nav for username and Main for crud */}
          <Layout
          currentUser={currentUser}
          handleLogout={handleLogout}
          >
            <Main/>
          </Layout>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

        

