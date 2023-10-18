import {motion} from 'framer-motion'

const TextAnimation = () => {
  return (
    <div className="text-xl flex justify-center items-center h-screen">
    <motion.h1 
      initial= {{ x:-900}} // nilai y dan rotate nya juga bisa di berikan
      animate={{x:[0,500,-200,0]}} // bisa juga menggunakan array
      transition={{
        duration: 1.5,
        delay: 0
      }}
      whileHover={{scale: 1.4, opacity: 0.6}}
    >
        <div className="text-3xl font-bold text-neutral-800">Johandika</div>
    </motion.h1> 
  </div>
  )
}

export default TextAnimation