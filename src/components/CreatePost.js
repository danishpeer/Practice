import React from 'react';
import {PostContext} from '../App';

function CreatePost({user}){
    const {dispatch} = React.useContext(PostContext);
  const [content,setContent] = React.useState('');
  const [image,setImage] = React.useState(null);
  const imageInputRef = React.useRef(); 
  function handleFormSubmit(e){
          e.preventDefault();
          const post = {content,image,user,id:Date.now()};
        //   handleAddPost(post);
        //   const newPosts = [post,...posts];
        //   setPosts(newPosts);
        dispatch({type:'ADD_POST',payload:{post }});
          setContent('');
          imageInputRef.current.value = '';
        }
  return (
       <div>
           <h3>Create New Post:</h3>
           <form onSubmit={handleFormSubmit}>
           <input type = "text"
             placeholder = "Add Post Content"
             onChange = {event=> setContent(event.target.value)}
             value = {content}
           />
           <br/><br/>
           <input type = "file"
            ref = {imageInputRef}
             onChange = {event=> setImage(event.target.files[0])}
           />
           <br/><br/><button>Create Post</button>
           </form>
       </div>
        
        );
}

export default CreatePost;