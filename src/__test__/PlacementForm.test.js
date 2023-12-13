// PlacementForm.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PlacementForm from '../components/PlacementForm';

const addPlacementMock = jest.fn();
const updatePlacementMock = jest.fn();

describe('boundary', () => {
    test('PlacementFormComponent boundary it is rendered', () => {
        render(<PlacementForm addPlacement={addPlacementMock} />);
        expect(screen.getByRole('heading')).toBeTruthy();
    });

    test('PlacementFormComponent boundary it has "Add a Placement" h2', () => {
        render(<PlacementForm addPlacement={addPlacementMock} />);
        const h2Element = screen.getByRole('heading');
        expect(h2Element.textContent).toBe('Add a Placement');
    });

    test('PlacementFormComponent boundary it has "Edit Placement" h2 when in edit mode', () => {
        render(<PlacementForm editPlacement={{ name: 'Edit Placement' }} updatePlacement={updatePlacementMock} />);
        const h2Element = screen.getByRole('heading');
        expect(h2Element.textContent).toBe('Edit Placement');
    });

    test('PlacementFormComponent boundary it has name input field', () => {
        render(<PlacementForm addPlacement={addPlacementMock} />);
        const nameInput = screen.getByLabelText('Name:');
        expect(nameInput).toBeTruthy();
    });

    test('PlacementFormComponent boundary it has driveDate input field', () => {
        render(<PlacementForm addPlacement={addPlacementMock} />);
        const driveDateInput = screen.getByLabelText('Drive Date:');
        expect(driveDateInput).toBeTruthy();
    });

    test('PlacementFormComponent boundary it has description textarea field', () => {
        render(<PlacementForm addPlacement={addPlacementMock} />);
        const descriptionTextarea = screen.getByLabelText('Description:');
        expect(descriptionTextarea).toBeTruthy();
    });

    test('PlacementFormComponent boundary it has stream input field', () => {
        render(<PlacementForm addPlacement={addPlacementMock} />);
        const streamInput = screen.getByLabelText('Stream:');
        expect(streamInput).toBeTruthy();
    });

    test('PlacementFormComponent boundary it has minimumPercentile input field', () => {
        render(<PlacementForm addPlacement={addPlacementMock} />);
        const minimumPercentileInput = screen.getByLabelText('Minimum Percentile:');
        expect(minimumPercentileInput).toBeTruthy();
    });

    test('PlacementFormComponent boundary it has an "Add Placement" button', () => {
        render(<PlacementForm addPlacement={addPlacementMock} />);
        const addButton = screen.getByRole('button', { name: 'Add Placement' });
        expect(addButton).toBeTruthy();
    });

    test('PlacementFormComponent boundary it has an "Update Placement" button when in edit mode', () => {
        render(<PlacementForm editPlacement={{ name: 'Edit Placement' }} updatePlacement={updatePlacementMock} />);
        const updateButton = screen.getByRole('button', { name: 'Update Placement' });
        expect(updateButton).toBeTruthy();
    });
});
