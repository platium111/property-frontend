import React from 'react'
import { Typography } from 'antd'
import { WrapperStyle } from './index.style'

const { Text } = Typography

export default function ({ children }) {
  return (
    <WrapperStyle>
      <Text strong>ffdfdf</Text>
      {children}
    </WrapperStyle>
  )
}
