import * as yup from "yup";

export const formSchemaOne = yup.object().shape({
  name: yup.string().required("Name is required"),
  age: yup.number().required("Age is required"),
  mobile: yup.number().required("Mobile is required"),
  gender: yup.string().required("Gender is required"),
  govtIssuedId: yup
    .string()
    .required("Govt Issued ID is required")
    .test({
      name: "aadarValidation",
      test: (value: any) => {
        const aadharReg = /^[2-9][0-9]{11}$/;
        return aadharReg.test(value);
      },
      message: "Invalid Aadhar number",
    }),
  idType: yup.string().required("Govt Issued ID Type is required"),
});
export const formSchemaTwo = yup.object().shape({
  address: yup.string(),
  state: yup.string(),
  city: yup.string(),
  country: yup.string(),
  pincode: yup
    .string()
    .matches(/^\d*$/, "Pincode must contain only numeric values"),
});
// const schema = yup.object().shape({address: yup.string(), })
