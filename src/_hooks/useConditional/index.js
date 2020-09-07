import { template } from 'dot'
import { evaluate } from 'mathjs'
import { isEmpty } from 'lodash'
import { useState, useEffect } from 'react'

export default function (props) {
  const { values, condition = '', isShow } = props
  const [result, setResult] = useState(isShow)

  useEffect(() => {
    if (!isEmpty(values) && condition) {
      // example "{{=it.fieldC}} == ({{=it.fieldA}} + {{=it.fieldB}})"
      const compileTemplate = template(condition)

      const expressionWithValues = compileTemplate(values)
      const result = evaluate(expressionWithValues)
      setResult(result)
    }
  }, [values])

  return { result }
}
