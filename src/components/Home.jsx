import {motion} from 'framer-motion'
import TextAnimation from './TextAnimation'
import ExitEnterAnimation from './ExitEnterAnimation'
import DragAnimation from './DragAnimation'
import ScrollAnimation from './ScrollAnimation'
import ScrollAnimationTrigger from './ScrollAnimationTrigger'

const Home = () => {
  return (
    <>
        <motion.div
          initial={{x: '-100%'}}
          animate={{x:0}}
          exit={{x:'100%'}}
          // transition={{duration: 2}}
          className='bg-green-500 w-full h-screen font-black text-3xl p-16'
        >
          Home
        </motion.div>
        <TextAnimation/>
        <ExitEnterAnimation/>
        <DragAnimation/>
        <ScrollAnimation/>
        <ScrollAnimationTrigger/>
    </>
  )
}

export default Home