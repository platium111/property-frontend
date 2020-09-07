import * as Yup from 'yup'

export default Yup.object({
  itemName: Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
})