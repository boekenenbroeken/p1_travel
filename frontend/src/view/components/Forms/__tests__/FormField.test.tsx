import { render, fireEvent } from '@testing-library/react';
import { FormField } from '../FormField';

describe('FormField', () => {
    it('renders the label and input element with the provided props', () => {
        const label = 'Username';
        const name = 'username';
        const value = 'JohnDoe';
        const onChange = jest.fn();

        const { getByLabelText } = render(
            <FormField label={label} name={name} value={value} onChange={onChange} />
        );

        const input = getByLabelText(label) as HTMLInputElement;
        expect(input).toBeInTheDocument();
        expect(input.value).toBe(value);
        expect(input.name).toBe(name);
    });

    it('renders a textarea if the type prop is "textarea"', () => {
        const label = 'Description';
        const name = 'description';
        const value = 'Lorem ipsum dolor sit amet';
        const onChange = jest.fn();

        const { getByLabelText } = render(
            <FormField
                label={label}
                name={name}
                type="textarea"
                value={value}
                onChange={onChange}
            />
        );

        const textarea = getByLabelText(label) as HTMLTextAreaElement;
        expect(textarea).toBeInTheDocument();
        expect(textarea.value).toBe(value);
        expect(textarea.name).toBe(name);
    });

    it('renders the error message if the error prop is provided', () => {
        const label = 'Username';
        const name = 'username';
        const value = 'JohnDoe';
        const error = 'Username is required';
        const onChange = jest.fn();

        const { getByText } = render(
            <FormField label={label} name={name} value={value} error={error} onChange={onChange} />
        );

        const errorMessage = getByText(error);
        expect(errorMessage).toBeInTheDocument();
    });

    it('calls the onChange callback when the input value changes', () => {
        const label = 'Username';
        const name = 'username';
        const value = 'JohnDoe';
        const onChange = jest.fn();

        const { getByLabelText } = render(
            <FormField label={label} name={name} value={value} onChange={onChange} />
        );

        const input = getByLabelText(label) as HTMLInputElement;
        const newValue = 'JaneSmith';

        fireEvent.change(input, { target: { value: newValue } });

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(newValue);
    });

    it('calls the onChange function with the correct value for a textarea', () => {
        const handleChange = jest.fn();
        const label = 'Field Label';
        const name = 'field';
        const value = '';
        const textareaValue = 'New Value';

        const { getByLabelText } = render(
            <FormField
                label={label}
                name={name}
                value={value}
                onChange={handleChange}
                type="textarea"
            />
        );

        const textarea = getByLabelText(label) as HTMLInputElement;
        fireEvent.change(textarea, { target: { value: textareaValue } });

        expect(handleChange).toHaveBeenCalledWith(textareaValue);
    });
});
