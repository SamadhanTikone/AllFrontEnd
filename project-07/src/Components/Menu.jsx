import { motion } from "motion/react"

export default function Menu() {
  return (
    <motion.div
    layoutId="modal"
    initial={{opacity:0, }}
     animate={{opacity:1,  x:100,}}
     
     
    >
            <h1 className="text-[200px] text-white">MENU</h1>
    </motion.div>
  )
}
