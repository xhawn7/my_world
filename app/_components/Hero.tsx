'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import profile from '../../public/profile2.jpg'

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      '你好，我叫肖亮正',
      '我喜欢 ᕦ(•oo•)ᕤ',
      '我_也喜欢_码代码.ts',
      '或许我们可以一起喝 ☕️'
    ],
    loop: true,
    delaySpeed: 1500
  })

  return (
    <section id="hero" className="snap-start">
      <div className=" h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ">
        <BackgroundCircles />
        <Image
          src={profile}
          alt="头像"
          className="relative rounded-full h-32 w-32 mx-auto object-cover "
        />

        <div className="z-20">
          <h2 className="text-sm uppercase  pb-5 tracking-[10px] md:tracking-[15px]">
            前端开发
          </h2>
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#649A92" />
          </h1>

          <div className="pt-5">
            <Link href="#about">
              <button className="heroButton">关于我</button>
            </Link>
            <Link href="#experience">
              <button className="heroButton">小经历</button>
            </Link>
            <Link href="#skills">
              <button className="heroButton">技能树</button>
            </Link>
            <Link href="#projects">
              <button className="heroButton">Demos</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
