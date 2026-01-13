import './App.css'

import { HashRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home/Home.jsx';
import Destination from './pages/Destination/Destination.jsx';
import Crew from './pages/Crew/Crew.jsx';
import Technology from './pages/Technology/Technology.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';

function App() {

  return (
    <>
      <HashRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App

