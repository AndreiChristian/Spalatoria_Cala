"use client";

import { motion } from "framer-motion"

interface Props {
  feature: {
    title: string,
    description: string,
  }
}

export default function HeroFeatures({ feature }: Props) {
  return <motion.div
    initial={{
      opacity: 0,
    }}
    whileInView={{
      opacity: 1,
    }}
    transition={{
      duration: 0.5,
      delay: 0.2
    }}
  >
    <div>
      <p className="mt-5 text-lg font-medium leading-6 text-black">
        {feature.title}
      </p>
    </div>
    <div className="mt-2 text-base text-gray-500">
      {feature.description}
    </div>
  </motion.div>
}
