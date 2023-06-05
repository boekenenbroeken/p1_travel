import * as Yup from 'yup';
import { GRID } from '../../constants/grid';

import { AddTicketsFormValues, FormFields } from './types';

export const INITIAL_VALUES: AddTicketsFormValues = {
    [FormFields.EMAIL]: '',
    [FormFields.TITLE]: '',
    [FormFields.DESCRIPTION]: '',
    [FormFields.PRICE]: '',
    [FormFields.AMOUNT]: 1,
    [FormFields.SUPPLIER]: '',
};

export const validationSchema = Yup.object().shape({
    [FormFields.EMAIL]: Yup.string().email('Invalid email address').required('Email is required'),
    [FormFields.TITLE]: Yup.string().required('Title is required'),
    [FormFields.DESCRIPTION]: Yup.string().required('Description is required'),
    [FormFields.PRICE]: Yup.string()
        .required('Price is required')
        .matches(/^(?:\$|€)?\d+(\.\d{1,2})?(?:\$|€)?$/, 'Price must be a valid currency amount'),
    [FormFields.AMOUNT]: Yup.number()
        .required('Amount is required')
        .positive('Amount must be a positive number'),
    [FormFields.SUPPLIER]: Yup.string().required('Supplier is required'),
});

export const FORM_FIELDS = [
    { name: FormFields.EMAIL, label: 'Email', column: GRID.fullColumn },
    { name: FormFields.TITLE, label: 'Title', column: GRID.fullColumn },
    {
        name: FormFields.DESCRIPTION,
        label: 'Description',
        type: 'textarea' as const,
        column: GRID.fullColumn,
    },
    { name: FormFields.PRICE, label: 'Price', column: GRID.halfColumn },
    { name: FormFields.AMOUNT, label: 'Amount of tickets', column: GRID.halfColumn },
    { name: FormFields.SUPPLIER, label: 'Supplier', column: GRID.fullColumn },
];
