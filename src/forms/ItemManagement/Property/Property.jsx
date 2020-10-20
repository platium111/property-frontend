// Render Prop
import React from 'react'
import { Formik } from 'formik'
import { Form, Select, FormItem, SubmitButton } from 'formik-antd'
import { Typography } from 'antd'
import { DebugValues, GalleryView } from '../../../components/index'
import { create, update } from '../../../services/generic/index'
import { buildGalleryPhotos } from '../../../_utils/index'
import FieldInput from '../../../components/Input'
import FieldSelect from '../../../components/Select'
import FieldArea from '../../../components/TextArea'
import FieldDatePicker from '../../../components/Datepicker'
import validation from './validate'
import { header, layout, tailLayout } from '../../_style'
import { createProperty, updateProperty } from '../../../graphql/mutations'

const { Title } = Typography
export const PROPERTY_STATUS = {
  edit: 'edit',
  new: 'new',
}

export default (props) => {
  const {
    id,
    loanType,
    itemName,
    year,
    customerName,
    description,
    price,
    status = PROPERTY_STATUS.add,
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

  async function handleSubmit(values, { setSubmitting, resetForm }) {
    console.log('--onSubmit-->', values)
    // ! funny thing is onFileUpload -> set changed in fileUploaded but cannot get immediately, it rerender after done
    let filesUploaded = (await onFileUpload()) || imagesUrlProps
    console.log('fileUploaded', filesUploaded)
    switch (status) {
      case PROPERTY_STATUS.add:
        await create(
          {
            ...values,
            imageUrls: filesUploaded || [],
          },
          createProperty
        )
        resetForm({ values: {} })
        break
      case PROPERTY_STATUS.edit:
        await update(
          {
            ...values,
            id: id,
            imageUrls: filesUploaded,
          },
          updateProperty
        )
        break
      default:
        break
    }

    setSubmitting(false)
  }

  return (
    <Formik
      initialValues={{
        loanType,
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
      validationSchema={validation}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <>
          {/* // <Space direction="vertical" align="center" size="middle" style={{width: "100%"}}> */}
          <Title style={header}>{status === PROPERTY_STATUS.add ? 'Thêm Đồ Mới' : 'Sửa thông tin đồ'}</Title>
          <Form {...layout}>
            {/* EXP: should use FormItem from formik-antd with `name` otherwise errror children object {} */}
            <FieldSelect label="Loại vay" name="loanType" placeholder="Loại vay">
              <Select.Option value="">--Lựa chọn--</Select.Option>
              <Select.Option value="xe">Xe</Select.Option>
            </FieldSelect>

            <FieldInput label="Tên đồ" name="itemName" placeholder="Tên đồ" />
            <FieldInput label="Màu sắc" name="color" type="textfield" placeholder="Màu sắc" />
            <FieldInput type="textfield" label="Năm sản xuất" name="year" placeholder="Năm sản xuất" />
            <FieldInput type="textfield" name="frameNumber" placeholder="Số khung" label="Số khung" />
            <FieldInput label="Số máy" type="textfield" name="machineNumber" placeholder="Số máy" />
            <FieldInput label="Biển kiểm soát" type="textfield" name="plateNumber" placeholder="Biển kiểm soát" />
            <FieldDatePicker label="Ngày vay" name="dateBorrow" placeholder="Ngày vay" />
            <FieldInput label="Giá" type="textarea" name="price" placeholder="Giá" isCurrency={true} />
            {/* <FieldInput label="Tên khách hàng" type="textfield" name="customerName" placeholder="Tên khách hàng" /> */}
            <FieldArea type="textfield" label="Mô tả" name="description" placeholder="Mô tả" />

            {/* UPLOAD ZONE */}
            <FormItem label="Tải ảnh lên" name="itemImages">
              <input type="file" multiple onChange={(e) => onFileChange(e)} />
            </FormItem>
            {/* Gallery images */}
            {imageUrls && <GalleryView photos={buildGalleryPhotos(imageUrls)} />}

            <FormItem {...tailLayout} name="submitBtn">
              <SubmitButton type="primary" disabled={props.isSubmitting} htmlType="submit">
                {status === PROPERTY_STATUS.add ? 'Tạo mới' : 'Cập nhập'}
              </SubmitButton>
            </FormItem>
            {/* <DebugValues {...props} /> */}
          </Form>
          {/* // </Space> */}
        </>
      )}
    </Formik>
  )
}
