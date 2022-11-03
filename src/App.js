import './App.css';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line
// import styles bundle
import 'swiper/css/bundle';

import { Routes, Route } from "react-router-dom";
import MobileLegends from './pages/MobileLegends';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobile-legends" element={<MobileLegends />} />
        <Route path="/login" element={<Login />} />
    </Routes>
    </div>
  );
}

export default App;
