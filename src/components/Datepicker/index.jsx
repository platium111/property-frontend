import React from 'react';
import { useFormikContext, useField } from 'formik';
import { FormItem } from 'formik-antd';
import { DatePicker } from 'antd';
import useConditional from '../../_hooks/useConditional';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { GLOBAL_DATE_FORMAT } from '../../_constants';
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

export default ({ label, condition, compareType, placeholder = label, defaultValue, name }) => {
  const [field] = useField({ name });
  const { values, setFieldValue } = useFormikContext();
  const { result: isShow } = useConditional({ values, name, condition, compareType });

  return (
    isShow && (
      <FormItem label={label} name={name}>
        <DatePicker
          name={name}
          placeholder={placeholder}
          value={field.value ? moment(field.value, GLOBAL_DATE_FORMAT) : null}
          // defaultValue={defaultValue && moment(defaultValue, dateFormatList[0])}
          format={dateFormatList}
          onChange={(_, dateString = moment(new Date(), GLOBAL_DATE_FORMAT)) => {
            setFieldValue(name, dateString);
          }}
        />
      </FormItem>
    )
  );
};
