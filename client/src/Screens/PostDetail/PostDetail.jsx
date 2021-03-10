import { getOnePost } from "../../Services/posts";
import { useParams, useHistory, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form"; 
import "./PostDetail.css";

function PostDetail(props) {
  const [postItem, setPostItem] = useState(null);
  const { id } = useParams();
  const { currentUser, handleDelete } = props;

  // const [commentItem, setcommentItem] = useState({
  //   comment: "",
  // });

  useEffect(() => {
    const fetchPostItem = async () => {
      const postData = await getOnePost(id);
      setPostItem(postData);
    };
    fetchPostItem();
  }, [id]);

  return (
    <div className="postdetail-container">
      <img src={postItem?.image_url} className="postdetail-image" />
      <h4 className="caption">{postItem?.caption}</h4> 
        <Form>
            {/* onSubmit={(e) => {
                e.preventDefault();
                handleCreate(formData); 
                history.push('/main');
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
          {postItem &&
            (currentUser.id === postItem.user_id ? (
              <div className="button-div">
                <button onClick={() => handleDelete(postItem.id)}
                className="delete-button" >delete</button> 
                <button className="comment">comment</button>
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
     
