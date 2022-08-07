import React, { useState } from 'react';

function Login({setUser}){
 const [username,setUsername] = React.useState('')
   function handleFormSubmit(e){
            e.preventDefault();
            setUser(username);

   }
   return (<div>
             <h2>Login</h2>
             <form onSubmit = {handleFormSubmit}>
                <input type="text"
                onChange = {event=>setUsername(event.target.value)}
                placeholder="Input UserName" 
                /><br/> <br/>
                <button>Submit</button>
             </form>
           </div>
    );
}

export default Login;