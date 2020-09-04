// Render Prop
import React from "react";
import { Formik, ErrorMessage } from "formik";
import { Form, Input, Select, FormItem, SubmitButton } from "formik-antd";
import { Typography } from "antd";
import { DebugValues, GalleryView } from "../../../components/index";
import { create } from "../../../services/generic/index";
import { v4 as uuidv4 } from "uuid";
import { buildGalleryPhotos } from "../../../_utils/index";
import { layout, tailLayout } from "./index.style";

const { Title } = Typography;

export const PROPERTY_STATUS = {
  edit: 'edit',
  new: 'new'
}

export default (props) => {
  const {
    type,
    itemName,
    modal,
    year,
    customerName,
    description,
    price,
    status,
    onFileChange,
    onFileUpload,
    imageUrls,
  } = props;

  return (
    <Formik
      initialValues={{
        type,
        itemName,
        modal,
        year,
        customerName,
        description,
        price,
      }}
      /* validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Yêu cầu bạn phải nhập email";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Email không đúng định dạng. Gợi ý: tranquangkhai@gmail.com";
        }
        return errors;
      }} */
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        console.log("--onSubmit-->", values);
        // ! funny thing is onFileUpload -> set changed in fileUploaded but cannot get immediately, it rerender after done
        const filesUploaded = await onFileUpload();
        await create({
          ...values,
          id: uuidv4(),
          imageUrls: filesUploaded || [],
        });
        setSubmitting(false);
        resetForm({ values: "" });
      }}
    >
      {(props) => (
        <>
          {/* // <Space direction="vertical" align="center" size="middle" style={{width: "100%"}}> */}
          <Title
            style={{
              margin: "2px auto",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            {status === PROPERTY_STATUS.add ? 'Thêm Đồ Mới' : "Sửa thông tin đồ"}
          </Title>
          <Form {...layout}>
            {/* EXP: should use FormItem from formik-antd with `name` otherwise errror children object {} */}
            <FormItem label="Loại vay" name="type">
              <Select name="type" placeholder="Loại vay">
                <Select.Option value="">--Lựa chọn--</Select.Option>
                <Select.Option value="xe">Xe</Select.Option>
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

            {/* TODO can't fix because of not reset value for textarea */}
            <FormItem label="Mô tả" name="description">
              {/* <Input.TextArea name="description" placeholder="Mô tả" value={props.values.description} /> */}
              <Input name="description" placeholder="Mô tả" />
              <ErrorMessage name="description" component="div" />
            </FormItem>

            <FormItem label="Giá" name="price">
              <Input type="textarea" name="price" placeholder="Giá" />
              <ErrorMessage name="price" component="div" />
            </FormItem>

            {/* UPLOAD ZONE */}
            <FormItem label="Tải ảnh lên" name="itemImages">
              <input type="file" multiple onChange={(e) => onFileChange(e)} />
            </FormItem>

            {imageUrls && (
              <GalleryView photos={buildGalleryPhotos(imageUrls)} />
            )}

            <FormItem {...tailLayout} name="submitBtn">
              <SubmitButton
                type="primary"
                disabled={props.isSubmitting}
                htmlType="submit"
              >
                {status === PROPERTY_STATUS.add ? 'Tạo mới' : 'Cập nhập'}
              </SubmitButton>
            </FormItem>
            <DebugValues {...props} />
          </Form>

          {/* // </Space> */}
        </>
      )}
    </Formik>
  );
};
