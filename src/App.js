import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';

function App() {
  // const navigate = useNavigate();
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route/>
      <Route path="*" element={<Navigate to={"/home"} />}/>
    </Routes>
    </>
  );
}

export default App;
