import React, {useReducer } from 'react';
import Login from './components/Login';
import Header from './components/Header';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import postReducer from './components/reducer';
export const UserContext = React.createContext();
export const PostContext = React.createContext({
    posts:[]
});
function App(){
  const [user,setUser] = React.useState('');
//   const [posts,setPosts] = React.useState([]);
  const initialPostState = React.useContext(PostContext);
 const [state, dispatch] = useReducer(postReducer, initialPostState); 
  React.useEffect(()=>{
     document.title = user?`${user}'s feed`:"Login";
  },[user])
//   const handleAddPost = React.useCallback( //important for rerendering and not making this function again and again
//        newPost=>{
//          const newPosts = [newPost,...posts];
//           setPosts(newPosts);
//   },[posts]);
  if(!user){
      return <Login setUser = {setUser}/>
  }
    return (
        <PostContext.Provider value = {{state,dispatch}}>
        <UserContext.Provider value ={user}>
        <Header user = {user} setUser = {setUser}/>
        <CreatePost user = {user}/>
        <PostList posts = {state.posts} /> 
        </UserContext.Provider>
    </PostContext.Provider>
    );
}

export default App;