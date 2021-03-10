import { getOnePost } from "../../Services/posts";
import { useParams, useHistory, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form"; 
import "./PostDetail.css";

function PostDetail(props) {
  const [postItem, setPostItem] = useState(null); 

  const { id } = useParams();
  const { currentUser, handleDelete, comments, commentHandleCreate } = props; 
  // const [formData, setFormData] = useState({
  //   comment: "",
  // });

  useEffect(() => {
    const fetchPostItem = async () => {
      const postData = await getOnePost(id);
      setPostItem(postData);
    };
    fetchPostItem();
  }, [id]);  
  
  // const handleChange = (e) => {
  //   const { name, value } = e.target; 
  //   const newComment = { [name]: value } 
  //   setFormData(formData => {
  //     return {...formData, ...newPost }
  //   })
  // }

  return (
    <div className="postdetail-container">
      <img src={postItem?.image_url} className="postdetail-image" />
      <h4 className="caption">{postItem?.caption}</h4>  
      { postItem?.comments.map((comment) => (
        <h5>{comment.comment}</h5> 
      ))}
        <Form>
            {/* onSubmit={(e) => {
                e.preventDefault();
                commentHandleCreate(formData); 
              }}>   */}
            <Form.Group>
                <Form.Control
                  type="text"
                  name="comment"
                  placeholder="comment"
                  // value={comment}
                  // onChange={handleChange}
                  required
                  className="comment-form"
                  size="lg"
                  as="textarea"
                  cols={35}
                  rows={4}/>
            </Form.Group>
      </Form> 
       <button className="comment">comment</button>
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
     
