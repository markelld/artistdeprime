import { getOnePost } from "../../Services/posts";
import { useParams } from 'react-router-dom'; 
import { useState, useEffect } from 'react';

function PostDetail(props) {  
  const [postItem, setPostItem] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    const fetchPostItem = async () => { 
      console.log(id)
      const postData = await getOnePost(id);
      setPostItem(postData);
    } 
    fetchPostItem()
  },[id])
  
  
  return ( 
    <div> 
      <img src={postItem?.image_url} /> 
      

    </div>
    
  )
} 

export default PostDetail;