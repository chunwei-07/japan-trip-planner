import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
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

function MapView() {
    // Set initial position to Japan
    const position = [36.2048, 138.2529];
    const pins = usePinStore((state) => state.pins);   // Get pins array from store

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
                    <Marker key={pin.id} position={[pin.lat, pin.lng]}>
                        <Popup>
                            A new spot! <br /> We'll customize this later.
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