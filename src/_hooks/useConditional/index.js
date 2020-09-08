import { evaluate, compareNatural } from 'mathjs'
import { isEmpty } from 'lodash'
import { useState, useEffect } from 'react'
import HandleBars from "handlebars"

export default function (props) {
  // condition could be string or object of {x,y}
  const { values, condition = '', isShow, compareType } = props
  const [result, setResult] = useState(isShow)

  useEffect(() => {
    if (!isEmpty(values) && condition) {
      // example "{{=it.fieldC}} == ({{=it.fieldA}} + {{=it.fieldB}})"
     
      let result;
      switch (compareType) {
        case "math":
          const template = HandleBars.compile(condition);
          const expressionWithValues = template(values);
          result = evaluate(expressionWithValues);
          break;
        case "string":
          const {isEqual = false} = condition;
          const transformX = HandleBars.compile(condition.x);
          const transformY = HandleBars.compile(condition.y);
          const compareReturned = compareNatural(transformX(values), transformY(values));
          const isEqually = compareReturned === 0 ? true : false;

          result = isEqual === false ? isEqually : !isEqually
        default:
          break;
      }
      
      setResult(result)
    }
  }, [values])

  return { result }
}
