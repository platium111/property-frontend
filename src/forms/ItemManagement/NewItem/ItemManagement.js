// Render Prop
import React from "react";
import { Formik, ErrorMessage } from "formik";
import { Form, Input, Select, FormItem, SubmitButton } from "formik-antd";
import { Typography } from "antd";
import { DebugValues, GalleryView } from "../../../components/index";
import { create } from "../../../services/generic/index";
import { v4 as uuidv4 } from "uuid";
import { buildGalleryPhotos } from "../../../_utils/index";
import {layout, tailLayout} from "./index.style";

const { Title } = Typography;

export default (props) => {
  const { onFileChange, onFileUpload, imageUrls } = props;

  return (
    <Formik
      initialValues={{}}
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
      onSubmit={async (values, { setSubmitting }) => {
        console.log("--onSubmit-->", values);
        // ! funny thing is onFileUpload -> set changed in fileUploaded but cannot get immediately, it rerender after done
        const filesUploaded = await onFileUpload();
        await create({
          ...values,
          propertyId: uuidv4(),
          imageUrls: filesUploaded || [],
        });
        setSubmitting(false);
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
            Thêm Đồ Mới
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
                Tạo mới
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
