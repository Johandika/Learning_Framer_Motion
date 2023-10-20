import {motion} from 'framer-motion'
import TextAnimation from './TextAnimation'
import ExitEnterAnimation from './ExitEnterAnimation'
import DragAnimation from './DragAnimation'
import ScrollAnimation from './ScrollAnimation'
import ScrollAnimationTrigger from './ScrollAnimationTrigger'
import Keyframes from './Keyframes'
import Layout from './Layout'
import LineDrawing from './LineDrawing'

const Home = () => {
  return (
    <>
        <LineDrawing/>

        <motion.div
          initial={{x: '-100%'}}
          animate={{x:0}}
          exit={{x:'100%'}}
          // transition={{duration: 2}}
          className='bg-green-500 w-full h-screen font-black text-3xl p-16'
        >
          Home
        </motion.div>
        <Keyframes/>
        {/* <LineDrawing/> */}
        <Layout/>
        <TextAnimation/>
        <ExitEnterAnimation/>
        <DragAnimation/>
        <ScrollAnimation/>
        <ScrollAnimationTrigger/>
    </>
  )
}

export default Home