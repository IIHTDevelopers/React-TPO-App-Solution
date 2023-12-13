import React, { useState } from 'react';

const PlacementList = ({ placements, deletePlacement, setEditPlacement }) => {
    const [filters, setFilters] = useState({ name: '' });

    const filteredPlacements = placements.filter((placement) => {
        return placement.name.toLowerCase().includes(filters.name.toLowerCase());
    });

    return (
        <div>
            <div>
                <label htmlFor="name">
                    Filter by Name:
                    <input
                        id="name"
                        type="text"
                        value={filters.name}
                        onChange={(e) => setFilters({ ...filters, name: e.target.value })}
                    />
                </label>
            </div>
            <ul>
                {filteredPlacements.length > 0 ? (
                    filteredPlacements.map((placement) => (
                        <li key={placement.id}>
                            <strong>Name:</strong> {placement.name}
                            <strong>Drive Date:</strong> {placement.driveDate}
                            <button onClick={() => setEditPlacement(placement)}>Edit</button>
                            <button onClick={() => deletePlacement(placement.id)}>Delete</button>
                        </li>
                    ))
                ) : (
                    <li>No placements found</li>
                )}
            </ul>
        </div>
    );
};

export default PlacementList;
