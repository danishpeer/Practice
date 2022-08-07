function postReducer(state,action){
  switch(action.type){
      case 'ADD_POST':{
         const newPost = action.payload.post;
         return {posts: [newPost,...state.posts]};
      }
      case 'DELETE_POST':{
            const deleteID = action.payload.id;
            return {posts: state.posts.filter(post=>post.id!==deleteID)};
      }
      default:
           return state;
  }
}

export default postReducer;