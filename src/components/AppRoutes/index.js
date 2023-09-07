import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../../pages/Dashboard'
import Customers from '../../pages/Customers'
import Orders from '../../pages/Orders'
import Inventory from '../../pages/Inventory'
import AddProduct from '../../pages/AddProduct'

export default function AppRoutes() {
  return (
  <Routes>
    <Route path='/' element={<Dashboard />}/>
    <Route path='/inventory' element={<Inventory />}/>
    <Route path='/orders' element={<Orders/>}/>
    <Route path='/customers' element={<Customers/>}/>
    <Route path='/add-product' element={<AddProduct />} />
  </Routes>
  )
}
 