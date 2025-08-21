import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import { icon } from "leaflet";
import usePinStore from "../utils/store";

// Handle map click events
function MapClickHandler() {
    const addPin = usePinStore((state) => state.addPin);  // Get the addPin function from the store

    useMapEvents({
        click(e) {
            // call addPin func when map click
            addPin(e.latlng);
        },
    });

    return null;
}

// Define custom icons
const plannedIcon = new icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

const visitedIcon = new icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

function MapView() {
    // Set initial position to Japan
    const position = [36.2048, 138.2529];
    const pins = usePinStore((state) => state.pins);   // Get pins array from store
    const togglePinStatus = usePinStore((state) => state.togglePinStatus);

    return (
        // MapContainer needs a specific height to be visible
        // Use Tailwind class: w-full and h-screen
        <div className="w-3/4 h-screen">
            <MapContainer center={position} zoom={6} style={{ height: '100%', width: '100%' }}>
                {/* This is the map theme. Will use CartoDB Positron theme. */}
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                />
                
                {/* Loop through pins from store and render a Marker for each one */}
                {pins.map((pin) => (
                    <Marker
                        key={pin.id}
                        position={[pin.lat, pin.lng]}
                        // Conditionally choose the icon based on status
                        icon={pin.status === 'Planned' ? plannedIcon : visitedIcon}
                    >
                        <Popup>
                            <div className="text-center">
                                <p>Status: <span className="font-bold">{pin.status}</span></p>
                                <button
                                    className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                                    onClick={() => togglePinStatus(pin.id)}   // Call toggle func on click
                                >
                                    Mark as {pin.status === 'Planned' ? 'Visited' : 'Planned'}
                                </button>
                            </div>
                        </Popup>
                    </Marker>
                ))}

                {/* Add click handler component to the map */}
                <MapClickHandler />
            </MapContainer>
        </div>
    );
}

export default MapView;