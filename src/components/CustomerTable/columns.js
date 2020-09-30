import React from 'react';
import { Form, Formik, useFormikContext } from 'formik';
import FieldButton from '../Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


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
  
];
