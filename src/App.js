import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../src/Pages/Js/HomePage'
import NavBar from './NavBAr/NavBar'
import BottomNav from './NavBAr/BottomNav';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <BottomNav />
    </Router>
  );
}

export default App;
