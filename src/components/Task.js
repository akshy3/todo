import {
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteDoc, doc } from "firebase/firestore";
import { UserContext } from "../UserContext";
import { db } from "../firebase";

function Task({ task }) {
  // const deleteTask = () => {
  //   deleteDoc()
  // };
  const [user] = useContext(UserContext);
  return (
    <div>
      <ListItem divider>
        <ListItemButton>
          <ListItemText primary={task.title} />
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => {
              deleteDoc(doc(db, "uid", user.uid, "tasks", task.id));
            }}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemButton>
      </ListItem>
    </div>
  );
}

export default Task;
