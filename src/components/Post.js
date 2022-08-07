import React from 'react';
import {PostContext,UserContext} from '../App';
function Post({image,user,content,id}){
   const currentUser = React.useContext(UserContext);
   const {dispatch} = React.useContext(PostContext);
   function handleDeleteButton(){
          dispatch({type:'DELETE_POST',payload:{id:id}})
   } 
    return ( 
           <>
           <p style = {{color:currentUser===user&&'green'}}><b>{user}:</b></p>
           {image&&(
            <img 
             style ={{height:100,width:200,objectFit:'cover'}}
             src = {URL.createObjectURL(image)}
             alt = "Post Cover" 
             />
           )}
           
           <p>{content}</p>
           {currentUser===user&&<button onClick = {handleDeleteButton}>Delete</button>}
           </>   
    );

}
export default Post;