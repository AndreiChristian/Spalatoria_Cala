"use client";

import { motion } from "framer-motion";

interface Props {
  image: {
    src: string,
    alt: string,
  }
}

export default function Item({ image }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -10
      }}
      whileInView={{
        opacity: 1,
        x: 0
      }}
      transition={{
        duration: 0.5,
        delay: 0.2
      }}
      className="p-4 bg-gray-100 rounded-lg flex flex-col" >
      <img className=" w-full " src={image.src} alt={image.alt} />
      <p className="font-bold" >{image.alt}</p>
    </motion.div>
  )
}
