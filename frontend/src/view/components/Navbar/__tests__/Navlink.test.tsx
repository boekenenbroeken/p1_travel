import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { NavLink } from '../NavLink';

describe('NavLink', () => {
    it('renders the NavLink component with active styling when current location matches the "to" prop', () => {
        render(
            <MemoryRouter initialEntries={['/my-link']}>
                <NavLink to="/my-link">Link</NavLink>
            </MemoryRouter>
        );

        const linkElement = screen.getByText('Link');
        expect(linkElement).toHaveStyle('text-decoration: underline;');
    });

    it('renders the NavLink component without active styling when current location does not match the "to" prop', () => {
        render(
            <MemoryRouter initialEntries={['/my-link']}>
                <NavLink to="/other-link">Link</NavLink>
            </MemoryRouter>
        );

        const linkElement = screen.getByText('Link');
        expect(linkElement).toHaveStyle('text-decoration: none;');
    });
});
