import React from 'react'
import Nav from './Nav'
import { AnimatePresence } from 'framer-motion'

const TransitionSmooth = ({ isVisible }) => {
  return (
      <>
        <Nav/>
        <div>
          TransitionSmooth
        </div>
      </>
  )
}

export default TransitionSmooth