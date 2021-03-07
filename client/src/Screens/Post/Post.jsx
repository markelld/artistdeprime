import { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import Layout from "../../Components/Layout/Layout";

function Post(props) {
  const [formData, setFormData] = useState({
    caption: '', 
    image_url:''
  });
  const { caption, image_url } = formData; 
  const { handleCreate } = props; 

  const handleChange = (e) => { 
    const { caption, image_url, value } = e.target; 
    setFormData(prevState => ({ 
      ...prevState, 
      [caption]: value, 
      [image_url]: value
    }))
  }
  return (  
    <Layout> 
      <div className="newpost-form"> 
        <form onSubmit={(e)=>{
        e.preventDefault();
        handleCreate(formData);
      }}>
        <h3>New Post</h3>
          <input
            type='text'
            name='caption' 
            placeholder="caption"
            value={caption}
            onChange={handleChange}
          />
          <br /> 
          <input
            type='text'
            name='image_url' 
            placeholder="image_url"
            value={image_url}
            onChange={handleChange}
          />
          <br /> 
          <Link to="/main">
            <button>Submit</button>
          </Link>
      </form>
      </div>
    </Layout>
  )
} 

export default Post;
