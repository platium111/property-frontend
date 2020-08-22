// Render Prop
import React, { useContext } from "react";
import DropZone from "../components/dropzone";
import { Formik, ErrorMessage } from "formik";
import { Form, Input, Select, FormItem, SubmitButton } from "formik-antd";
import { Typography, Space } from "antd";
import { API, Auth } from "aws-amplify";
import { getHeaders } from "../_utils/httpUtil";
import {store} from "../context/index"

const { Title } = Typography;

const layout = {
  labelCol: {
    span: 12,
  },
  wrapperCol: {
    span: 24,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 12,
    span: 24,
  },
};

export default () => {
  const globalState = useContext(store);
  console.log(globalState);
  
  return <Formik
    initialValues={{ email: "", password: "" }}
    /* validate={(values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      return errors;
    }} */
    onSubmit={async (values, { setSubmitting }) => {
      debugger;
      const metadata = {
        title: "my title",
        description: "my description",
        contentType: "image/png",
      };
      const API_NAME = "PhotosAPI";
      const eventId = "1234";
      const UPLOAD_URL = `${process.env.REACT_APP_PHOTOS_API_ENDPOINT_URL}/events/${eventId}/photos/initiate-upload`;

      const initiateResult = await API.post(API_NAME, UPLOAD_URL, {
        body: metadata,
        headers: await getHeaders(),
      });
      console.log("initialResult", initiateResult);
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({ isSubmitting }) => (
      <>
        {/* // <Space direction="vertical" align="center" size="middle" style={{width: "100%"}}> */}
        <Title
          style={{
            margin: "2px auto",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Thêm Đồ Mới
        </Title>
        <Form {...layout}>
          {/* EXP: should use FormItem from formik-antd with `name` otherwise errror children object {} */}
          <FormItem label="Loại vay" name="type">
            <Select name="type" placeholder="Loại vay">
              <Select.Option value="">--Lựa chọn--</Select.Option>
              <Select.Option value="red">Xe</Select.Option>
            </Select>
            <ErrorMessage name="type" component="div" />
          </FormItem>

          <FormItem label="Tên đồ" name="itemName">
            <Input type="textfield" name="itemName" placeholder="Tên đồ" />
            <ErrorMessage name="itemName" component="div" />
          </FormItem>

          <FormItem label="Model đồ" name="modal">
            <Input type="textfield" name="modal" placeholder="Model đồ" />
            <ErrorMessage name="modal" component="div" />
          </FormItem>

          <FormItem label="Năm sản xuất" name="year">
            <Input type="textfield" name="year" placeholder="Năm sản xuất" />
            <ErrorMessage name="year" component="div" />
          </FormItem>

          <FormItem label="Tên khách hàng" name="customerName">
            <Input
              type="textfield"
              name="customerName"
              placeholder="Tên khách hàng"
            />
            <ErrorMessage name="customerName" component="div" />
          </FormItem>

          <FormItem label="Mô tả" name="description">
            <Input.TextArea name="description" placeholder="Mô tả" />
            <ErrorMessage name="description" component="div" />
          </FormItem>

          <FormItem label="Giá" name="price">
            <Input type="textarea" name="price" placeholder="Giá" />
            <ErrorMessage name="price" component="div" />
          </FormItem>

          {/* UPLOAD ZONE */}
          <FormItem label="Tải ảnh lên" name="itemImages">
            <DropZone />
          </FormItem>

          <FormItem {...tailLayout} name="submitBtn">
            <SubmitButton
              type="primary"
              disabled={isSubmitting}
              htmlType="submit"
            >
              Tạo mới
            </SubmitButton>
          </FormItem>
        </Form>
        {/* // </Space> */}
      </>
    )}
  </Formik>
}
