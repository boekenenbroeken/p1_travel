import { render } from '@testing-library/react';
import { Error } from '../Error';

describe('Error', () => {
    it('renders the error message and image', () => {
        const { getByText, getByAltText } = render(<Error />);
        const errorMessage = getByText('Ooops, something went wrong...');
        const errorImage = getByAltText('Error image');

        expect(errorMessage).toBeInTheDocument();
        expect(errorImage).toBeInTheDocument();
        expect(errorImage.getAttribute('src')).toContain('error.png');
    });

    it('has correct styling', () => {
        const { container } = render(<Error />);
        const errorRoot = container.firstChild;

        expect(errorRoot).toHaveStyle('min-height: 100vh;');
    });
});
