import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, deleteAllTasks } from "../../redux/taskSlice";
import { Header, TaskInput, AddButton, ErrorText, TaskListContainer, TaskText, LiText } from "./conteiner-styled";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const error = useSelector((state) => state.tasks.error);
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      dispatch(addTask(taskInput));
      setTaskInput(""); 
    }
  };

  return (
    <TaskListContainer>
      <Header>NuncTask</Header>

      <TaskInput
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Agregar tarea"
      />
      <AddButton onClick={handleAddTask}>Agregar tarea</AddButton>

      {error && <ErrorText>{error}</ErrorText>}

      <TaskText>
        {tasks.map((task, index) => (
          <LiText key={index}>
            {task}
            <AddButton onClick={() => dispatch(deleteTask(task))}>Eliminar</AddButton>
          </LiText>
        ))}
      </TaskText>

      <AddButton onClick={() => dispatch(deleteAllTasks())}>Eliminar todas las tareas</AddButton>
    </TaskListContainer>
  );
};

export default TaskList;
