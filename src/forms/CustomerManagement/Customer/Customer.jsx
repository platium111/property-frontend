// Render Prop
import React from 'react';
import { Formik, FieldArray } from 'formik';
import { Form, Select, FormItem, SubmitButton } from 'formik-antd';
import { Typography, Row, Col } from 'antd';
import { DebugValues, GalleryView } from '../../../components/index';
import { create, update, get } from '../../../services/generic/index';
import { buildGalleryPhotos } from '../../../_utils/index';
import FieldInput from '../../../components/Input';
import FieldSelect from '../../../components/Select';
import FieldArea from '../../../components/TextArea';
import FieldDatePicker from '../../../components/Datepicker';
import validation from './validate';
import { header, layout, tailLayout } from '../../_style';
import Panel from '../../../components/Wrapper';
import { createCustomer, updateCustomer, createAddress, createProperty } from '../../../graphql/mutations';
import { getCustomer } from '../../../graphql/queries';
import { RepeatingGroup } from '../../../components/RepeatingGroup';
import { provinceData, cityData, LOAN_TYPE } from '../../../_constants';

const { Title } = Typography;

export const CUSTOMER_STATUS = {
  edit: 'edit',
  new: 'new',
};

export default (props) => {
  const {
    id,
    firstName,
    lastName,
    middleName,
    fatherName,
    motherName,
    phoneNumbers,
    dateOfBirth,
    motherPhone,
    fatherPhone,
    address,
    loanType,
    dateBorrow,
    borrowPurpose,
    datePay,
    identityCardNo,
    issueDate,
    status = CUSTOMER_STATUS.add,
    note,
    properties: propertiesFromProps,
    // customerImages,
    //onFileChange,
    //onFileUpload,
    // imageUrls,
    // imagesUrlProps,
  } = props;

  async function handleSubmit(values, { setSubmitting, resetForm }) {
    const {
      otherPhoneNumber,
      phoneNumber,
      homeNumber,
      street,
      hamlet,
      village,
      district,
      province,
      lane,
      alley,
      city,
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
      datePay,
      cardNumber,
      properties,
      ...restValues
    } = values;
    const address = { homeNumber, street, hamlet, village, lane, alley, district, province, city };

    console.log('--onSubmit-->', values);
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
        } = await create(address, createAddress);

        // customer -> customerAddressId
        const customerRespond = await create(
          {
            ...restValues,
            phoneNumbers: [phoneNumber, otherPhoneNumber],
            dateBorrow,
            datePay,
            addressId: customerAddressId,
            // imageUrls: filesUploaded || [],
          },
          createCustomer
        );
        // student card & property -> propertyCustomerId
        await Promise.all(
          properties.map(async (item) => {
            const {
              cardNumber,
              universityName,
              gpa,
              graduationYear,
              loanType,
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
              interest,
            } = item;
            if (loanType === LOAN_TYPE.giayTo) {
              // get result | studentCardRespond?.data?.createProperty?.id
              await create(
                {
                  cardNumber,
                  universityName,
                  gpa,
                  graduationYear,
                  interest,
                  loanType,
                  customerId: customerRespond.data.createCustomer.id,
                },
                createProperty
              );
            } else if (loanType === LOAN_TYPE.xe) {
              await create(
                {
                  loanType,
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
                  interest,
                  customerId: customerRespond.data.createCustomer.id,
                },
                createProperty
              );
            }
          })
        );
        await get(customerRespond.data.createCustomer.id, getCustomer);
        resetForm({ values: {} });
        break;
      case CUSTOMER_STATUS.edit:
        await update(
          {
            ...values,
            id: id,
            // imageUrls: filesUploaded,
          },
          updateCustomer
        );
        break;
      default:
        break;
    }
    setSubmitting(false);
  }

  // transformation from prop values -> formik value
  const [phoneNumber, otherPhoneNumber] = phoneNumbers || [];
  return (
    <Formik
      enableReinitialize
      initialValues={{
        firstName,
        lastName,
        middleName,
        fatherName,
        motherName,
        phoneNumber,
        otherPhoneNumber,
        dateOfBirth,
        motherPhone,
        fatherPhone,
        ...address,
        properties: propertiesFromProps?.items || [{ loanType: '' }],
        loanType,
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
              <Col sm={24} md={12}>
                <FieldInput label="Tên" name="firstName" />
                <FieldInput label="Họ" name="lastName" />
                <FieldInput label="Tên đệm" name="middleName" />
                <FieldInput name="phoneNumber" label="Số điện thoại" />
                <FieldInput name="otherPhoneNumber" label="Số điện thoại khác" />
                <FieldDatePicker label="Ngày sinh" name="dateOfBirth" value={dateOfBirth} />
                <FieldInput label="Số nhà" name="homeNumber" />
                <FieldInput label="Đường" name="street" />
                <FieldInput label="Thôn" name="hamlet" />
                <FieldInput label="Xã" name="village" />
                <FieldInput label="Ngõ" name="lane" />
                <FieldInput label="Ngách" name="alley" />
                <FieldInput label="Huyện" name="district" />
                <FieldSelect label="Tỉnh" name="province" defaultValue="" showSearch>
                  <Select.Option value="">--Lựa chọn--</Select.Option>
                  {provinceData && provinceData.map((province) => <Select.Option value={province}>{province}</Select.Option>)}
                </FieldSelect>
                <FieldSelect label="Thành phố" name="city" defaultValue="" showSearch>
                  <Select.Option value="">--Lựa chọn--</Select.Option>
                  {cityData && cityData.map((city) => <Select.Option value={city}>{city}</Select.Option>)}
                </FieldSelect>
              </Col>
              <Col sm={24} md={12}>
                <FieldInput label="Chứng minh thư" name="identityCardNo" />
                <FieldInput
                  label="Ngày phát hành"
                  name="issueDate"
                  condition={{ x: '{{identityCardNo}}', y: '', notEqual: true }}
                  compareType="string"
                />
                <FieldInput label="Ghi chú" name="note" />
                <FieldArray
                  name="properties"
                  render={(arrayHelpers) => (
                    <RepeatingGroup arrayHelpers={arrayHelpers} items={props.values.properties}>
                      {({ item: customerItem, index }) => {
                        return (
                          <div>
                            <FieldSelect label="Loại vay" name={`properties[${index}].loanType`}>
                              <Select.Option value="">--Lựa chọn--</Select.Option>
                              <Select.Option value={LOAN_TYPE.xe}>Xe</Select.Option>
                              <Select.Option value={LOAN_TYPE.giayTo}>Giấy tờ</Select.Option>
                            </FieldSelect>
                            <Panel condition={{ x: `{{properties.[${index}].loanType}}`, y: LOAN_TYPE.xe }} compareType="string">
                              <FieldInput label="Tên đồ" name={`properties[${index}].itemName`} />
                              <FieldInput label="Màu sắc" name={`properties[${index}].color`} />
                              <FieldInput label="Năm sản xuất" name={`properties[${index}].year`} />
                              <FieldInput label="Số khung" name={`properties[${index}].frameNumber`} />
                              <FieldInput label="Số máy" name={`properties[${index}].machineNumber`} />
                              <FieldInput label="Biển kiểm soát" name={`properties[${index}].plateNumber`} />
                              {/* <FieldInput label="Tên khách hàng" name={`properties[${index}].customerName`} /> */}
                            </Panel>
                            <Panel condition={{ x: `{{properties.[${index}].loanType}}`, y: LOAN_TYPE.giayTo }} compareType="string">
                              <FieldInput label="Mã thẻ SV" name={`properties[${index}].cardNumber`} />
                              <FieldInput label="Tên trường" name={`properties[${index}].universityName`} />
                              <FieldInput label="Điểm trung bình" name={`properties[${index}].gpa`} />
                              <FieldInput label="Năm tốt nghiệp" name={`properties[${index}].graduationYear`} />
                              <FieldInput label="Tên bố" name={`properties[${index}].fatherName`} />
                              <FieldInput label="SĐT bố" name={`properties[${index}].fatherPhone`} />
                              <FieldInput label="Tên mẹ" name={`properties[${index}].motherName`} />
                              <FieldInput label="SĐT mẹ" name={`properties[${index}].motherPhone`} />
                            </Panel>
                            <FieldInput label="Giá" name={`properties[${index}].price`} isCurrency={true} />
                            <FieldInput label="Lãi" name={`properties[${index}].interest`} />
                            <FieldArea label="Mô tả" name={`properties[${index}].description`} />
                          </div>
                        );
                      }}
                    </RepeatingGroup>
                  )}
                />
                <FieldArea label="Mục đích vay" name="borrowPurpose" />
                <FieldDatePicker label="Ngày vay" name="dateBorrow" />
                <FieldDatePicker label="Ngày trả" name="datePay" />
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
  );
};
