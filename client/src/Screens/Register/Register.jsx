import "./Register.css"; 
import { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import Form from 'react-bootstrap/Form' 


export default function Register(props) {
  const [formData, setFormData] = useState({
    username: '',
    email:'',
    password: ''
  })
  const { username, email, password } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return ( 
    <Form onSubmit={(e) => {
      e.preventDefault();
      handleRegister(formData);
      }}>
      <div className="register-form">
        <div className="registerform-container">
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
              className="email"
              placeholder="email"
              type='text'
              name='email'
              value={email}
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
          <button className="register-button">Submit</button> 
          <Link to="/">
            <h6 className="login-link">Login</h6>
          </Link>
        </div>
      </div>
    </Form>
    // <form onSubmit={(e) => {
    //   e.preventDefault();
    //   handleRegister(formData);
    // }}>
    //   <label>
    //     Username:
    //     <input
    //       type='text'
    //       name='username'
    //       value={username}
    //       onChange={handleChange}
    //     />
    //   </label>
    //   <br />
    //   <label>
    //     Email:
    //     <input
    //       type='text'
    //       name='email'
    //       value={email}
    //       onChange={handleChange}
    //     />
    //   </label>
    //   <br />
    //   <label>
    //     Password:
    //     <input
    //       type='password'
    //       name='password'
    //       value={password}
    //       onChange={handleChange}
    //     />
    //   </label>
    //   <br />
    //   <button>Submit</button> 
    //   <Link to="/">
    //     <button>Login</button>
    //   </Link>
    // </form>
  )
}

