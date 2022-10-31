
import './App.css';
import {getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'
import app from './firebase/firebase.init';
import { useState } from 'react';
const auth =getAuth(app)
function App() {

  const provider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()
  const [user,setUser]=useState({})
  // sign in handler
  const googleSignInHandler=()=>{
    signInWithPopup(auth,provider)
    .then(result=>{
const user= result.user;
setUser(user)
console.log(user)

    })
    .catch(error=>{
      console.error(error)
    })
      }
      // sign out 
  const googleSignOutHandler =()=>{
    signOut(auth)
    .then(()=>setUser({}))
    .catch(()=>setUser({}))
    }

  // github sign in 
  const githubSignInHandler = ()=>{
    signInWithPopup(auth,githubProvider)
    .then(result=>{
      const user = result.user
      setUser(user)
      console.log(user)
    })
    .catch(error=>{
      console.log(error)
    })
  }
  return (
    <div className="App">
      {/* condition? true : false */}
    {
      user.uid?
      <button onClick={googleSignOutHandler}>google sgin out</button> :
      // <> </> this is call react fragment
      <>
        <button onClick={googleSignInHandler}>google sign in</button>
        <button onClick={githubSignInHandler}>sign in github</button>
         </>
    }

      {/* jodi user email thake thahole user details dhakhabe */}
      {
        user.uid  &&
        <div>
        <h2>user : {user.displayName}</h2>
        <p>email : {user.email}</p>
        <img src={user.photoURL} alt=''></img>
      </div> 
    
      }
    </div>
  );
}

export default App;
