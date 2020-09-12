import React, {Children} from 'react'
import styled from 'styled-components'
import { Col, Row, Button, Divider, Form } from 'antd'
import { wrapperHalfLayout } from '../../forms/_style/index'
const StyleGroupContainer = styled.div`
  // border: 1px solid red;
  padding-left: 16px;
`
const StyleInsideContainer = styled.div`
  border: 1px solid #f0f0f0;
  background-color: #fafafa;
  border-radius: 8px;
`

const StyleGroupHeader = styled.div`
  // border: 1px solid green;
  border-bottom: 1px solid grey;
  padding: 8px;
`

const StyleGroupFooter = styled.div`
  // border: 1px solid purple;
`

const StyleGroupBody = styled.div`
  // border: 1px solid yellow;
  padding: 12px;
`

const StyleBodyFooter = styled.div`
  display: flex;
  // border: 1px solid purple;
  justify-content: flex-end;

  > button {
    margin-left: 10px;
  }
`

export const REPEATING_GROUP_CONSTANT = {
  cancel: 'Hủy bỏ',
  add: 'Thêm',
  confirm: 'Xác nhận',
  remove: 'Xóa',
}

export default function (props) {
  const { children, headingTitle = 'Thêm Đồ', arrayHelpers, items } = props

  return (
    <StyleGroupContainer>
      <StyleInsideContainer>
        <StyleGroupHeader>
          <Row style={{ alignItems: 'center', paddingLeft: '10px' }}>
            <Col span="12"> {headingTitle}</Col>
            <Col span="12" style={{ textAlign: 'right' }}>
              <Button danger>{REPEATING_GROUP_CONSTANT.cancel}</Button>
            </Col>
          </Row>
        </StyleGroupHeader>
        <StyleGroupBody>
          {items && items.map((item, index) => {
            return (
              <div key={index}>
                {index >= 1 ? <Divider /> : null}
                {children && children({item,index})}
                <StyleBodyFooter>
                    <Button type="primary" danger onClick={() => arrayHelpers.remove(index)}>
                      {REPEATING_GROUP_CONSTANT.remove}
                    </Button>
                    <Button type="primary">{REPEATING_GROUP_CONSTANT.confirm}</Button>
                </StyleBodyFooter>
              </div>
            )
          })}
        </StyleGroupBody>
        <StyleGroupFooter>
          <Button type="dashed" danger block onClick={() => arrayHelpers.push({})}>
            {REPEATING_GROUP_CONSTANT.add}
          </Button>
        </StyleGroupFooter>
      </StyleInsideContainer>
    </StyleGroupContainer>
  )
}
