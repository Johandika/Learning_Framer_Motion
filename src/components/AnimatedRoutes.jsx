import Home from './Home'
import Transition from './Transition'
import {  Routes, Route, useLocation } from 'react-router-dom'
// import { AnimatePresence } from 'framer-motion/dist/framer-motion'
import { AnimatePresence } from 'framer-motion'


const AnimatedRoutes = () => {
  const location =useLocation()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>}/>
        <Route path='/transition' element={<Transition/>}/>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes