import React from 'react'
import { useField } from 'formik'
import { FormItem, Input } from 'formik-antd'

export default ({ label, compareType, ...props }) => {
  // field has name, value, event
  const { name } = props
  const [field] = useField(props)

  return (
    <>
      <FormItem label={label} name={name}>
      <Input.TextArea {...field} {...props}/>
      </FormItem>
    </>
  )
}
