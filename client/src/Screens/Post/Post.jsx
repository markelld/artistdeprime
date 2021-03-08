import { useState } from 'react'; 
import { Link, withRouter } from 'react-router-dom'; 
import Layout from "../../Components/Layout/Layout"; 
import Form from 'react-bootstrap/Form' 
import "./Post.css";

function Post(props) {
  const [formData, setFormData] = useState({
    caption: '', 
    image_url:''
  });
  const { caption, image_url } = formData; 
  const { handleCreate } = props; 

  const handleChange = (e) => { 
    const { name, value } = e.target; 
    setFormData(prevState => ({ 
      ...prevState, 
      [name]: value
    }))
  } 
  return (  
    <div className="newpost-form">  
      <div>
        <Form
          onSubmit={(e) => {
          e.preventDefault();
          handleCreate(formData);
          }}>  
            <Form.Group>
              <Form.Control 
                type='text'
                name='caption' 
                placeholder="caption"
                value={caption}
                onChange={handleChange} 
                required
              />
              </Form.Group>
            <br />  
            <Form.Group>
              <Form.Control 
                type='text'
                name='image_url' 
                placeholder="image_url"
                value={image_url}
                onChange={handleChange} 
                required
              />
            </Form.Group>
            <br /> 
            {/* <Link to="/main"> */}
              <button className="post-button">Post</button>
            {/* </Link> */}
          </Form>
      </div>
    </div>
  )
} 

export default Post;
