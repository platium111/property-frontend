// Render Prop
import React, { useContext, useState } from "react";
import { Formik, ErrorMessage } from "formik";
import { Form, Input, Select, FormItem, SubmitButton } from "formik-antd";
import { Typography, Space, Image } from "antd";
import { API, graphqlOperation } from "aws-amplify";
import { store } from "../context/index";
import { createProperty } from "../graphql/mutations";
import useUpload from "../_hooks/useUpload/index";

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

export const DisplayFormikState = props =>
  <div style={{ margin: '1rem 0' }}>
    <h3 style={{ fontFamily: 'monospace' }} />
    <pre
      style={{
        background: '#f6f8fa',
        fontSize: '.65rem',
        padding: '.5rem',
      }}
    >
      <strong>props</strong> ={' '}
      {JSON.stringify(props, null, 2)}
    </pre>
  </div>;

export default () => {
  const globalState = useContext(store);
  const { onFileChange, onFileUpload, fetchImages, filesUploaded } = useUpload();

  const [imageUrls, setImageUrls] = useState();
  React.useEffect(() => {
    // createNewProperty();
    // fetch images based on urls
    async function getImageFn(){
      const urls = await fetchImages(filesUploaded);
      setImageUrls(urls);
    }
    getImageFn();
  }, [filesUploaded]);

  

  async function createNewProperty() {
    const todo = {
      describe: "hey hey 1",
      propertyId: "3412312",
      type: "xe may",
      imageUrl: "hhe.jpg",
      userId: "43274747237842378fgsdfsf",
      year: "2020",
    };
    await API.graphql(graphqlOperation(createProperty, { input: todo }));
  }

  /* const todo = {describe: "hey hey 1", propertyId: "\"23ggd\"", type: "xe may", imageUrl: "hhe.jpg", userId: "43274747237842378fgsdfsf", year: "2020"};
  await API.graphql(graphqlOperation(createProperty, {input: todo}));
 */
  return (
    <Formik
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
        await onFileUpload();
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
              <input type="file" multiple  onChange={(e) => onFileChange(e)} />
            </FormItem>

            {
              imageUrls && imageUrls.map(url => {
                return (
                  <Image width={200} height={200} key={url} src={url} />
                )
              })
            }
            <FormItem {...tailLayout} name="submitBtn">
              <SubmitButton
                type="primary"
                disabled={props.isSubmitting}
                htmlType="submit"
              >
                Tạo mới
              </SubmitButton>
            </FormItem>
            <DisplayFormikState {...props} />
          </Form>
          
          {/* // </Space> */}
        </>
      )}
    </Formik>
  );
};
