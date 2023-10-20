import { useState } from "react";
import { motion } from "framer-motion";
// import "./styles.css";

export default function Layout() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div className={`w-[160px] h-[100px] mt-72 mx-auto bg-orange-600 flex rounded-full p-[10px] cursor-pointer ${isOn? 'justify-start' : 'justify-end'}`} data-isOn={isOn} onClick={toggleSwitch}>
      <motion.div className="w-[80px] h-[80px] bg-slate-200 rounded-full" layout transition={spring} /> 
      {/* coba hapus atribut layoutnya makan animasinya tidak akan jalan */}
    </div>
  );
}

const spring = {
  type: "spring",  // efek membal
  stiffness: 200, // kecepatan, semakin tinggi nilainya makan animasinya semakin cepat
  damping: 30 // untuk meningkatkan atau menurunkan efek membalnya, atur range antara 0-100 kalau 0 akan membal terus
};