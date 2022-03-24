import React, { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import { UserContext } from "../UserContext";
import "./Nav.css";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect, signOut } from "firebase/auth";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";

function Nav() {
  const [user] = useContext(UserContext);
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithRedirect(auth, provider);
  };
  return (
    <><Paper sx={{ position: 'sticky', top: 0, left: 0, right: 0 }} elevation={3}>
      <div className="nav">
        <div className="nav-title">
          <h2 className="nav-title">todo</h2>
        </div>
        <div className="nav-links">
          {user && (
            <>
            
              <Avatar src={user?.photoURL} />
              <p className="nav-link">{user?.displayName}</p>
              <Button
                variant="contained"
                size="small"
                onClick={() => {
                  signOut(auth);
                }}
              >
                Sign Out
              </Button>
            </>
          )}
          {!user && (
            <>
              <Button
                variant="contained"
                size="small"
                onClick={signInWithGoogle}
              >
                Sign In
              </Button>
              
            </>
          )}
        </div>
      </div>
      </Paper>
    </>
  );
}

export default Nav;
