
import { render, screen } from '@testing-library/react';
import { Header } from '../Header';
import { describe, it, expect } from 'vitest';

describe('Header', () => {
    it('renders navigation links', () => {
        render(<Header />);
        const pricingLink = screen.getByText(/Cenník/i);
        const callLink = screen.getByText(/Zavolať/i);

        expect(pricingLink).toBeDefined();
        expect(callLink).toBeDefined();
    });
});
