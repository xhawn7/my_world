'use client'
import React from 'react'
import { ReactTerminal } from 'react-terminal'
import ComponentsWrapper from './ComponentsWrapper'

export default function About() {
  const commands = {
    xz: '8月份的前奏,我是♌',
    nn: '快32岁的宝宝 🫡',
    ah: '我爱好撸铁还有书影音, 有一个爱了18年的偶像🥰',
    xx: '是个gay🌈,并且为此感到骄傲',
    ox: '李宇春',
    tz: '我是体脂个位数的宝宝🐮',
    sw: '你还真问啊😅',
    lx: '我当下的理想是写出一款好玩的产品😎',
    xg: '我性格比较多元，不熟的人面前会比较社恐😶，熟了的话就比较人来疯了😁'
  }
  return (
    <section className="snap-center" id="about">
      <ComponentsWrapper title="关于我">
        <div className="h-[80%] md:h-full">
          <ReactTerminal
            commands={commands}
            themes={{
              'my-custom-theme': {
                themeBGColor: '#272B36',
                themeToolbarColor: '#DBDBDB',
                themeColor: '#FFFEFC',
                themePromptColor: '#a917a8'
              }
            }}
            theme="my-custom-theme"
            welcomeMessage={
              <div>
                <p>👋 宝宝好，欢迎来到我的小世界!</p>
                <p>
                  关于我你有什么想知道的呢?请用2个字母描述你的问题,比如星座请输入xz,年龄请输入nn,三围请输入sw😆
                </p>
              </div>
            }
            errorMessage="这个指令还没有录入, 欢迎直接拨打冷线电话139-2383-6438咨询。"
          />
        </div>
      </ComponentsWrapper>
    </section>
  )
}
