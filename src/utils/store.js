import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { latLng } from "leaflet";

const usePinStore = create((set) => ({
    // The array that will hold all pin objects
    pins: [
        // Add our initial Tokyo pin here so it's managed by the store
        { id: 'initial-1', lat: 35.6895, lng: 139.6917, status: 'Planned' }
    ],

    // The function to add new pin
    addPin: (latlng) => {
        set((state) => ({
            pins: [
                ...state.pins,
                {
                    id: uuidv4(),        // Generate a unique ID
                    lat: latlng.lat,
                    lng: latlng.lng,
                    status: 'Planned',   // Default status for new pins
                },
            ],
        }));
    },
}));

export default usePinStore;