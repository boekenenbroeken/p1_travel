export interface FormProps<T> {
    values?: T;
    defaultValues?: T;
    onSubmit: (values: T) => Promise<void>;
    loading?: boolean;
    disableSubmit?: boolean;
}
