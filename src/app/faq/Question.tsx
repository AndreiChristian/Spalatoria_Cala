"use client";

import { motion } from "framer-motion"

interface Props {
  faq: {
    question: string,
    answer: string
  }
}

export default function Question({ faq }: Props) {
  return (
    <motion.li
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
        <p className="mt-5 text-lg font-medium leading-6 text-black dark:text-white ">
          {faq.question}
        </p>
      </div>
      <div className="mt-2 text-base text-gray-500">
        {faq.answer}
      </div>
    </motion.li>
  )
}
