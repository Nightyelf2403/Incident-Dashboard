import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapView = () => {
  return (
    <MapContainer
      center={[37.7749, -122.4194]}
      zoom={5}
      className="h-64 rounded"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[37.7749, -122.4194]}>
        <Popup>San Francisco Incident</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;
