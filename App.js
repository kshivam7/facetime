import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from "./Components/Home";
import Room from "./Components/Room";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/room/:id" element={<Room/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
