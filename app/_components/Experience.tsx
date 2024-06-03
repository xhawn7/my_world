'use client'
import React from 'react'
import { Chrono } from 'react-chrono'
import ComponentsWrapper from './ComponentsWrapper'
import ExperienceCard from './ExperienceCard'

const Content = ({ time, detail }: any) => (
  <div className="text-center">
    <h2>{time}</h2>
    <h3>{detail}</h3>
  </div>
)

export default function Experience() {
  const items = [
    {
      title: <Content time="2010 - 2014" detail="广东财经大学 | 广告学" />,
      time: '2010 - 2014',
      name: '广东财经大学 | 广告学',
      face: '👨‍🎓',
      cardDetailedText:
        '在校期间积极参与各种社团活动，校艺术团核心⻣干，读了很多尼采和福柯，喜欢思考，实习期间在喜马拉雅广告公司（国内4A）负责创维机顶盒相关文案工作。',
      media: {
        name: '广东财经',
        source: {
          url: 'https://www.gdufe.edu.cn/_upload/tpl/06/2b/1579/template1579/images/logo2.svg'
        },
        type: 'IMAGE'
      }
    },
    {
      title: <Content time="2014 - 2020" detail="上海司羽通信 | 产品经理" />,
      time: '2014 - 2021',
      name: '产品经理',
      face: '👨‍🎨',
      cardDetailedText: `凤凰网外派到移动和视频，负责军事栏目相关运营工作。开展了超过24场线上线下活动。在职期间通过借势、热点跟踪等运营方式让旗下公众号日活提升40%，微博单日转发最高超过2万条。
      司羽通信外派到上海电信，负责上海电信web端相关产品工作。对转化率及跳出率负责。在职期间对wap端⻚面进行改版优化，简化下单流程，优化数据埋点，制定相关设计规范等。`,
      media: {
        name: 'ifeng.com',
        source: {
          url: 'https://p3-sdbk2-media.byteimg.com/tos-cn-i-xv4ileqgde/d1c10e334a2e57effd28d49bbdb11168~tplv-xv4ileqgde-resize-w:750.image'
        },
        type: 'IMAGE'
      }
    },
    {
      title: <Content time="2021 -2023" detail="上海海钻网络 | 前端开发" />,
      time: '2021 -2023',
      name: '前端开发',
      face: '👨‍💻',
      cardDetailedText: `负责医护平台大专家.com医生端及后台ok系统(PC端)相关前端工作(React16+Antd3), 主要负责前台活动页面以及后台系统相关前端工作。
      负责印度信用卡平台Karbon Card前后台3个项目相关前端工作，在职期间每周完成超过3个需求，独立负责后台echarts模块、UI及路由升级、组件库完善、代码重构等工作。`,
      media: {
        name: 'Karbon Card',
        source: {
          url: 'https://inc42.com/wp-content/uploads/2022/06/Karbon-Card-Early-Stage-Startup.jpg'
        },
        type: 'IMAGE'
      }
    },
    {
      title: <Content time="2023 - 今" detail="自由职业者" />,
      time: '2023 - 今',
      name: '自由职业者',
      face: '👨‍💻',
      cardDetailedText: `系统学习了前后端及数据库，做了自己的个人网站及一些小项目；
      每天上油管并用AI进行英文交流，目前可以进行6、7成英文无障碍交流；
      开通了自己的小红书，经营3个月粉丝破2K。`,
      media: {
        name: 'karbon card',
        source: {
          url: 'https://media.licdn.com/dms/image/D5612AQGeJnhyVyXSQw/article-cover_image-shrink_720_1280/0/1679634477414?e=2147483647&v=beta&t=AKZ6CUXc8qK87i4SQJS0Z3692MR8W72VBgiCHLdxSKs'
        },
        type: 'IMAGE'
      }
    }
  ]

  return (
    <section className="snap-center" id="experience">
      <ComponentsWrapper title="小经历" cls="xl:pt-4">
        <div className="hidden md:block mt--20">
          <Chrono
            items={items}
            mode="VERTICAL_ALTERNATING"
            timelinePointShape="square"
            timelinePointDimension={30}
            // highlightCardsOnHover={true}
            // slideItemDuration={1000}
            hideControls={true}
            theme={{
              primary: '#649A92',
              secondary: '#649A92',
              titleColorActive: '#F0F0F0',
              titleColor: '#6C6C6C',
              iconBackgroundColor: '#F0F0F0',
              cardTitleColor: '#6C6C6C'
            }}
            cardWidth={600}
          >
            <div className="chrono-icons">
              <div>👨‍🎓</div>
              <div>👨‍🎨</div>
              <div>👨‍💻</div>
              <div>👨‍💻</div>
            </div>
          </Chrono>
        </div>
        <div className="md:hidden block">
          <ol className="relative border-s border-darkGreen dark:border-lightGreen">
            {items.map((item, index) => (
              <ExperienceCard item={item} key={index} />
            ))}
          </ol>
        </div>
      </ComponentsWrapper>
    </section>
  )
}
