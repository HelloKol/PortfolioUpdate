import React from "react";
import MapStyles from "./MapStyles";
import GoogleMapReact from "google-map-react";

export default function CustomMap() {
  return (
    <div className="mt-24" style={{ height: "25rem", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        options={{ styles: MapStyles.dark }}
        defaultCenter={{
          lat: 51.509,
          lng: -0.035,
        }}
        defaultZoom={15}
      ></GoogleMapReact>
    </div>
  );
}
