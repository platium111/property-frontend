// Render Prop
import React from 'react'
import { Formik } from 'formik'
import { Form, Select, FormItem, SubmitButton } from 'formik-antd'
import { Typography } from 'antd'
import { DebugValues, GalleryView } from '../../../components/index'
import { create, update } from '../../../services/generic/index'
import { v4 as uuidv4 } from 'uuid'
import { buildGalleryPhotos } from '../../../_utils/index'
import FieldInput from '../../../components/Input'
import FieldSelect from '../../../components/Select'
import FieldArea from '../../../components/TextArea'
import validation from './validate'
import { header, layout, tailLayout } from '../../_style'

const { Title } = Typography

export const CUSTOMER_STATUS = {
  edit: 'edit',
  new: 'new',
}

export default (props) => {
  const {
    id,
    firstName,
    lastName,
    middleName,
    fatherName,
    motherName,
    phoneNumber,
    dateOfBirth,
    motherPhone,
    fatherPhone,
    address,
    loanType,
    propertyInfo,
    studentInfo,
    dateBorrow,
    borrowPurpose,
    datePay,
    identityCardNo,
    issueDate,
    status = CUSTOMER_STATUS.add,
    note,
    // customerImages,
    //onFileChange,
    //onFileUpload,
    // imageUrls,
    // imagesUrlProps,
  } = props

  async function handleSubmit(values, { setSubmitting, resetForm }) {
    console.log('--onSubmit-->', values)
    // ! funny thing is onFileUpload -> set changed in fileUploaded but cannot get immediately, it rerender after done
    // let filesUploaded = (await onFileUpload()) || imagesUrlProps
    // console.log('fileUploaded', filesUploaded)
    switch (status) {
      case CUSTOMER_STATUS.add:
        await create({
          ...values,
          id: uuidv4(),
          // imageUrls: filesUploaded || [],
        })
        resetForm({ values: {} })
        break
      case CUSTOMER_STATUS.edit:
        await update({
          ...values,
          id: id,
          // imageUrls: filesUploaded,
        })
        break
      default:
        break
    }

    setSubmitting(false)
  }

  return (
    <Formik
      initialValues={{
        firstName,
        lastName,
        middleName,
        fatherName,
        motherName,
        phoneNumber,
        dateOfBirth,
        motherPhone,
        fatherPhone,
        address,
        loanType,
        propertyInfo,
        studentInfo,
        dateBorrow,
        borrowPurpose,
        datePay,
        identityCardNo,
        issueDate,
        note,
      }}
      validationSchema={validation}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <>
          {/* // <Space direction="vertical" align="center" size="middle" style={{width: "100%"}}> */}
          <Title style={header}>{status === CUSTOMER_STATUS.add ? 'Thêm Khách Hàng Mới' : 'Sửa thông tin khách hàng'}</Title>
          <Form {...layout}>
            {/* EXP: should use FormItem from formik-antd with `name` otherwise errror children object {} */}

            <FieldInput label="Tên" name="firstName" />
            <FieldInput label="Họ" name="lastName" />
            <FieldInput label="Tên đệm" name="middleName" />
            <FieldInput name="phoneNumber" label="Số điện thoại" />
            <FieldInput label="Ngày sinh" name="dateOfBirth" />
            <FieldInput label="Số nhà" name="homeNumber" />
            <FieldInput label="Đường" name="street" />
            <FieldInput label="Thôn" name="hamlet" />
            <FieldInput label="Xã" name="village" />
            <FieldInput label="Huyện" name="district" />
            <FieldInput label="Tỉnh" name="province" />
            <FieldInput label="Ngõ" name="lane" />
            <FieldInput label="Ngách" name="alley" />
            <FieldInput label="Tên bố" name="fatherName" />
            <FieldInput label="SĐT bố" name="fatherPhone" />
            <FieldInput label="Tên mẹ" name="motherName" />
            <FieldInput label="SĐT mẹ" name="motherPhone" />
            <FieldSelect label="Loại vay" name="loanType">
              <Select.Option value="">--Lựa chọn--</Select.Option>
              <Select.Option value="xe">Xe</Select.Option>
              <Select.Option value="giayTo">Giấy tờ</Select.Option>
            </FieldSelect>
            <FieldInput label="Tên đồ" name="itemName" condition={{ x: '{{loanType}}', y: 'xe' }} compareType="string" />
            <FieldInput label="Màu sắc" name="color" condition={{ x: '{{loanType}}', y: 'xe' }} compareType="string" />
            <FieldInput label="Năm sản xuất" name="year" condition={{ x: '{{loanType}}', y: 'xe' }} compareType="string" />
            <FieldInput name="frameNumber" label="Số khung" condition={{ x: '{{loanType}}', y: 'xe' }} compareType="string" />
            <FieldInput label="Số máy" name="machineNumber" condition={{ x: '{{loanType}}', y: 'xe' }} compareType="string" />
            <FieldInput label="Biển kiểm soát" name="plateNumber" condition={{ x: '{{loanType}}', y: 'xe' }} compareType="string" />
            <FieldInput label="Ngày vay" name="dateBorrow" />
            <FieldInput label="Giá" name="price" />
            <FieldInput label="Tên khách hàng" name="customerName" condition={{ x: '{{loanType}}', y: 'xe' }} compareType="string" />
            <FieldArea label="Mô tả" name="description" condition={{ x: '{{loanType}}', y: 'xe' }} compareType="string" />

            <FieldInput label="Mã thẻ SV" name="cardNumber" condition={{ x: '{{loanType}}', y: 'giayTo' }} compareType="string" />
            <FieldInput label="Tên trường" name="universityName" condition={{ x: '{{loanType}}', y: 'giayTo' }} compareType="string" />
            <FieldInput label="Điểm trung bình" name="gpa" condition={{ x: '{{loanType}}', y: 'giayTo' }} compareType="string" />
            <FieldInput label="Năm tốt nghiệp" name="graduationYear" condition={{ x: '{{loanType}}', y: 'giayTo' }} compareType="string" />

            <FieldArea label="Mục đích vay" name="borrowPurpose" />
            <FieldInput label="Ngày trả" name="datePay" />
            <FieldInput label="Chứng minh thư" name="identityCardNo" />
            <FieldInput label="Ngày phát hành" name="issueDate" condition={{ x: '{{identityCardNo}}', y: '', isEqual: true }} compareType="string"/>
            <FieldInput label="Ghi chú" name="note" />

            {/* <FormItem label="Tải ảnh lên" name="itemImages">
              <input type="file" multiple onChange={(e) => onFileChange(e)} />
            </FormItem>
            {imageUrls && <GalleryView photos={buildGalleryPhotos(imageUrls)} />} */}

            <FormItem {...tailLayout} name="submitBtn">
              <SubmitButton type="primary" disabled={props.isSubmitting} htmlType="submit">
                {status === CUSTOMER_STATUS.add ? 'Tạo mới' : 'Cập nhập'}
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
