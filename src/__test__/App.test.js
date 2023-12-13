import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useEffect: jest.fn(),
}));

describe('boundary', () => {
    test('AppComponent boundary renders without crashing', () => {
        render(<App />);
    });

    test('AppComponent boundary has "Welcome to TPO App" h2', () => {
        render(<App />);
        expect(screen.queryByText('Welcome to TPO App')).toBeInTheDocument();
    });

    test('AppComponent boundary has "Placement Form" h2', () => {
        render(<App />);
        expect(screen.queryByText('Placement Form')).toBeInTheDocument();
    });

    test('AppComponent boundary has "Placement List" h2', () => {
        render(<App />);
        expect(screen.queryByText('Placement List')).toBeInTheDocument();
    });
});
