// Render Prop
import React, { useState } from 'react';
import { Formik, FieldArray } from 'formik';
import { Form, Select, FormItem, SubmitButton } from 'formik-antd';
import { Typography, Row, Col, Result } from 'antd';
import { DebugValues } from '../../../components/index';
import FieldInput from '../../../components/Input';
import FieldSelect from '../../../components/Select';
import FieldArea from '../../../components/TextArea';
import FieldDatePicker from '../../../components/Datepicker';
import validation from './validate';
import { header, layout, tailLayout } from '../../_style';
import Panel from '../../../components/Wrapper';
import { RepeatingGroup } from '../../../components/RepeatingGroup';
import { provinceData, cityData, LOAN_TYPE, CUSTOMER_STATUS } from '../../../_constants';
import { submitAction } from '../../../actions';
import moment from 'moment';
import { cloneDeep } from 'lodash';
const { Title } = Typography;

export default (props) => {
  const {
    id,
    firstName,
    lastName,
    middleName,
    phoneNumbers,
    dateOfBirth,
    address,
    dateBorrow,
    borrowPurpose,
    datePay,
    identityCardNo,
    issueDate,
    status = CUSTOMER_STATUS.new,
    note,
    properties: propertiesFromProps,
  } = props;

  console.log('customerProps', props);

  const [customerSubmited, setCustomerSubmited] = useState();
  const isSubmissionSuccess = !!customerSubmited;

  async function handleSubmit(values, { setSubmitting }) {
    // ! don't understand why id is set to addressID -> explicit pass id in
    console.log('handleSubmit', values);
    await submitAction({ values: { ...values, id, addressId: address.id }, setSubmitting, status, setCustomerSubmited });
  }
  // transformation from prop values -> formik value
  const [phoneNumber, otherPhoneNumber] = phoneNumbers || [];
  const sortedProperties =
    propertiesFromProps && cloneDeep(propertiesFromProps.items).sort((a, b) => moment(a.createdAt).isAfter(moment(b.createdAt)));
  console.log('sortedProperties', sortedProperties);
  return (
    <Formik
      enableReinitialize
      initialValues={{
        id,
        firstName,
        lastName,
        middleName,
        phoneNumber,
        otherPhoneNumber,
        dateOfBirth,
        ...address,
        properties: sortedProperties || [{ loanType: '' }],
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
      {(props) => {
        const { values: formValues } = props;

        const totalProperties = formValues?.properties?.reduce(
          (total, { price = 0, interest = 0 }) => {
            const calculateInterest = (price * interest) / 1000000;
            const priceItem = total.price + price;
            const interestItem = total.interest + calculateInterest;
            return { ...total, price: priceItem, interest: interestItem };
          },
          { price: 0, interest: 0 }
        );

        return (
          <>
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
                      <RepeatingGroup arrayHelpers={arrayHelpers} items={sortedProperties}>
                        {({ item: customerItem = {}, index }) => {
                          return (
                            <div>
                              <div>
                                <FieldSelect label="Loại vay" name={`properties[${index}].loanType`}>
                                  <Select.Option value="">--Lựa chọn--</Select.Option>
                                  <Select.Option value={LOAN_TYPE.xe}>Xe</Select.Option>
                                  <Select.Option value={LOAN_TYPE.giayTo}>Giấy tờ</Select.Option>
                                </FieldSelect>
                                <Panel condition={{ x: `{{properties.[${index}].loanType}}`, y: LOAN_TYPE.xe }} compareType="string">
                                  <FieldInput label="Màu sắc" value={customerItem.color} name={`properties[${index}].color`} />
                                  <FieldInput label="Năm sản xuất" value={customerItem.year} name={`properties[${index}].year`} />
                                  <FieldInput label="Số khung" value={customerItem.frameNumber} name={`properties[${index}].frameNumber`} />
                                  <FieldInput
                                    label="Số máy"
                                    value={customerItem.machineNumber}
                                    name={`properties[${index}].machineNumber`}
                                  />
                                  <FieldInput
                                    label="Biển kiểm soát"
                                    value={customerItem.plateNumber}
                                    name={`properties[${index}].plateNumber`}
                                  />
                                  {/* <FieldInput label="Tên khách hàng" name={`properties[${index}].customerName`} /> */}
                                </Panel>
                                <Panel condition={{ x: `{{properties.[${index}].loanType}}`, y: LOAN_TYPE.giayTo }} compareType="string">
                                  <FieldInput label="Mã thẻ SV" value={customerItem.cardNumber} name={`properties[${index}].cardNumber`} />
                                  <FieldInput
                                    label="Tên trường"
                                    value={customerItem.universityName}
                                    name={`properties[${index}].universityName`}
                                  />
                                  <FieldInput label="Điểm trung bình" value={customerItem.gpa} name={`properties[${index}].gpa`} />
                                  <FieldInput
                                    label="Năm tốt nghiệp"
                                    value={customerItem.graduationYear}
                                    name={`properties[${index}].graduationYear`}
                                  />
                                  <FieldInput label="Tên bố" value={customerItem.fatherNumber} name={`properties[${index}].fatherName`} />
                                  <FieldInput label="SĐT bố" value={customerItem.fatherPhone} name={`properties[${index}].fatherPhone`} />
                                  <FieldInput label="Tên mẹ" value={customerItem.motherName} name={`properties[${index}].motherName`} />
                                  <FieldInput label="SĐT mẹ" value={customerItem.motherPhone} name={`properties[${index}].motherPhone`} />
                                </Panel>
                                <FieldInput label="Tên đồ / giấy tờ" value={customerItem.itemName} name={`properties[${index}].itemName`} />
                                <FieldInput label="Giá" value={customerItem.price} name={`properties[${index}].price`} isCurrency={true} />
                                <FieldInput
                                  label="Lãi"
                                  value={customerItem.interest}
                                  name={`properties[${index}].interest`}
                                  isCurrency={true}
                                />
                                <FieldArea label="Mô tả" value={customerItem.description} name={`properties[${index}].description`} />
                              </div>
                              <div>
                                <p>Tinh toan khuyen cao</p>
                                <p>
                                  {customerItem.price &&
                                    customerItem.interest &&
                                    `So tien lai: ${(customerItem.price * customerItem.interest) / 1000000}`}
                                </p>
                              </div>
                            </div>
                          );
                        }}
                      </RepeatingGroup>
                    )}
                  />
                  {totalProperties && (
                    <div>
                      <p>Tinh toan tong</p>
                      <p>{`Tổng giá: ${totalProperties.price}`}</p>
                      <p>{`Tổng lãi: ${totalProperties.interest}`}</p>
                    </div>
                  )}
                  <FieldArea label="Mục đích vay" name="borrowPurpose" />
                  <FieldDatePicker label="Ngày vay" name="dateBorrow" />
                  <FieldDatePicker label="Ngày trả" name="datePay" />
                </Col>
              </Row>

              <FormItem {...tailLayout} name="submitBtn">
                <SubmitButton type="primary" disabled={props.isSubmitting} htmlType="submit">
                  {status === CUSTOMER_STATUS.new ? 'Tạo mới' : 'Cập nhập'}
                </SubmitButton>
              </FormItem>
              {isSubmissionSuccess && (
                <Result status="success" title="Cập nhập thành công khách hàng mới" subTitle={`Mã khách hàng ${customerSubmited.id}`} />
              )}
              <DebugValues {...props} />
            </Form>
          </>
        );
      }}
    </Formik>
  );
};
