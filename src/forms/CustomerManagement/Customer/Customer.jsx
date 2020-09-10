// Render Prop
import React from 'react'
import { Formik } from 'formik'
import { Form, Select, FormItem, SubmitButton } from 'formik-antd'
import { Typography, Row, Col } from 'antd'
import { DebugValues, GalleryView } from '../../../components/index'
import { create, update } from '../../../services/generic/index'
import { buildGalleryPhotos } from '../../../_utils/index'
import FieldInput from '../../../components/Input'
import FieldSelect from '../../../components/Select'
import FieldArea from '../../../components/TextArea'
import validation from './validate'
import { header, layout, tailLayout } from '../../_style'
import Panel from '../../../components/Wrapper'
import Description from '../../../components/Description'
import { createCustomer, updateCustomer, createAddress, createProperty, createStudentCard } from '../../../graphql/mutations'

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
    const {
      homeNumber,
      street,
      hamlet,
      village,
      district,
      province,
      lane,
      alley,
      description,
      imageUrls,
      type,
      userId,
      year,
      customerName,
      itemName,
      price,
      color,
      frameNumber,
      machineNumber,
      plateNumber,
      dateBorrow,
      cardNumber,
      universityName,
      gpa,
      graduationYear,
      ...restValues
    } = values
    const address = { homeNumber, street, hamlet, village, district, province, lane, alley }
    const propertyInfo = {
      imageUrls,
      type,
      userId,
      year,
      customerName,
      itemName,
      price,
      color,
      frameNumber,
      machineNumber,
      plateNumber,
      dateBorrow,
    }
    const studentInfo = { cardNumber, universityName, gpa, graduationYear }
    console.log('--onSubmit-->', values)
    // ! funny thing is onFileUpload -> set changed in fileUploaded but cannot get immediately, it rerender after done
    // let filesUploaded = (await onFileUpload()) || imagesUrlProps
    // console.log('fileUploaded', filesUploaded)
    switch (status) {
      case CUSTOMER_STATUS.add:
        // address 
        const {
          data: {
            createAddress: { id: customerAddressId },
          },
        } = await create(address, createAddress)

        // property and student card
        let customerPropertyId;
        let customerStudentInfoId;
        switch (values.loanType) {
          case 'xe':
            const propertyRespond = await create(propertyInfo, createProperty);
            customerPropertyId = propertyRespond?.data?.createProperty?.id
            break
          case 'giayTo':
            const studentCardRespond = await create(studentInfo, createStudentCard);
            customerStudentInfoId = studentCardRespond?.data?.createStudentCard?.id
            break;
          default:
            break
        }
        // customer
        await create(
          {
            ...restValues,
            customerStudentInfoId,
            customerPropertyId,
            customerAddressId,
            // imageUrls: filesUploaded || [],
          },
          createCustomer
        )

        resetForm({ values: {} })
        break
      case CUSTOMER_STATUS.edit:
        await update(
          {
            ...values,
            id: id,
            // imageUrls: filesUploaded,
          },
          updateCustomer
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
            <Row>
              <Col span="12">
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
              </Col>
              <Col span="12">
                <FieldInput label="Chứng minh thư" name="identityCardNo" />
                <FieldInput
                  label="Ngày phát hành"
                  name="issueDate"
                  condition={{ x: '{{identityCardNo}}', y: '', notEqual: true }}
                  compareType="string"
                />
                <FieldInput label="Ghi chú" name="note" />
                <FieldSelect label="Loại vay" name="loanType">
                  <Select.Option value="">--Lựa chọn--</Select.Option>
                  <Select.Option value="xe">Xe</Select.Option>
                  <Select.Option value="giayTo">Giấy tờ</Select.Option>
                </FieldSelect>
                <Panel condition={{ x: '{{loanType}}', y: 'xe' }} compareType="string">
                  {/* <Description> */}
                  <FieldInput label="Tên đồ" name="itemName" />
                  <FieldInput label="Màu sắc" name="color" />
                  <FieldInput label="Năm sản xuất" name="year" />
                  <FieldInput name="frameNumber" label="Số khung" />
                  <FieldInput label="Số máy" name="machineNumber" />
                  <FieldInput label="Biển kiểm soát" name="plateNumber" />
                  <FieldInput label="Ngày vay" name="dateBorrow" />
                  <FieldInput label="Giá" name="price" />
                  <FieldInput label="Tên khách hàng" name="customerName" />
                  <FieldArea label="Mô tả" name="description" />
                  {/* </Description> */}
                </Panel>

                <Panel condition={{ x: '{{loanType}}', y: 'giayTo' }} compareType="string">
                  <FieldInput label="Mã thẻ SV" name="cardNumber" />
                  <FieldInput label="Tên trường" name="universityName" />
                  <FieldInput label="Điểm trung bình" name="gpa" />
                  <FieldInput label="Năm tốt nghiệp" name="graduationYear" />
                  <FieldInput label="Tên bố" name="fatherName" />
                  <FieldInput label="SĐT bố" name="fatherPhone" />
                  <FieldInput label="Tên mẹ" name="motherName" />
                  <FieldInput label="SĐT mẹ" name="motherPhone" />
                </Panel>
                <FieldArea label="Mục đích vay" name="borrowPurpose" />
                <FieldInput label="Ngày trả" name="datePay" />
              </Col>
            </Row>

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
