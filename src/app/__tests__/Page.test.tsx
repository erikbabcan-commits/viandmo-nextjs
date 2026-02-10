
import { render, screen } from '@testing-library/react';
import Page from '../page';
import { describe, it, expect } from 'vitest';

// Mock child components to allow shallow verification if needed, 
// or let them render if they are simple.
// Here we assume Hero is simple enough or we verify its text.

describe('Home Page', () => {
    it('renders main content', () => {
        render(<Page />);

        // Check for Hero headline
        const heroText = screen.getByText(/Profesionálne sťahovanie a upratovanie/i);
        expect(heroText).toBeDefined();

        // Check for Section title
        const sectionTitle = screen.getByText(/Vyber si službu/i);
        expect(sectionTitle).toBeDefined();
    });
});
