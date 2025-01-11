import React, { useState } from "react";
import { Map, Marker } from "@vis.gl/react-google-maps";

const CustomMap = () => {
      // Marker location (default: London)
      const [markerLocation, setMarkerLocation] = useState({
            lat: 19.874558959161053,
            lng: 73.67604084871105,
      });

      // Function to redirect to Google Maps

      const redirectToGoogleMaps = (): void => {
            const googleMapsUrl = `https://maps.app.goo.gl/n2kganUyZy78cNwV7`;
            window.open(googleMapsUrl, "_blank"); // Opens in a new tab
      };

      const style = `
.app {
  display: flex;
  padding: 5rem;
  justify-content: space-evenly;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.map-container {
  height: 100px;
  width: 50%;
}`;

      return (
            <>
                  <style>{style}</style>
                  <div className="map-container">
                        <Map
                              style={{ borderRadius: "20px" }}
                              defaultZoom={13}
                              defaultCenter={markerLocation}
                              gestureHandling={"greedy"}
                              disableDefaultUI
                              onClick={() => redirectToGoogleMaps()} // Redirect on click
                        >
                              <Marker position={markerLocation} />
                        </Map>
                  </div>
            </>
      );
};

export default CustomMap;
