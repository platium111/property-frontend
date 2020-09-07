import React from 'react'
import { useField, useFormikContext } from 'formik'
import { Input, FormItem } from 'formik-antd'
import useConditional from '../../_hooks/useConditional'
import { useEffect } from 'react'

export default ({ label, condition, ...props }) => {
  // field has name, value, event
  const { name } = props
  const [field] = useField(props)
  const { values } = useFormikContext()
  const { result: isShow } = useConditional({ values, condition, isShow: true })

  return (
    isShow && (
      <>
        <FormItem label={label} name={name}>
          <Input {...field} {...props} />
        </FormItem>
      </>
    )
  )
}
