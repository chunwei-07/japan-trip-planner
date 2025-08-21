import usePinStore from "../utils/store";

function Sidebar() {
    const pins = usePinStore((state) => state.pins);

    return (
        <div className="w-1/4 bg-white p-4 shadow-lg overflow-y-auto">
            <h1 className="text-2xl font-bold mb-4">Japan Trip Planner</h1>
            <p className="text-gray-600">Click on the map to add a pin!</p>

            <hr className="mb-4" />

            <h2 className="text-xl font-semibold mb-2">My Spots ({pins.length})</h2>

            {/* List of pins */}
            <ul className="space-y-2">
                {pins.map((pin) => (
                    <li key={pin.id} className="p-2 border rounded-md shadow-sm">
                        <p className="font-semibold">Spot #{pin.id.substring(0, 4)}</p>
                        <p className={`text-sm ${pin.status === 'Planned' ? 'text-blue-600' : 'text-green-600'}`}>
                            Status: {pin.status}
                        </p>
                    </li>
                ))}
                {pins.length === 0 && (
                    <p className="text-gray-500">No spots added yet.</p>
                )}
            </ul>
        </div>
    );
}

export default Sidebar;