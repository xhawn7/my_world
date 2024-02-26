'use client'
import React from 'react'
import { Chrono } from 'react-chrono'
import ComponentsWrapper from './ComponentsWrapper'

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
      cardDetailedText:
        '高中以全校文科第三名数学第一名的成绩进的大学，稀里糊涂选了个装逼专业，莫名其妙把时间都献给了尼采和福柯。校艺术团核心⻣干，就这样被大学上了4年。',
      media: {
        name: 'Battle of britain',
        source: {
          url: 'https://inews.gtimg.com/om_bt/OUF7kNhZf9kCEzQDqwXOMdLYXUMKu2-8zvZexTCgLRc6AAA/641'
        },
        type: 'IMAGE'
      }
    },
    {
      title: <Content time="2014 - 2021" detail="凤凰网 | 优向 | 司羽" />,
      cardDetailedText: `这段时间是我的职业尝试期。我做了很多产品和新媒体方向的工作，但产品的工作和我的兴趣以及性格不是很匹配，所以在职期间虽然很努力去把它做好可最后也没有达到自己想达到的成绩。主要工作内容如下：

      - 负责凤凰网的客户上海移动和视频军事栏目相关产品工作。实时跟进铁血、米尔等军事类竞品功能迭代，提出差异化解决文案，开展了超过24场线上线下活动。在职期间通过借势、热点跟踪等运营方式让旗下公众号日活提升40%，微博单日转发最高超过2万条。
      - 负责优向科技 B 端用戶社群 U 点房相关产品工作。对目标用戶进行分级，针对不同用戶群设计公司数据仓库 U-DATA 。同时负责运营公司官方公众号。对u-data的数据进行可视化设计并产出相关数据模型。与客戶开展相关品牌合作运动，包括优向鎏金杯等。
      - 负责上海电信wap端相关产品工作，对转化率及跳出率负责。在职期间对wap端⻚面进行改版优化，简化下单流程，优化数据埋点，制定相关设计规范等。借势与其他品牌开展联合营销活动，提升了转化率。`,
      media: {
        name: 'Battle of britain',
        source: {
          url: 'https://p3-sdbk2-media.byteimg.com/tos-cn-i-xv4ileqgde/d1c10e334a2e57effd28d49bbdb11168~tplv-xv4ileqgde-resize-w:750.image'
        },
        type: 'IMAGE'
      }
    },
    {
      title: <Content time="2021 -2022" detail="上海明品医学 | 前端开发" />,
      cardDetailedText:
        '负责医护平台大专家.com医生端及后台ok系统(PC端)相关前端工作(React16+Antd3), 主要负责加班 🤷🏻‍♂️',
      media: {
        name: 'Battle of britain',
        source: {
          url: 'https://ss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/wisegame/wh=512,512/sign=9cb76ea530c79f3d8fb4ec358b93e124/00e93901213fb80e2e664a8d3dd12f2eb9389430.jpg'
        },
        type: 'IMAGE'
      }
    },
    {
      title: <Content time="2022 - 2023" detail="上海海钻网络 | 前端开发" />,
      cardDetailedText:
        '负责印度信用卡平台Karbon Card前后台3个项目相关前端工作，在职期间每周完成超过3个需求，独立负责后台echarts模块、UI及路由升级、组件库完善、代码重构等工作。良好的抗压能力及沟通能力，按时完成需求交付，与同事交流分享优秀代码，推动团队学习氛围。',
      media: {
        name: 'Battle of britain',
        source: {
          url: 'https://media.licdn.com/dms/image/C561BAQEQWVFcX9rsLQ/company-background_10000/0/1637746349616/karboncard_cover?e=2147483647&v=beta&t=II1XIJvn3sSGakDl8hAnMV5ixFl_3yQuL9W53N8RoEY'
        },
        type: 'IMAGE'
      }
    }
  ]

  return (
    <section className="snap-center" id="experience">
      <ComponentsWrapper title="小经历" cls="xl:pt-4 bg-red-200">
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
          <Chrono
            items={items}
            mode="HORIZONTAL"
            itemWidth={200}
            timelinePointShape="square"
            timelinePointDimension={30}
            theme={{
              primary: '#649A92',
              secondary: '#649A92',
              titleColorActive: '#F0F0F0',
              titleColor: '#6C6C6C',
              iconBackgroundColor: '#F0F0F0',
              cardTitleColor: '#6C6C6C'
            }}
          >
            <div className="chrono-icons">
              <div>👨‍🎓</div>
              <div>👨‍🎨</div>
              <div>👨‍💻</div>
              <div>👨‍💻</div>
            </div>
          </Chrono>
        </div>
      </ComponentsWrapper>
    </section>
  )
}
