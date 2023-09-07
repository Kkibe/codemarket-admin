import { Badge, Drawer, Image, List, Space, Typography } from 'antd'
import { BellFilled, MailOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import { getComments, getOrders } from '../../API'

export default function AppHeader() {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  useEffect(() => {
    getComments().then(res => {
      setComments(res.comments);
    })
    
    getOrders().then(res => {
      setOrders(res.products);
    })
  }, [])
  return (
    <div className='AppHeader'>
      <Image width={40} src='https://cdn-share-sprites.flaticon.com/pack/11/11267/11267781-raccoon-expression-stickers_3x2.jpg' />
      <Typography.Title>CodeMarket Admin</Typography.Title>
      <Space>
        <Badge count={comments.length} dot>
          <MailOutlined style={{fontSize: 24}} 
          onClick={() => {
            setCommentsOpen(true)
          }}/>
        </Badge>
        <Badge count={orders.length}>
          <BellFilled style={{fontSize: 24}} 
          onClick={() => {
            setNotificationsOpen(true)
          }}/>
        </Badge>
      </Space> 
      <Drawer title='Comments' open={commentsOpen} onClose={() => setCommentsOpen(false)}>
        <List dataSource={comments} renderItem={(item) => {
          return <List.Item><Typography.Paragraph>{item.body}</Typography.Paragraph></List.Item>
        }}/>
      </Drawer>
      <Drawer title='Notifications' open={notificationsOpen} onClose={() => setNotificationsOpen(false)}>
        <List dataSource={orders} renderItem={(item) => {
          return <List.Item><Typography.Paragraph strong>New order</Typography.Paragraph>{item.title}</List.Item>
        }}/>
      </Drawer>
    </div>
  )
}
