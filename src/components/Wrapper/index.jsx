import React from 'react'
import { useFormikContext } from 'formik'
import useConditional from '../../_hooks/useConditional'


export default function ({condition, compareType, children}) {
  const { values } = useFormikContext()
  const { result: isShow } = useConditional({ values, condition, isShow: true, compareType })

  return isShow && <>{children}</>
}
