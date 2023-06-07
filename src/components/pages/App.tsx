
import '../../App.css';
import StarterPage from './StarterPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
      <Routes>
        <Route path="publisher/" element={<StarterPage/>}></Route>
      </Routes>
  );
}

export default App;
