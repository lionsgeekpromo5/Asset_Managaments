import React from "react";
import SideBar from "../Components/SideBar";
import { motion, scale } from "motion/react";
import rotate from "../Components/Animations/rotate";

function TestAnimation() {
  return (
    <div className="grid grid-cols-[20%_1fr] ">
      <SideBar />
      <div className="">
        <h1>Animation Page using framer motion</h1>
        <motion.div
          initial={{ top: -50 }}
          whileInView={{ top: 0 }}
          transition={{ duration: 1.5 }}
          className="bg-black  flex  gap-x-20 p-2 relative"
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <motion.div
              variants={rotate()}
              initial="hidden"
              whileInView="show"
              whileHover={{ scale:1.5 }}
              whileTap={{ scale: 0.5 }}
              
              // initial={{ rotate:0, opacity: 0 }}
              // animate={{ rotate:180, opacity: 1, scale: index === 2 ? 1.5 : 1 }}
              // transition={{duration: 1, delay:1.5, ease:'easeInOut'}}
              key={index}
              className="w-[100px] h-[100px] bg-red-600 rounded-md"
            ></motion.div>
          ))}
        </motion.div>
        <div className="h-[120vh] bg-amber-300 relative">
            
            <motion.div
          variants={rotate(90, 180, 2, 1.5)}
          initial="hidden"
          whileInView="show"
          className="w-50 h-50 bg-amber-800 rounded-2xl absolute bottom-0"
        ></motion.div>
        </div>
        
      </div>
    </div>
  );
}

export default TestAnimation;
