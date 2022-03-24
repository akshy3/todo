import React, { useContext, useEffect, useState } from "react";
import TaskList from "./TaskList";
import { db } from "../firebase";
import { UserContext } from "../UserContext";
import { collection, onSnapshot } from "firebase/firestore";
import AddTask from "./AddTask";

function Todo() {
  const [user] = useContext(UserContext);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {

    onSnapshot(collection(db, "uid", user.uid, "tasks"), (snapshot) => {
      setTasks(
        snapshot.docs.map((docs) => ({
          id: docs.id,
          title: docs.data().title,
        }))
      );
    });
  }, [user.uid]);
  return (
    <div>
      <TaskList tasks={tasks} />
      <AddTask />
    </div>
  );
}

export default Todo;
