import React from 'react';
import { useFormik } from 'formik';
import { Typography } from 'antd';
import { Form } from 'formik-antd';
import { FieldInput } from '../../../components';

const { Title } = Typography;
export default function (props) {
  /* return (
    <div>
      <Formik initialValues={{}}>
        {() => {
          return (
            <>
              <Form></Form>{' '}
            </>
          );
        }}
      </Formik>
    </div>
  ); */

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Title>Trả lãi</Title>
      <Form onSubmit={formik.handleSubmit}>
          <FieldInput label="Từ ngày" name="fromDate" />
          <FieldInput label="Đến ngày" name="toDate" />
          <FieldInput name="fromDate" />
          <FieldInput name="fromDate" />
          <FieldInput name="fromDate" />
          <FieldInput name="fromDate" />
          <FieldInput name="fromDate" />
          <FieldInput name="fromDate" />
          <FieldInput name="fromDate" />
      </Form>
    </>
  );
}
