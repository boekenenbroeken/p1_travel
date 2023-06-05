import { render } from '@testing-library/react';
import { FormLabel } from '../FormLabel';

describe('FormLabel', () => {
    it('renders the label with children', () => {
        const { getByText } = render(<FormLabel htmlFor="input">Label</FormLabel>);
        const label = getByText('Label');

        expect(label).toBeInTheDocument();
    });

    it('renders the label with the provided htmlFor attribute', () => {
        const inputId = 'input';
        const { container } = render(
            <>
                <FormLabel htmlFor={inputId}>Label</FormLabel>
                <input id={inputId} />
            </>
        );

        const label = container.querySelector('label');
        expect(label).toBeInTheDocument();
        expect(label?.getAttribute('for')).toBe(inputId);
    });

    it('applies the provided className to the label', () => {
        const { container } = render(
            <FormLabel htmlFor="input" className="custom-label">
                Label
            </FormLabel>
        );
        const label = container.querySelector('.custom-label');

        expect(label).toBeInTheDocument();
    });
});
