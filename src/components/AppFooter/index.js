

import {Typography} from 'antd'
import React from 'react'

export default function AppFooter() {
  return (
    <div className='AppFooter'>
      <Typography.Link href='tel:+123456789'>+123456789</Typography.Link>
      <Typography.Link href='www.google.com' >Privacy Policy</Typography.Link>
      <Typography.Link href='www.google.com' >Terms of Use</Typography.Link>
    </div>
  )
}
 