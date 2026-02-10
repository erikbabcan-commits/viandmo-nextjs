
import { render, screen } from '@testing-library/react';
import { Footer } from '../Footer';
import { describe, it, expect } from 'vitest';

describe('Footer', () => {
    it('renders copyright text', () => {
        render(<Footer />);
        const copyright = screen.getByText(/©/i);
        expect(copyright).toBeDefined();
    });

    it('renders contact information', () => {
        render(<Footer />);
        const links = screen.getAllByRole('link');
        const emailLink = links.find(link => link.getAttribute('href') === 'mailto:info@viandmo.com');
        expect(emailLink).toBeDefined();
    });
});
