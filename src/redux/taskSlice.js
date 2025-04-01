import { createSlice } from "@reduxjs/toolkit";

// Cargar tareas desde LocalStorage
const loadTasks = () => {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
};

const initialState = {
  tasks: loadTasks(),
  error: "",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      if (state.tasks.includes(action.payload)) {
        state.error = "Esta tarea ya existe.";
      } else {
        state.tasks.push(action.payload);
        state.error = "";
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteAllTasks: (state) => {
      state.tasks = [];
      state.error = "";
      localStorage.removeItem("tasks");
    },
  },
});

export const { addTask, deleteTask, deleteAllTasks } = taskSlice.actions;
export default taskSlice.reducer;
