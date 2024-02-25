'use client'
import { motion } from 'framer-motion'
// import dynamic from 'next/dynamic'
import Link from 'next/link'
import MailIcon from '@mui/icons-material/Mail'
import CallIcon from '@mui/icons-material/Call'
import GitHubIcon from '@mui/icons-material/GitHub'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import { Tooltip } from '@mui/material'
const socials = [
  {
    icon: <MailIcon />,
    url: 'mailto:swanlz1992@gmail.com?subject=面试邀请&body=你好:',
    tip: 'swanlz1992@gmail.com'
  },
  { icon: <CallIcon />, url: 'tel:13923836438', tip: '139 - 2383 - 6438' },
  {
    icon: <AutoStoriesIcon />,
    url: 'https://xhawn.notion.site/DEV-abd35ecdea4842819067e18e4e4af39b?pvs=74',
    tip: 'notion'
  },
  { icon: <GitHubIcon />, url: 'https://github.com/xhawn7', tip: 'github' }
]

// const ThemeChanger = dynamic(() => import('./ThemeChanger'), { ssr: false })

export default function Header() {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
        className=" flex flex-row items-center gap-5 "
      >
        {socials.map((social, index) => {
          return (
            <Link href={social.url} target="_blank" key={index}>
              <Tooltip title={social?.tip}>{social.icon}</Tooltip>
            </Link>
          )
        })}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
        className="flex flex-row items-center cursor-pointer"
      >
        {/* <ThemeChanger /> */}
        123
      </motion.div>
    </header>
  )
}
