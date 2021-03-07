import "./SignIn.css";  
import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import Form from 'react-bootstrap/Form'   

const SignIn = (props) => { 
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const { username, password } = formData;
  const { handleLogin, error } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  return (    
    <Form classname="boot-form"
      onSubmit={(e) => {
      e.preventDefault();
      handleLogin(formData);
    }}>
      {
        error &&
        <p>{error}</p>
      }
    <div className="form-div"> 
      <div className="signin-container">
        <Form.Group>
          <Form.Control 
            className="username"
            placeholder="username"
            type='text'
            name='username'
            value={username}
            onChange={handleChange} 
            required 
            size="lg"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Control
            className="password"
            placeholder="password"
            type='password'
            name='password'
            value={password}
            onChange={handleChange} 
            required 
            size="lg"
          />
        </Form.Group>
        <br />
        <button className="signin-button">Enter</button> 
      <Link to='/register'>
        <h6 className="register-link">Register</h6>
      </Link> 
      </div>
    </div>
  </Form> 
    
  //   <form
  //     onSubmit={(e) => {
  //     e.preventDefault();
  //     handleLogin(formData);
  //   }}>
  //     {
  //       error &&
  //       <p>{error}</p>
  //     }
  //   <div className="form-div"> 
  //     <div className="signin-container">
  //       <label>
  //         <input  
  //           className="username"
  //           placeholder="username"
  //           type='text'
  //           name='username'
  //           value={username}
  //           onChange={handleChange}
  //         />
  //       </label>
  //       <br />
  //       <label>
  //         <input  
  //           className="password"
  //           placeholder="password"
  //           type='password'
  //           name='password'
  //           value={password}
  //           onChange={handleChange}
  //         />
  //       </label>
  //       <br />
  //       <button className="signin-button">Enter</button> 
  //     <Link to='/register'>
  //       <h4 className="register-link">Register</h4>
  //     </Link> 
  //     </div>
  //   </div>
  // </form> 
    
    
  )
} 

export default SignIn;
