import './App.css'

import { lazy, Suspense } from 'react'
import { HashRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import('./pages/Home/Home.jsx'));
const Destination = lazy(() => import('./pages/Destination/Destination.jsx'));
const Crew = lazy(() => import('./pages/Crew/Crew.jsx'));
const Technology = lazy(() => import('./pages/Technology/Technology.jsx'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound.jsx'));

function App() {
  return (
    <HashRouter>
      <Suspense fallback={<div style={{display:'grid',placeItems:'center',minHeight:'100dvh',background:'hsl(230 35% 7%)',color:'white',fontFamily:'sans-serif',fontSize:'1.5rem'}}>Carregando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App

