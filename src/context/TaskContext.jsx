import React, { createContext, useState, useContext } from 'react'

// Crear el contexto
const TaskContext = createContext();

// Componente proveedor del contexto
export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);  // Lista de tareas
    const [error, setError] = useState('');  // Mensaje de error


    // Función para agregar una tarea

    const addTask = (task) => {
        if (tasks.includes(task)) {
            setError('Esta tarea ya existe.');  // Mostrar error si la tarea ya existe
        } else {
            setTasks([...tasks, task]);  // Agregar tarea a la lista
            setError('');  // Limpiar el mensaje de error si la tarea es agregada correctamente
        }
    };

    // Función para borrar todas las tareas
    const deleteAllTasks = () => {
        setTasks([]);
        setError('');
    };

    // Función para borrar una tarea específica
    const deleteTask = (taskToDelete) => {
        const newTasks = tasks.filter(task => task !== taskToDelete);  // Filtramos la tarea a eliminar
        setTasks(newTasks);
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteAllTasks, deleteTask, error }}>
            {children}
        </TaskContext.Provider>
    );
};



// Hook para acceder al contexto en otros componentes
export const useTaskContext = () => useContext(TaskContext);