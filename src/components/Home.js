import { onAuthStateChanged } from "firebase/auth";
import React, { useContext } from "react";
import { auth } from "../firebase";
import Nav from "./Nav";
import { UserContext } from "../UserContext";
import Todo from "./Todo";

function Home() {
  const [user, setUser] = useContext(UserContext);

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });
  return (
    <div>
      <Nav />
      {!user && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '40px'
        }}>
          <h1>Welcome to todo</h1>
          <h3>where actions are made.</h3><br/>
          <p>Sign in to continue.</p>
        </div>
      )}

      {user && (

        <>
          <Todo />
        </>
      )}
    </div>
  );
}

export default Home;
