import {motion} from 'framer-motion'

const Keyframes = () => {
  return (
    <motion.div
    className='w-[100px] h-[100px] bg-blue-500 mt-52 mx-auto'
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 180, 180, 0],
      borderRadius: ["0%", "0%", "50%", "50%", "0%"]
    }}
    transition={{
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
      repeatDelay: 1
    }}
  />
  )
}

export default Keyframes