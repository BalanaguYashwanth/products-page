import { Provider } from "react-redux";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import { store } from "./redux/store";
import Login from "./pages/Login";

function App() {
  return (
    <Provider className="App" store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />  
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
