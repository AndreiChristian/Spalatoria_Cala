"use client";

import { motion } from "framer-motion"
import Image from "next/image";

interface Props {
  feature: {
    title: string,
    description: string
  }
}

export default function Service({ feature }: Props) {
  return (
    <div >
      <div>
        <div className="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
          <Image src="/images/cala.png" alt='cala' width={50} height={50} />
        </div>
        <motion.p
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
          className="mt-4 text-lg font-medium leading-6 text-black">
          {feature.title}
        </motion.p>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          y: -10
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.5,
          delay: 0.3
        }}
        className="mt-4 text-base text-gray-500">
        {feature.description}
      </motion.div>
    </div>
  )
}
