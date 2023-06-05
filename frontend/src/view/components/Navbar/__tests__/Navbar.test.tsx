import { render, screen } from '@testing-library/react';
import { Navbar } from '../Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Navbar', () => {
    it('renders the logo image', () => {
        render(
            <Router>
                <Navbar />
            </Router>
        );
        const logoImage = screen.getByAltText('Events travel logo');
        expect(logoImage).toBeInTheDocument();
    });

    it('renders the navigation links', () => {
        render(
            <Router>
                <Navbar />
            </Router>
        );
        const navLinks = screen.getAllByRole('link');
        expect(navLinks.length).toBeGreaterThan(0);
    });
});
