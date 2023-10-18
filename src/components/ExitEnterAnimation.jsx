import {motion, AnimatePresence} from 'framer-motion'
import { useState } from 'react'

const ExitEnterAnimation = () => {
  const [show, setShow] = useState(true)
  
  return (
    <div className="text-xl flex flex-col gap-6 justify-center items-center h-screen">
      <h1>Exit Enter Animation</h1>
    <AnimatePresence>
      {show && 
        <motion.div
          initial={{opacity: 0, x:300}}
          animate={{opacity:1, x:0}}
          exit={{opacity:0, x:-300}}
          transition={{
            duration: 1,
          }}
          className='bg-red-500 w-40 h-40'
        >
        </motion.div>
      }
    </AnimatePresence>
    <button 
      onClick={()=> setShow(!show)}
      className='p-5 border-2 border-neutral-300 rounded-lg'
    >
      {show? 'Remove Cube' : 'Add Cube'}
    </button>
  </div>
  )
}

export default ExitEnterAnimation