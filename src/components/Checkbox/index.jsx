import React from 'react';
import { useField, useFormikContext } from 'formik';
import { Checkbox, FormItem } from 'formik-antd';
import useConditional from '../../_hooks/useConditional';

export default ({ label, condition, compareType, onChange, ...restProps }) => {
  // field has name, value, event
  const { name } = restProps;
  const [field] = useField(restProps);
  const { values } = useFormikContext();
  const { result: isShow } = useConditional({ values, name, condition, compareType });

  return (
    isShow && (
      <>
        <FormItem label={label} name={name}>
          <Checkbox {...field} onChange={onChange} {...restProps} />
        </FormItem>
      </>
    )
  );
};
