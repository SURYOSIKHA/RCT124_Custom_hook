
import React from "react";
import { GoogleMap, LoadScript, Marker, DirectionsRenderer } from "@react-google-maps/api";

const MapComponent = React.memo(({ currentLocation, searchResults, route }) => {
  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: currentLocation?.lat || 0,
    lng: currentLocation?.lng || 0,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAgXA1se3QU4G9vYtAovSk8X1AUTtL87I4">
      <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter}>
        {currentLocation && <Marker position={currentLocation} />}
        
        {searchResults.map((result) => (
          <Marker key={result.id} position={{ lat: result.lat, lng: result.lng }} />
        ))}

        {route && <DirectionsRenderer directions={route} />}
      </GoogleMap>
    </LoadScript>
  );
});

export default MapComponent;
