import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  quantity: yup.number().integer().required(),
  customer_id: yup.string().nullable().required(),
  table_id: yup.string().nullable().required(),
  menu_id: yup.string().nullable().required(),
});
