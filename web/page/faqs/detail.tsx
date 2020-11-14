import React from 'react'
import { RouteComponentProps } from 'react-router'
import { NavBar, WingBlank, WhiteSpace } from 'antd-mobile'
import './index.less'
import { Link } from 'react-router-dom'

interface Props {
  Detail: FaqsDetail
}

interface FaqsDetail {
  title: String,
  id: Number,
  content: String
}
const Faqs: SFC<Props> = (props: Props) => {
  return (
    <div className='flex-container' >
      <NavBar
        mode="dark"
        leftContent={
          <Link to={`/faqs?page=1`}>返回</Link>
        }
      >{props.Detail.title}</NavBar>
      <WhiteSpace></WhiteSpace>
      <WingBlank>
        <div>
          {props.Detail.content}
        </div>
      </WingBlank>
    </div>
  )
}

Faqs.getInitialProps = (ctx) => {
  const { data } = __isBrowser__ ? (ctx as RouteComponentProps<{ id: string }>).match.params.id : ctx.dataset

  console.log("faqId=============>", data)
  return Promise.resolve({
    Detail: data
  })
}

export default Faqs