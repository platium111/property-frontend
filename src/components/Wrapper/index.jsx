import React from 'react'

export default function ({ condition, compareType, children }) {
  let elements = React.Children.toArray(children)

  return (<>{elements && elements.map((item) => React.cloneElement(item, { condition, compareType }))}</>)
}
