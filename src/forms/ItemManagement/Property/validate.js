import * as Yup from 'yup'

export default Yup.object({
  itemName: Yup.string().max(50, 'Không nhập quá 50 từ').required('Phải nhập dữ liệu'),
  color: Yup.string().max(20, "Không nhập quá 20 từ"),
  year: Yup.number().required("Phải nhập số").typeError("Phải nhập số"),
})