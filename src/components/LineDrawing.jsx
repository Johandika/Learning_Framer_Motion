import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

export default function LineDrawing() {
  return (
    <motion.svg
      width="600"
      height="600"
      viewBox="0 0 600 600"
      initial="hidden"
      animate="visible"
      className='mx-auto'
    >
      <motion.circle
        style={{strokeLinecap:"round"}}
        className='stroke-[10px] fill-transparent'
        cx="100"
        cy="100"
        r="80"
        stroke="#ff0055"
        variants={draw}
        custom={1}
      />
      <motion.line
        style={{strokeLinecap:"round"}}
        className='stroke-[10px] fill-transparent'
        x1="220"
        y1="30"
        x2="360"
        y2="170"
        stroke="#00cc88"
        variants={draw}
        custom={2}
      />
      <motion.line
        style={{strokeLinecap:"round"}}
        className='stroke-[10px] fill-transparent'
        x1="220"
        y1="170"
        x2="360"
        y2="30"
        stroke="#00cc88"
        variants={draw}
        custom={2.5}
      />
      <motion.rect
        style={{strokeLinecap:"round"}}
        className='stroke-[10px] fill-transparent'
        width="140"
        height="140"
        x="410"
        y="30"
        rx="20"
        stroke="#0099ff"
        variants={draw}
        custom={3}
      />
      <motion.circle
        style={{strokeLinecap:"round"}}
        className='stroke-[10px] fill-transparent'
        cx="100"
        cy="300"
        r="80"
        stroke="#0099ff"
        variants={draw}
        custom={2}
      />
      <motion.line
        style={{strokeLinecap:"round"}}
        className='stroke-[10px] fill-transparent'
        x1="220"
        y1="230"
        x2="360"
        y2="370"
        stroke="#ff0055"
        custom={3}
        variants={draw}
      />
      <motion.line
        style={{strokeLinecap:"round"}}
        className='stroke-[10px] fill-transparent'
        x1="220"
        y1="370"
        x2="360"
        y2="230"
        stroke="#ff0055"
        custom={3.5}
        variants={draw}
      />
      <motion.rect
        style={{strokeLinecap:"round"}}
        className='stroke-[10px] fill-transparent'
        width="140"
        height="140"
        x="410"
        y="230"
        rx="20"
        stroke="#00cc88"
        custom={4}
        variants={draw}
      />
      <motion.circle
        style={{strokeLinecap:"round"}}
        className='stroke-[10px] fill-transparent'
        cx="100"
        cy="500"
        r="80"
        stroke="#00cc88"
        variants={draw}
        custom={3}
      />
      <motion.line
        style={{strokeLinecap:"round"}}
        className='stroke-[10px] fill-transparent'
        x1="220"
        y1="430"
        x2="360"
        y2="570"
        stroke="#0099ff"
        variants={draw}
        custom={4}
      />
      <motion.line
        style={{strokeLinecap:"round"}}
        className='stroke-[10px] fill-transparent'
        x1="220"
        y1="570"
        x2="360"
        y2="430"
        stroke="#0099ff"
        variants={draw}
        custom={4.5}
      />
      <motion.rect
        className='stroke-[10px] fill-transparent'
        style={{strokeLinecap:"round"}}
        width="140"
        height="140"
        x="410"
        y="430"
        rx="20"
        stroke="#ff0055"
        variants={draw}
        custom={5}
      />
    </motion.svg>
  );
}