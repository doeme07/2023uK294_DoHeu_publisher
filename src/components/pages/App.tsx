
import '../../App.css';
import AddPage from './AddPage';
import StarterPage from './StarterPage';
import {Route, Routes } from 'react-router-dom';


function App() {
  return (
      <Routes>
        <Route path="/" element={<StarterPage/>}></Route>
        <Route path="publisher/" element={<StarterPage/>}></Route>
        <Route path="publisher/add" element={<AddPage/>}></Route>
      </Routes>
  );
}

export default App;
