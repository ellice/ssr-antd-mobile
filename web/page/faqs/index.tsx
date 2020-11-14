import React from 'react'
import { NavBar,List,WhiteSpace } from 'antd-mobile'
import { Link } from 'react-router-dom'
// import 'antd-mobile/lib/date-picker/style/css'
import './index.less'
const Item = List.Item
interface Props {
  data:[]
}

const Faqs: SFC<Props> = (props: Props): JSX.Element => {
  return (
    <div className="flex-container">
      <NavBar
        mode="dark"
        leftContent={
          <img src="https://zos.alipayobjects.com/rmsportal/RfxDFanyfhEhOkynbPXizskAQqkPmPkR.png"/>
        }
      >帮助中心</NavBar>
      <WhiteSpace/>
      <List renderHeader={() => '帮助中心'} className="my-list">
        {props.data && props.data.map((item: []) => (
              <List.Item multipleLine="true" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" arrow="horizontal" key={item.id}>
                <div>{item.title}</div>
                <Link to={`/faqs/${item.id}`}>
                  <List.Item.Brief>Brief</List.Item.Brief>
                </Link>
              </List.Item>
            ))
          }
          </List>
    </div>
  )
}

Faqs.getInitialProps = async (ctx) => {
  // ssr渲染模式只在服务端通过Node获取数据，csr渲染模式只在客户端通过http请求获取数据，getInitialProps方法在整个页面生命周期只会执行一次
  console.log("xxxx",ctx.faqService)
  
  return __isBrowser__ ? (await window.fetch('/api/getfaqs')).json() : ctx.faqService
}
export default Faqs
