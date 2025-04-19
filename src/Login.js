import React, { useState } from 'react';
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, twitterProvider } from './firebaseConfig';
import './Login.css';

function Login() {
  const [user, setUser] = useState(null);

  const handleLogin = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleLogout = () => {
    auth.signOut();
    setUser(null);
  };

  return (
    <div className="login-container">
      <h1>Flirt AI Auth</h1>

      {user ? (
        <div className="user-info">
          <img src={user.photoURL} alt="User" />
          <p>Welcome, {user.displayName}</p>
          <button className="logout" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="btn-group">
          <button onClick={() => handleLogin(googleProvider)}>Login with Google</button>
          <button onClick={() => handleLogin(twitterProvider)}>Login with Twitter</button>
        </div>
      )}
    </div>
  );
}

export default Login;
