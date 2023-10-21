import { Provider } from "react-redux";
import "./App.css";
import Homepage from "./pages/Homepage";
import { store } from "./redux/store";


function App() {
  return (
    <Provider className="App" store={store}>
      <Homepage />
    </Provider>
  );
}

export default App;
