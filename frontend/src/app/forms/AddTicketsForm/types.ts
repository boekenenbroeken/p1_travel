export const enum FormFields {
    EMAIL = 'email',
    TITLE = 'title',
    DESCRIPTION = 'description',
    PRICE = 'price',
    AMOUNT = 'amount',
    SUPPLIER = 'supplier',
}

export interface AddTicketsFormValues {
    [FormFields.EMAIL]: string;
    [FormFields.TITLE]: string;
    [FormFields.DESCRIPTION]: string;
    [FormFields.PRICE]: number | string;
    [FormFields.AMOUNT]: number;
    [FormFields.SUPPLIER]: string;
}
