import React from 'react';
import { Table, Tag, Space, Typography } from 'antd';
import { FieldButton } from '../../../components';
import { FieldCheckbox } from '../../../components';
import { withFormik } from 'formik';
import Repayment from '../Repayment'
const { Title } = Typography;
const { Column, ColumnGroup } = Table;

const data = [
  {
    key: '1',
    fromDate: '10/10/2020',
    toDate: '20/10/2020',
    daysNumber: 10,
    interestAmount: 360000,
    otherMoney: 10000,
    totalInterestAmount: 370000,
    customerPaidAmount: 370000,
    paidStatus: false,
    note: 'khong co gi',
  },
];

const RepaymentTable = (props) => {
  const { values } = props;
  console.log('RepaymentTable Component', values);
  return (
    <div>
      <Title>Trả lãi</Title>
      <FieldButton value="Thêm" type='primary'/>
      <Repayment />
      <Table dataSource={data}>
        <ColumnGroup title="Ngày">
          <Column title="Từ ngày" dataIndex="fromDate" key="fromDate" />
          <Column title="Đến ngày" dataIndex="toDate" key="toDate" />
        </ColumnGroup>
        <Column title="Số ngày" dataIndex="daysNumber" key="daysNumber" />
        <Column title="Tiền lãi" dataIndex="interestAmount" key="interestAmount" />
        <Column title="Tiền khác" dataIndex="otherMoney" key="otherMoney" />
        <Column title="Tổng lãi" dataIndex="totalInterestAmount" key="totalInterestAmount" />
        <Column title="Tiền khách trả" dataIndex="customerPaidAmount" key="customerPaidAmount" />
        <Column
          title="Tình trạng"
          dataIndex="paidStatus"
          key="paidStatus"
          render={(text, record) => {
            return (
              <Space size="middle">
                <FieldCheckbox name={`paidStatus-${record.key}`} />
              </Space>
            );
          }}
        />
        <Column title="Ghi chú" dataIndex="note" key="note" />
      </Table>
    </div>
  );
};

export const EnhancedRepaymentTable = withFormik({ mapPropsToValues: (props) => ({ name: props?.name, customerId: props?.customerId }) })(
  RepaymentTable
);
