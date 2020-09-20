import * as Yup from 'yup'

export default Yup.object({
  firstName: Yup.string().max(50, 'Phải nhỏ hơn 50 ký tự').required('Yêu cầu nhập'),
})