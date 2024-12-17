import React, { useState } from 'react'
import { useTaskContext } from '../../context/TaskContext'
import { Header, TaskInput, AddButton, ErrorText, TaskListContainer, TaskText, LiText } from './conteiner-styled'

const TaskList = () => {
  const { tasks, addTask, deleteAllTasks, deleteTask, error  } = useTaskContext();
  const [taskInput, setTaskInput] = useState('');  // Estado para el input

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      addTask(taskInput);
      setTaskInput('');  // Limpiar el input después de agregar la tarea
    }
  };

  return (
    <TaskListContainer>
      <Header>NuncTask</Header>

      <TaskInput
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}  // Actualizar el estado del input
        placeholder="Agregar tarea"
      />
      <AddButton onClick={handleAddTask}>Agregar tarea</AddButton>

      {error && <ErrorText>{error}</ErrorText>}  {/* Mostrar el mensaje de error */}


      <TaskText>
        {tasks.map((task, index) => (
          <LiText key={index}>
            {task}
            <AddButton onClick={() => deleteTask(task)}>Eliminar</AddButton>  {/* Botón para eliminar una tarea específica */}
          </LiText>
        ))}
      </TaskText>




      <AddButton onClick={deleteAllTasks}>Eliminar todas las tareas</AddButton>  {/* Borrar todas las tareas */}
    </TaskListContainer>
  );
};

export default TaskList;