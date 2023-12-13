import React, { useState, useEffect } from 'react';

const PlacementForm = ({ addPlacement, editPlacement, updatePlacement }) => {
    const initialPlacementState = {
        id: '',
        name: '',
        driveDate: '',
        description: '',
        stream: '',
        minimumPercentile: '',
    };

    const [placement, setPlacement] = useState(initialPlacementState);

    useEffect(() => {
        if (editPlacement) {
            setPlacement({ ...editPlacement });
        } else {
            setPlacement({ ...initialPlacementState });
        }
    }, [editPlacement]);

    const isEditForm = !!editPlacement;

    const isFormIncomplete = !placement.name || !placement.driveDate || !placement.description || !placement.stream || !placement.minimumPercentile;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isFormIncomplete) {
            alert('Please fill in all fields.');
            return;
        }
        if (isEditForm) {
            updatePlacement(placement);
        } else {
            addPlacement(placement);
        }
        setPlacement({ ...initialPlacementState });
    };

    return (
        <div>
            <h2>{isEditForm ? 'Edit Placement' : 'Add a Placement'}</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name:
                    <input
                        id="name"
                        type="text"
                        value={placement.name}
                        onChange={(e) => setPlacement({ ...placement, name: e.target.value })}
                        required
                    />
                </label>
                <label htmlFor="driveDate">
                    Drive Date:
                    <input
                        id="driveDate"
                        type="date"
                        value={placement.driveDate}
                        onChange={(e) => setPlacement({ ...placement, driveDate: e.target.value })}
                        required
                    />
                </label>
                <label htmlFor="description">
                    Description:
                    <textarea
                        id="description"
                        value={placement.description}
                        onChange={(e) => setPlacement({ ...placement, description: e.target.value })}
                        required
                    />
                </label>
                <label htmlFor="stream">
                    Stream:
                    <input
                        id="stream"
                        type="text"
                        value={placement.stream}
                        onChange={(e) => setPlacement({ ...placement, stream: e.target.value })}
                        required
                    />
                </label>
                <label htmlFor="minimumPercentile">
                    Minimum Percentile:
                    <input
                        id="minimumPercentile"
                        type="text"
                        value={placement.minimumPercentile}
                        onChange={(e) => setPlacement({ ...placement, minimumPercentile: e.target.value })}
                        required
                    />
                </label>
                <button type="submit" disabled={isFormIncomplete}>
                    {isEditForm ? 'Update Placement' : 'Add Placement'}
                </button>
            </form>
        </div>
    );
};

export default PlacementForm;
