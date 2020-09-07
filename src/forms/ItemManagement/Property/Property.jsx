// Render Prop
import React from 'react'
import { Formik, ErrorMessage, useField } from 'formik'
import { Form, Input, Select, FormItem, SubmitButton } from 'formik-antd'
import { Typography } from 'antd'
import { DebugValues, GalleryView } from '../../../components/index'
import { create, update } from '../../../services/generic/index'
import { v4 as uuidv4 } from 'uuid'
import { buildGalleryPhotos } from '../../../_utils/index'
import { layout, tailLayout } from './index.style'
import FieldInput from '../../../components/Input'
import FieldSelect from '../../../components/Select'
import FieldArea from "../../../components/TextArea"
import * as Yup from 'yup'

const { Title } = Typography

export const PROPERTY_STATUS = {
  edit: 'edit',
  new: 'new',
}

export default (props) => {
  const {
    id,
    type,
    itemName,
    year,
    customerName,
    description,
    price,
    status = "add",
    color,
    frameNumber,
    machineNumber,
    plateNumber,
    dateBorrow,
    onFileChange,
    onFileUpload,
    imageUrls,
    imagesUrlProps,
  } = props

  return (
    <Formik
      initialValues={{
        type,
        itemName,
        year,
        color,
        frameNumber,
        machineNumber,
        plateNumber,
        dateBorrow,
        customerName,
        description,
        price,
      }}
      validationSchema={Yup.object({
        itemName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
      })}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        console.log('--onSubmit-->', values)
        // ! funny thing is onFileUpload -> set changed in fileUploaded but cannot get immediately, it rerender after done
        let filesUploaded = (await onFileUpload()) || imagesUrlProps
        switch (status) {
          case PROPERTY_STATUS.add:
            await create({
              ...values,
              id: uuidv4(),
              imageUrls: filesUploaded || [],
            })
            resetForm({ values: {} })
            break
          case PROPERTY_STATUS.edit:
            // filesUploaded =
            await update({
              ...values,
              id: id,
              imageUrls: filesUploaded,
            })
            break
          default:
            await create({
              ...values,
              id: uuidv4(),
              imageUrls: filesUploaded || [],
            })
            resetForm({ values: {} })
            break;
        }

        setSubmitting(false)
      }}
    >
      {(props) => (
        <>
          {/* // <Space direction="vertical" align="center" size="middle" style={{width: "100%"}}> */}
          <Title
            style={{
              margin: '2px auto',
              textAlign: 'center',
              marginBottom: '20px',
            }}
          >
            {status === PROPERTY_STATUS.add ? 'Thêm Đồ Mới' : 'Sửa thông tin đồ'}
          </Title>
          <Form {...layout}>
            {/* EXP: should use FormItem from formik-antd with `name` otherwise errror children object {} */} 
            <FieldSelect label="Loại vay" name="type" placeholder="Loại vay">
              <Select.Option value="">--Lựa chọn--</Select.Option>
              <Select.Option value="xe">Xe</Select.Option>
            </FieldSelect>

            <FieldInput label="Tên đồ" name="itemName" placeholder="Tên đồ" />
            <FieldInput label="Màu sắc" name="color" type="textfield" placeholder="Màu sắc" />
            <FieldInput type="textfield" label="Năm sản xuất" name="year" placeholder="Năm sản xuất" />
            <FieldInput type="textfield" name="frameNumber" placeholder="Số khung" label="Số khung" />
            <FieldInput label="Số máy" type="textfield" name="machineNumber" placeholder="Số máy" />
            <FieldInput label="Biển kiểm soát" type="textfield" name="plateNumber" placeholder="Biển kiểm soát" />
            <FieldInput label="Ngày vay" type="textfield" name="dateBorrow" placeholder="Ngày vay" />
            <FieldInput label="Giá" type="textarea" name="price" placeholder="Giá" />
            <FieldInput label="Tên khách hàng" type="textfield" name="customerName" placeholder="Tên khách hàng" />
            {/* <FieldInput type="textfield" label="Mô tả" name="description" placeholder="Mô tả" /> */}
            <FieldArea type="textfield" label="Mô tả" name="description" placeholder="Mô tả"  />
            
            {/* UPLOAD ZONE */}
            <FormItem label="Tải ảnh lên" name="itemImages">
              <input type="file" multiple onChange={(e) => onFileChange(e)} />
            </FormItem>

            {imageUrls && <GalleryView photos={buildGalleryPhotos(imageUrls)} />}

            <FormItem {...tailLayout} name="submitBtn">
              <SubmitButton type="primary" disabled={props.isSubmitting} htmlType="submit">
                {status === PROPERTY_STATUS.add ? 'Tạo mới' : 'Cập nhập'}
              </SubmitButton>
            </FormItem>
            <DebugValues {...props} />
          </Form>

          {/* // </Space> */}
        </>
      )}
    </Formik>
  )
}
