import * as Yup from 'yup'

export default Yup.object({
  firstName: Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
})