import { getOnePost } from "../../Services/posts";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form"; 
import "./PostDetail.css";

function PostDetail(props) {
  const [postItem, setPostItem] = useState(null); 
  const { id } = useParams();
  const { currentUser, handleDelete, comments, commentHandleCreate, refresh } = props; 


const [formData, setFormData] = useState({
  comment: "", 
  post_id: "", 
  user_id: "",
  });

  useEffect(() => {
    const fetchPostItem = async () => {
      const postData = await getOnePost(id);
      setPostItem(postData);   
      if (currentUser) {
        setFormData(formData => {
          return { ...formData, post_id: id, user_id: `${currentUser.id}` }
        })
      }
    };
    fetchPostItem();
  }, [id,refresh]);  
  
  const handleChange = (e) => {
    const { name, value } = e.target; 
    const newComment = { [name]: value } 
    setFormData(formData => {
      return {...formData, ...newComment }
    })
  }

  return (
    <div className="postdetail-container">
      <img src={postItem?.image_url} className="postdetail-image" />
      <h4 className="caption">{postItem?.caption}</h4>  
      { postItem?.comments.map((comment) => (
        <h5>{comment.comment}</h5> 
      ))}
        <Form
            onSubmit={(e) => {
            e.preventDefault();
            commentHandleCreate(formData); 
              }}>  
            <Form.Group>
                <Form.Control
                  type="text"
                  name="comment"
                  placeholder="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  required
                  className="comment-form"
                  size="lg"
                  as="textarea"
                  cols={35}
                  rows={3}/>
            </Form.Group>
            <button className="comment">comment</button>
        </Form> 
          {postItem &&
            (currentUser.id === postItem.user_id ? (
              <div className="button-div">
                <button onClick={() => handleDelete(postItem.id)}
                  className="delete-button" >delete</button> 
                <Link to={`/postedit/${id}`}>
                  <button className="editpath-button">edit</button>
                </Link>
              </div>
            ) : (
              <></>
            ))}
    </div>
  );
}
                

export default PostDetail;
      
