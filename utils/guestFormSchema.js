import * as Yup from "yup";
const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Name is required"),


  phoneNumber: Yup.string()
    .required("Phone Number is required").matches(/^[0-9]+$/,"Input Valid Phone Number")
    .min(10, "Input Valid Phone Number"),
});

export default validationSchema;