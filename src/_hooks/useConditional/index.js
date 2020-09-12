import { evaluate, compareNatural } from 'mathjs'
import { useState, useEffect } from 'react'
import HandleBars from 'handlebars';
import {useFormikContext} from 'formik';

export default function (props) {
  // condition could be string or object of {x,y}
  const { values, name, condition = '', compareType} = props
  const [result, setResult] = useState(true);
  const {setFieldValue} = useFormikContext();

  console.log(name)
  useEffect(() => {
    if (condition) {
      // example "{{=it.fieldC}} == ({{=it.fieldA}} + {{=it.fieldB}})"
      let conditionalResult;
      switch (compareType) {
        case 'math':
          const template = HandleBars.compile(condition)
          const expressionWithValues = template(values)
          conditionalResult = evaluate(expressionWithValues)
          break;
        case 'string':
          const { notEqual = false } = condition
          const transformX = HandleBars.compile(condition.x)
          const transformY = HandleBars.compile(condition.y)
          const compareReturned = compareNatural(transformX(values), transformY(values))
          const isEqually = compareReturned === 0 ? true : false

          conditionalResult = notEqual === false ? isEqually : !isEqually;
          break;
        default:
          break
      }

      setResult(conditionalResult)
    }
  }, [values, condition])

  // Remove data if it is hidden
  useEffect(() => {
    if(!result && name) {
      setFieldValue(name, "")
    }
  }, [values, result])
  return { result }
}
