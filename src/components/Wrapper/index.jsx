import React from 'react'
import { useFormikContext } from 'formik'
import useConditional from '../../_hooks/useConditional'

export default function ({ condition, compareType, children, name }) {
  let elements = React.Children.toArray(children)
  const { values } = useFormikContext()
  const { result: isShow } = useConditional({ values, name, condition, compareType })

  console.log('wrapper', condition, isShow)
  return (<>{elements && elements.map((item) => React.cloneElement(item, { condition, compareType }))}</>)
}
