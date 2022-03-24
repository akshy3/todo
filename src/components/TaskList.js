import React from "react";
import Task from "./Task";
import List from "@mui/material/List";
import { Paper } from "@mui/material";

function TaskList({ tasks }) {
  return (
    <div>
      <Paper sx={{
        marginBottom: "100px"
      }}
      elevation={3}>
        <List>
          {tasks.map((task) => {
            return <Task task={task} key={task.id} />;
          })}
        </List>
      </Paper>
    </div>
  );
}

export default TaskList;
