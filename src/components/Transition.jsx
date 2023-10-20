import {motion} from 'framer-motion'

const Transition = () => {
  return (
    <>
        <motion.div
           initial={{x: '-100%'}}
           animate={{x:0}}
           exit={{x:'100%'}}
          className='bg-blue-500 h-screen text-3xl p-16'
        >
            Transition sukses
        </motion.div>
    </>
  )
}

export default Transition