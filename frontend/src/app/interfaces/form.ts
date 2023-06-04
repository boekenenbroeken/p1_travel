export interface FormProps<T> {
    values?: T;
    defaultValues?: T;
    onSubmit: (values: T) => void;
    loading?: boolean;
    disableSubmit?: boolean;
}
