import {motion} from 'framer-motion'

const ScrollAnimationTrigger = () => {
  return (
    <div className='flex flex-col items-center mt-12'>
      <h2 className='text-3xl font-bold'>React Scroll Animation With Framer Motion</h2>
      <Box/>
      <Box/>
      <Box/>
    </div>
  )
}

const Box = () => {
  return(
    <motion.div 
      className='w-20 h-20 mx-auto my-96 bg-red-500'
      initial= {{opacity: 0, scale: 0}}
      whileInView={{opacity: 1, scale: 1}}
      transition={{duration: 0.6, delay: 0.3}}
      viewport={{once: true}} // efeknya hanya akan tampil pertama render saja
    >

    </motion.div>
  )
}

export default ScrollAnimationTrigger