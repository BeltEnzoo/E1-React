import { Provider } from "react-redux";
import { store } from "./redux/store";
import TaskList from "./components/container/TaskList";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <TaskList />
    </Provider>
  );
}

export default App;
