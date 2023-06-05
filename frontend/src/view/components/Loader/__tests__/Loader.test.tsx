import { render } from '@testing-library/react';
import { Loader } from '../Loader';

describe('Loader', () => {
    it('renders the loader component', () => {
        const { container } = render(<Loader />);
        const loader = container.querySelector('svg');
        expect(loader).toBeInTheDocument();
    });
});
