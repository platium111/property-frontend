// Render Prop
import React from 'react'
import { Formik, FieldArray, Field } from 'formik'
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
import { RepeatingGroup } from '../../../components/RepeatingGroup'

const { Title } = Typography

export const CUSTOMER_STATUS = {
  edit: 'edit',
  new: 'new',
}

export const LOAN_TYPE = {
  xe: 'xe',
  giayTo: 'giayTo',
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

        // student card
        let customerPropertyId
        let customerStudentInfoId
        if (values.loanType === LOAN_TYPE.giayTo) {
          const studentCardRespond = await create(studentInfo, createStudentCard)
          customerStudentInfoId = studentCardRespond?.data?.createStudentCard?.id
        }
        // customer
        const customerRespond = await create(
          {
            ...restValues,
            dateBorrow,
            customerStudentInfoId,
            customerAddressId,
            // imageUrls: filesUploaded || [],
          },
          createCustomer
        )

        // property
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
          propertyCustomerId: customerRespond?.data?.createCustomer.id,
        }
        if (values.loanType === LOAN_TYPE.xe) {
          const propertyRespond = await create(propertyInfo, createProperty)
          customerPropertyId = propertyRespond?.data?.createProperty?.id
        }

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
        customerItems: [{ loanType: '' }],
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
                <FieldArray
                  name="customerItems"
                  render={(arrayHelpers) => (
                    <RepeatingGroup arrayHelpers={arrayHelpers} items={props.values.customerItems}>
                      {({ item: customerItem, index }) => {return (
                        <div>
                          <FieldSelect label="Loại vay" name={`customerItems[${index}].loanType`}>
                            <Select.Option value="">--Lựa chọn--</Select.Option>
                            <Select.Option value={LOAN_TYPE.xe}>Xe</Select.Option>
                            <Select.Option value={LOAN_TYPE.giayTo}>Giấy tờ</Select.Option>
                          </FieldSelect>
                          <Panel condition={{ x: `{{customerItems.[${index}].loanType}}`, y: LOAN_TYPE.xe }} compareType="string">
                            {/* <Description> */}
                            <FieldInput label="Tên đồ" name={`customerItems[${index}].itemName`} />
                            <FieldInput label="Màu sắc" name={`customerItems[${index}].color`} />
                            <FieldInput label="Năm sản xuất" name={`customerItems[${index}].year`} />
                            <FieldInput label="Số khung" name={`customerItems[${index}].frameNumber`} />
                            <FieldInput label="Số máy" name={`customerItems[${index}].machineNumber`} />
                            <FieldInput label="Biển kiểm soát" name={`customerItems[${index}].plateNumber`} />
                            <FieldInput label="Ngày vay" name={`customerItems[${index}].dateBorrow`} />
                            <FieldInput label="Giá" name={`customerItems[${index}].price`} />
                            <FieldInput label="Tên khách hàng" name={`customerItems[${index}].customerName`} />
                            <FieldArea label="Mô tả" name={`customerItems[${index}].description`} />
                            {/* </Description> */}
                          </Panel>

                          <Panel condition={{ x: `{{customerItems.[${index}].loanType}}`, y: LOAN_TYPE.giayTo }} compareType="string">
                            <FieldInput label="Mã thẻ SV" name={`customerItems[${index}].cardNumber`} />
                            <FieldInput label="Tên trường" name={`customerItems[${index}].universityName`} />
                            <FieldInput label="Điểm trung bình" name={`customerItems[${index}].gpa`} />
                            <FieldInput label="Năm tốt nghiệp" name={`customerItems[${index}].graduationYear`} />
                            <FieldInput label="Tên bố" name={`customerItems[${index}].fatherName`} />
                            <FieldInput label="SĐT bố" name={`customerItems[${index}].fatherPhone`} />
                            <FieldInput label="Tên mẹ" name={`customerItems[${index}].motherName`} />
                            <FieldInput label="SĐT mẹ" name={`customerItems[${index}].motherPhone`} />
                          </Panel>
                        </div>
                      )}}
                    </RepeatingGroup>
                  )}
                />
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
