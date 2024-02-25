import React from 'react'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
const ComponentsWrapper = ({
  children,
  title,
  cls
}: {
  children: React.ReactNode
  title: string
  cls?: string
}) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className=" h-screen flex flex-col justify-evenly items-center"
      >
        <h3 className="mt-16 md:mt-24 text-xl md:text-2xl tracking-[20px]">
          {title}
        </h3>

        <motion.div
          initial={{
            x: -200,
            opacity: 0
          }}
          transition={{
            duration: 1.2
          }}
          whileInView={{
            x: 0,
            opacity: 1
          }}
          viewport={{ once: true }}
          // className="overflow-scroll flex-1 w-full px-8 py-6 md:px-60 md:pb-40 md:pt-14 "
          className={twMerge(
            'overflow-scroll flex-1 w-full px-8 py-6 xl:px-60 xl:pb-40 xl:pt-14',
            cls
          )}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ComponentsWrapper
