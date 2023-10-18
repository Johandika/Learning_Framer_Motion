import {motion} from 'framer-motion'

const DragAnimation = () => {
  return (
    <div className="text-xl flex justify-center items-center h-screen gap-24 flex-col">
      <h1 className='font-bold text-4xl text-slate-600'>Drag Animation</h1>
      <div className='flex flex-row gap-48'>
        <div>
          <h1 className='text-sm font-bold text-slate-500'>No Constraint</h1>
          <motion.div 
            className='w-28 h-28 bg-blue-600'
            drag
          ></motion.div>
        </div>
        <div>
          <h1 className='text-sm font-bold text-slate-500'>Drag Y Only</h1>
          <motion.div 
            className='w-28 h-28 bg-blue-600'
            drag = 'y'
          ></motion.div>
        </div>
        <div>
          <h1 className='text-sm font-bold text-slate-500'>Drag Constraint</h1>
          <motion.div 
            className='w-28 h-28 bg-blue-600'
            drag
            dragConstraints = {{left:0, right:100}}
          ></motion.div>
        </div>
        
      </div>
    </div>
  )
}

export default DragAnimation