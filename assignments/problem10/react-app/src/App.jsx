
import React, { useState, useEffect, useCallback } from "react";
import MapComponent from "./MapComponent";
import "./App.css";

function App() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [destination, setDestination] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [route, setRoute] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  const handleLocationSearch = useCallback((query) => {
    
    console.log("Searching for:", query);
    setSearchResults([
      { id: 1, name: "Location 1", lat: 40.748817, lng: -73.985428 },
      { id: 2, name: "Location 2", lat: 34.052235, lng: -118.243683 },
    ]);
  }, []);

  // Handle route planning
  const handleRoutePlanning = useCallback(() => {
    // Call map API to calculate the route between currentLocation and destination
    console.log("Planning route to:", destination);
    setRoute({
      directions: "Directions between current location and destination",
    });
  }, [currentLocation, destination]);

  return (
    <div className="App">
      <h1>Map Tracking Application</h1>
      <input
        type="text"
        placeholder="Enter destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <button onClick={handleRoutePlanning}>Plan Route</button>

      <MapComponent
        currentLocation={currentLocation}
        searchResults={searchResults}
        route={route}
      />
    </div>
  );
}

export default App;
