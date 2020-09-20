export function tranformDbData(data, type) {
  switch (type) {
    case 'address':
      const validObject =
        data &&
        Object.keys(data).map((keyObject) => {
          if (data[keyObject]) {
            switch (keyObject) {
              case 'homeNumber':
                return `Số nhà ${data[keyObject]}`
              case 'street':
                return `đường ${data[keyObject]}`
              case 'hamlet':
                return `thôn ${data[keyObject]}`
              case 'village':
                return `xã ${data[keyObject]}`
              case 'lane':
                return `ngõ ${data[keyObject]}`
              case 'alley':
                return `ngách ${data[keyObject]}`
              case 'district':
                return `huyện ${data[keyObject]}`
              case 'province':
                return `tỉnh ${data[keyObject]}`
              case 'city':
                return `thành phố ${data[keyObject]}`
              default:
                break
            }
          }
        })
      return validObject

    default:
      break
  }
}
