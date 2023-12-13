import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlacementForm from './components/PlacementForm';
import PlacementList from './components/PlacementList';

function App() {
  const [placements, setPlacements] = useState([]);
  const [editPlacement, setEditPlacement] = useState(null);

  useEffect(() => {
    const fetchPlacements = async () => {
      try {
        const response = await axios.get('http://localhost:4000/placements');
        setPlacements(response.data);
      } catch (error) {
        console.error('Error fetching placements:', error);
      }
    };
    fetchPlacements();
  }, []);

  const addPlacement = async (placement) => {
    try {
      const addedPlacement = await axios.post('http://localhost:4000/placements', placement);
      setPlacements([...placements, addedPlacement.data]);
    } catch (error) {
      console.error('Error adding placement:', error);
    }
  };

  const deletePlacement = async (placementId) => {
    try {
      await axios.delete(`http://localhost:4000/placements/${placementId}`);
      setPlacements(placements.filter((placement) => placement.id !== placementId));
    } catch (error) {
      console.error('Error deleting placement:', error);
    }
  };

  const updatePlacement = async (placement) => {
    try {
      await axios.put(`http://localhost:4000/placements/${placement.id}`, placement);
      setPlacements(
        placements.map((p) => (p.id === placement.id ? { ...p, ...placement } : p))
      );
      setEditPlacement(null);
    } catch (error) {
      console.error('Error updating placement:', error);
    }
  };

  return (
    <div>
      <h2>Welcome to TPO App</h2>
      <h2>Placement Form</h2>
      <PlacementForm addPlacement={addPlacement} editPlacement={editPlacement} updatePlacement={updatePlacement} />
      <h2>Placement List</h2>
      <PlacementList
        placements={placements}
        deletePlacement={deletePlacement}
        setEditPlacement={setEditPlacement}
      />
    </div>
  );
}

export default App;