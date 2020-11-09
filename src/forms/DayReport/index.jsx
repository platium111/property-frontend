import { Formik } from 'formik';
import React from 'react';
import { Form } from 'formik-antd';
import { Row, Col, Typography, Table } from 'antd';
import { header, layout } from '../_style';
import { FieldDatePicker, FieldButton } from '../../components';
import { DebugValues } from '../../components';
const { Title } = Typography;

const dataSource = [
  {
    key: '1',
    name: 'Đỗ Tiến Đạt',
    province: 'Hà Nội',
    price: 10000,
    interest: 4000,
    properties: ['Xe', 'Giấy tờ'],
    moneyInOrOutType: 'traGoc',
    totalIntrest: 200,
    bill: 300000,
    dateBorrow: '10/01/2020',
  },
  {
    key: '2',
    name: 'Tran Van Nhat',
    province: 'Lao Cai',
    price: 12000,
    interest: 3000,
    properties: ['Xe'],
    moneyInOrOutType: 'traLai',
    totalIntrest: 200,
    bill: 300000,
    dateBorrow: '10/01/2020',
  },
  {
    key: '3',
    name: 'Nguyen Van Anh',
    province: 'Bac Giang',
    price: 20000,
    interest: 4000,
    properties: ['Xe', 'Giấy tờ'],
    moneyInOrOutType: 'dongHopDong',
    totalIntrest: 200,
    bill: 300000,
    dateBorrow: '10/01/2020',
  },
];

const columns = [
  {
    title: 'Tên',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Tỉnh',
    dataIndex: 'province',
    key: 'province',
  },
  {
    title: 'Số tiền vay',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Lãi xuất',
    dataIndex: 'interest',
    key: 'interest',
  },
  {
    title: 'Đồ/giấy tờ vay',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'kiểu hợp đồng',
    dataIndex: 'moneyInOrOutType',
    key: 'moneyInOrOutType',
  },
  {
    title: 'Tiền lãi',
    dataIndex: 'totalIntrest',
    key: 'totalIntrest',
  },
  {
    title: 'Chi',
    dataIndex: 'bill',
    key: 'bill',
  },
  {
    title: 'kiểu hợp đồng',
    dataIndex: 'moneyInOrOutType',
    key: 'moneyInOrOutType',
  },
  {
    title: 'Ngày vay',
    dataIndex: 'dateBorrow',
    key: 'dateBorrow',
  },
];

export default function (props) {
  const { dayReport } = props;
  return (
    <div>
      <Formik initialValues={{ dayReport }}>
        {(formikProps) => {
          return (
            <>
              <Title style={header}>{'Kê khai ngày'}</Title>

              <Form {...layout}>
                <Row>
                  <Col sm={24} md={12}>
                    <FieldDatePicker label="Ngày kê khai" name="dayReport" />
                    <FieldButton type="primary" name="findBtn" value="Tìm kiếm"></FieldButton>
                  </Col>
                </Row>
                <Table dataSource={dataSource} columns={columns} />;
                <DebugValues {...props} />
              </Form>
            </>
          );
        }}
      </Formik>
    </div>
  );
}
