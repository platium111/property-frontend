import React from 'react'
import { useFormikContext } from 'formik'
import { FormItem } from 'formik-antd'
import { DatePicker } from 'antd'
import useConditional from '../../_hooks/useConditional'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']

export default ({ label, condition, compareType, placeholder = label, ...props }) => {
  const { name } = props
  const { values, setFieldValue } = useFormikContext()
  const { result: isShow } = useConditional({ values, name, condition, compareType })
  
  return (
    isShow && (
      <FormItem label={label} name={name}>
        <DatePicker
          {...props}
          placeholder={placeholder}
          defaultValue={moment(new Date(), dateFormatList[0])}
          format={dateFormatList}
          onChange={(_, dateString = moment(new Date(), dateFormatList[0])) => {
            setFieldValue(name, dateString);
          }}
        />
      </FormItem>
    )
  )
}