import React from 'react'
import { useField } from 'formik'
import { Select, FormItem } from 'formik-antd'

export default ({ label, ...props }) => {
  // field has name, value, event
  const { name } = props
  const [field] = useField(props)

  return (
    <>
      <FormItem label={label} name={name}>
        <Select {...field} {...props} />
      </FormItem>
    </>
  )
}
