import React from 'react'
import { useField, useFormikContext } from 'formik'
import { Select, FormItem } from 'formik-antd';
import useConditional from '../../_hooks/useConditional'


export default ({ label, condition, compareType, ...restProps }) => {
  // field has name, value, event
  const { name } = restProps
  const [field] = useField(restProps)
  const { values } = useFormikContext()
  const { result: isShow } = useConditional({ values, name, condition, compareType })

  console.log('select')
  return (
    isShow ? (
      <>
        <FormItem label={label} name={name}>
          <Select {...field} {...restProps} />
        </FormItem>
      </>
    ) : <></>
  )
}
