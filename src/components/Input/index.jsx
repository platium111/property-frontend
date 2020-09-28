import React from 'react';
import { useField, useFormikContext } from 'formik';
import { Input, FormItem } from 'formik-antd';
import useConditional from '../../_hooks/useConditional';
import InputMask from 'react-input-mask';
import { useState } from 'react';

export default ({ label, name, placeholder = label, compareType, condition, mask, isCurrency }) => {
  const [field] = useField({ name }); // value, onChange, onBlur
  const { values, setFieldValue } = useFormikContext();
  const { result: isShow } = useConditional({ values, name, condition, compareType });
  const [currencyValue, setCurrencyValue] = useState();

  const displayValue = isCurrency ? currencyValue : field.value || '';
  // * help to custom value instead of mask value
  function handleChange(e) {
    const {
      target: { value },
    } = e;
    // custom value for masking | const tranformValue = value.split("/").join("");
    if (value && isCurrency) {
      const parseValue = Number(value.replace(/[^0-9.-]+/g, ''));
      const currency = new Intl.NumberFormat().format(parseValue); // 123,456
      setCurrencyValue(currency);
      setFieldValue(name, parseValue);
    }
  }

  return (
    isShow && (
      <FormItem label={label} name={name}>
        {mask ? (
          <InputMask mask={mask} value={displayValue} onChange={handleChange}>
            {(maskProps) => {
              return <Input {...maskProps} name={name} placeholder={placeholder} />;
            }}
          </InputMask>
        ) : (
          <Input value={displayValue} onChange={handleChange} name={name} placeholder={placeholder} />
        )}
      </FormItem>
    )
  );
};
