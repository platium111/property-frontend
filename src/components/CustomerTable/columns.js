import React from 'react';
import { Form, Formik } from 'formik';
import FieldButton from '../Button';
import styled from 'styled-components';

const StyledButtonGroup = styled.div`
  display: flex;
  align-items: center;
  button:last-of-type {
    margin-left: 8px;
  }
`;

export default [
  {
    Header: 'Tên',
    accessor: 'name', // accessor is the "key" in the data
  },
  {
    Header: 'Số điện thoại',
    accessor: 'phoneNumbers',
  },
  {
    Header: 'Ngày sinh',
    accessor: 'dateOfBirth',
  },
  {
    Header: 'Địa chỉ',
    accessor: 'address',
  },
  {
    Header: 'Kiểu vay',
    accessor: 'loanTypeSummary',
  },
  {
    Header: 'Ngày vay',
    accessor: 'dateBorrow',
  },
  {
    Header: 'Ngày trả',
    accessor: 'datePay',
  },
  {
    Header: 'CMT',
    accessor: 'identityCardNo',
  },
  {
    Header: 'Sửa/Xóa',
    id: 'actions',
    accessor: 'actions',
    Cell: ({ row }) => {
      return (
        <>
          <Formik>
            {(props) => (
              <Form>
                <StyledButtonGroup>
                  <FieldButton type="primary" name="edit" icon="EditOutlined" />
                  <FieldButton type="primary" danger name="delete" icon="ScissorOutlined" />
                </StyledButtonGroup>
              </Form>
            )}
          </Formik>
        </>
      );
    },
  },
];
