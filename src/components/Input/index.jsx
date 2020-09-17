import React from 'react'
import { useField, useFormikContext } from 'formik'
import { Input, FormItem } from 'formik-antd'
import useConditional from '../../_hooks/useConditional'
import InputMask from 'react-input-mask'

export default ({ label, name, placeholder = label, compareType, condition, mask,  }) => {
  const [field] = useField({name}); // value, onChange, onBlur
  const { values } = useFormikContext();
  const { result: isShow } = useConditional({ values, name, condition, compareType });

  return (
    isShow && (
      <FormItem label={label} name={name}>
        {mask ? (
          <InputMask mask={mask} value={field.value} onChange={field.onChange}>
            {(maskProps) => <Input {...maskProps} name={name} placeholder={placeholder} />}
          </InputMask>
        ) : (
          <Input {...field} name={name} placeholder={placeholder} />
        )}
      </FormItem>
    )
  )
}
