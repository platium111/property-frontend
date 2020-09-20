import React from 'react'
import styled from 'styled-components'
import { Col, Row, Button, Divider, Collapse } from 'antd'
import { useState } from 'react'
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
  const { children, headingTitle = 'Thêm Đồ', arrayHelpers, items = [] } = props
  const [activeRows, setActiveRows] = useState(['0'])

  function handleAdd() {
    arrayHelpers.push({})
    setActiveRows([...activeRows, items.length.toString()])
  }

  function handleCollapse(activeKey) {
    setActiveRows([...activeRows, activeKey])
  }
  return (
    <StyleGroupContainer>
      <StyleInsideContainer>
        <StyleGroupHeader>
          <Row style={{ alignItems: 'center', paddingLeft: '10px' }}>
            <Col span="12">{headingTitle}</Col>
          </Row>
        </StyleGroupHeader>
        <StyleGroupBody>
          {items &&
            items.map(
              
              (item, index) => {
              return (
                <Collapse defaultActiveKey={['0']} key={index} onChange={handleCollapse}>
                  <Collapse.Panel header={`${headingTitle} ${index + 1}`} key={index}>
                    <div>
                      {index >= 1 ? <Divider /> : null}
                      {children && children({ item, index })}
                      <StyleBodyFooter>
                        <Button type="primary" danger onClick={() => arrayHelpers.remove(index)}>
                          {REPEATING_GROUP_CONSTANT.remove}
                        </Button>
                        {/* <Button type="primary" onClick={() => setActiveRows(activeRows.filter((row) => row !== index.toString()))}>
                          {REPEATING_GROUP_CONSTANT.confirm}
                        </Button> */}
                      </StyleBodyFooter>
                    </div>
                  </Collapse.Panel>
                </Collapse>
              )
            })}
        </StyleGroupBody>
        <StyleGroupFooter>
          <Button type="dashed" danger block onClick={handleAdd}>
            {REPEATING_GROUP_CONSTANT.add}
          </Button>
        </StyleGroupFooter>
      </StyleInsideContainer>
    </StyleGroupContainer>
  )
}
