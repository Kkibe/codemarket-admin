import { AppstoreAddOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function SideMenu() {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedKeys, setSelectedKeys] = useState('/');

  useEffect(() => {
    const  pathName = location.pathname
    setSelectedKeys(pathName)
  }, [location.pathname]);

  return (
    <div className='SideMenu'>
      <Menu 
      className='SideMenuVertical'
      mode='vertical'
      onClick={(item) => {
        navigate(item.key);
      }}
      selectedKeys={[selectedKeys]}
      items={[
        {
          label: 'Dashboard',
          icon: <AppstoreAddOutlined />,
          key: '/'
        },
        {
          label: 'Inventory',
          icon: <ShopOutlined />,
          key: '/inventory'
        },
        {
          label: 'Orders',
          icon: <ShoppingCartOutlined />,
          key: '/orders'
        },
        {
          label: 'Customers',
          icon: <UserOutlined />,
          key: '/customers'
        },
        {
          label: 'Add Product',
          icon: <AppstoreAddOutlined />,
          key: '/add-product'
        }
      ]}>
      
      </Menu>
    </div>
  )
}
