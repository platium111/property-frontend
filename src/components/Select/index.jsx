import React from 'react';
import { useField, useFormikContext } from 'formik';
import { Select, FormItem } from 'formik-antd';
import useConditional from '../../_hooks/useConditional';

export default ({ label, condition, compareType, name, showSearch, children, defaultValue }) => {
  // field has name, value, event
  const [field] = useField({ name });
  const { values } = useFormikContext();
  const { result: isShow } = useConditional({ values, name, condition, compareType });

  return (
    isShow && (
      <>
        <FormItem label={label} name={name}>
          <Select {...field} name={name} showSearch={showSearch} defaultValue={defaultValue} children={children} />
        </FormItem>
      </>
    )
  );
};
