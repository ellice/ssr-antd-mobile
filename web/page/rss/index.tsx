import React from 'react'
import {Button,WingBlank} from 'antd-mobile'
import './index.less'

interface Props {
  data: Item[]
}
interface Item {
  id: string,
  content:string,
  title: string,
  thumbnail: String
}

const Page: SFC<Props> = (props: Props): JSX.Element => {
  return (
    <WingBlank>
      <div className="userinfo">
        <div className="avatar"><img src="https://cms.byterush.co/uploads/thumbnail_11_83465c6e38.jpg" alt=""/></div>
        <div className="info">
          <b>13808870227</b>
          <div>专属链接：</div>
        </div>
      </div>
      <ul className='rss'>
        {
          props.data && props.data.map((item: Item) => (
            <li key={item.id}>
              <div className="content">{item.content}</div>
              <div className="images"> <img src={item.thumbnail} alt=""/> </div>
             <div className='btn-group'>
              <Button type="primary" size="small" inline>复制文案</Button>
              <Button type="primary" size="small" inline>下载图片</Button>
              <Button type="primary" size="small" inline>转发朋友圈</Button>
             </div>
            </li>
          ))
        }
      </ul>
      </WingBlank>
  )
}

Page.getInitialProps = async (ctx) => {
  // ssr渲染模式只在服务端通过Node获取数据，csr渲染模式只在客户端通过http请求获取数据，getInitialProps方法在整个页面生命周期只会执行一次
  console.log("xxxxx",ctx.dataset);
  
  return __isBrowser__ ? (await window.fetch('/api/getIndexData')).json() : ctx.dataset
}
export default Page
