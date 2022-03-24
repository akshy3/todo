import React, { useContext, useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { UserContext } from "../UserContext";
import { Paper } from "@mui/material";

function AddTask() {
  const [user] = useContext(UserContext);
  const taskRef = useRef(null);
  const addTask = (e) => {
    e.preventDefault();
    addDoc(collection(db, "uid", user.uid, "tasks"), {
      title: taskRef.current.value,
    });
    taskRef.current.value="";
  };
  return (
    <div>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "10px",
        }}
        elevation={0}
      >
        <form>
          <TextField
            id="outlined-basic"
            label="Task"
            variant="outlined"
            inputRef={taskRef}
          />
          <Button variant="contained" endIcon={<AddIcon />} onClick={addTask}>
            Add
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default AddTask;
