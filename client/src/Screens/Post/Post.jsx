import { useState } from 'react'; 
import { Link, useHistory } from 'react-router-dom'; 
import Layout from "../../Components/Layout/Layout"; 
import Form from 'react-bootstrap/Form' 
import "./Post.css";

function Post(props) {
  const [formData, setFormData] = useState({
    image_url: '',
    caption: '',
  });
  const { image_url, caption } = formData;
  const { handleCreate} = props;
  const history = useHistory(); 

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newPost = { [name]: value }
    setFormData(formData => {
      return { ...formData, ...newPost }
    })
  }
  return (
    < div  >
    <div className = "newpost-form">
      <Form className = "postform-edit"
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate(formData);
          history.push('/main');
        }}>
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
        <button className="post-button">Post</button>
      </Form>
    </div>
    </div >
  )
} 

export default Post;
        
        
