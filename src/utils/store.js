import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { persist } from "zustand/middleware";

const usePinStore = create(
    // Wrap the store in persist middleware
    persist(
        (set) => ({
            pins: [
            ],
            addPin: (latlng) => {
                set((state) => ({
                    pins: [
                        ...state.pins,
                        {
                            id: uuidv4(),
                            lat: latlng.lat,
                            lng: latlng.lng,
                            status: 'Planned',  // Default status
                        },
                    ],
                }));
            },
            // Add a function to toggle the status
            togglePinStatus: (id) => {
                set((state) => ({
                    pins: state.pins.map((pin) =>
                        pin.id === id
                            ? { ...pin, status: pin.status === 'Planned' ? 'Visited' : 'Planned' }
                            : pin
                    ),
                }));
            },
        }),
        {
            name: 'japan-trip-storage',   // key to use in localStorage
        }
    )
);

export default usePinStore;