import React from 'react'
import { useField, useFormikContext } from 'formik'
import { Input, FormItem } from 'formik-antd'
import useConditional from '../../_hooks/useConditional'

export default ({ label, condition, compareType, placeholder = label, ...props }) => {
  // field has name, value, event
  const { name } = props
  const [field] = useField(props)
  const { values } = useFormikContext()
  const { result: isShow } = useConditional({ values, name, condition, compareType })

  return (
    isShow && (
      <FormItem label={label} name={name}>
        <Input {...field} {...props} placeholder={placeholder} />
      </FormItem>
    )
  )
}
