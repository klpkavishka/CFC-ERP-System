import React, { useState } from 'react';
import { Truck, Anchor, MapPin, AlertTriangle, ThermometerSnowflake, Battery, Fuel, AlertCircle } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet marker icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Fleet = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);

  const vehicles = [
    {
      id: 'TRK-001',
      type: 'Refrigerated Truck',
      location: { lat: 6.9271, lng: 79.8612 }, // Colombo
      temperature: -18,
      status: 'En Route',
      nextStop: 'CFC Outlet - Galle',
      fuelLevel: 75,
      batteryHealth: 90,
      lastMaintenance: '2024-02-15',
      carbonEmission: 12.5,
    },
    {
      id: 'VSL-005',
      type: 'Fishing Vessel',
      location: { lat: 8.5874, lng: 81.2152 }, // Trincomalee
      temperature: 4,
      status: 'Fishing',
      nextStop: 'Trincomalee Port',
      fuelLevel: 60,
      batteryHealth: 85,
      lastMaintenance: '2024-02-10',
      carbonEmission: 18.2,
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Fleet Management</h1>
        <div className="space-x-2">
          <button 
            onClick={() => setShowEmergencyModal(true)}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 mr-2"
          >
            <AlertCircle className="w-4 h-4 inline mr-2" />
            Emergency Response
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Add Vehicle
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Optimize Routes
          </button>
        </div>
      </div>

      {/* Fleet Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Active Vehicles</p>
              <p className="text-2xl font-semibold">18</p>
            </div>
            <Truck className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Active Vessels</p>
              <p className="text-2xl font-semibold">12</p>
            </div>
            <Anchor className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Carbon Footprint</p>
              <p className="text-2xl font-semibold">15.2 tons</p>
            </div>
            <Fuel className="w-8 h-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Fleet Health</p>
              <p className="text-2xl font-semibold">92%</p>
            </div>
            <Battery className="w-8 h-8 text-blue-500" />
          </div>
        </div>
      </div>

      {/* Live Fleet Map */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
        <h2 className="font-semibold mb-4">Live Fleet Map</h2>
        <div className="h-96 rounded-lg overflow-hidden">
          <MapContainer 
            center={[7.8731, 80.7718]} // Sri Lanka center
            zoom={8} 
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {vehicles.map((vehicle) => (
              <Marker 
                key={vehicle.id}
                position={[vehicle.location.lat, vehicle.location.lng]}
                eventHandlers={{
                  click: () => setSelectedVehicle(vehicle),
                }}
              >
                <Popup>
                  <div className="p-2">
                    <h3 className="font-semibold">{vehicle.id}</h3>
                    <p>{vehicle.type}</p>
                    <p>Temperature: {vehicle.temperature}°C</p>
                    <p>Status: {vehicle.status}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>

      {/* Vehicle Details */}
      {selectedVehicle && (
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold">Vehicle Details</h2>
            <button 
              onClick={() => setSelectedVehicle(null)}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <p className="text-gray-600">ID: {selectedVehicle.id}</p>
              <p className="text-gray-600">Type: {selectedVehicle.type}</p>
              <p className="text-gray-600">Status: {selectedVehicle.status}</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600">Temperature: {selectedVehicle.temperature}°C</p>
              <p className="text-gray-600">Fuel Level: {selectedVehicle.fuelLevel}%</p>
              <p className="text-gray-600">Battery Health: {selectedVehicle.batteryHealth}%</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600">Last Maintenance: {selectedVehicle.lastMaintenance}</p>
              <p className="text-gray-600">Carbon Emission: {selectedVehicle.carbonEmission} tons</p>
              <p className="text-gray-600">Next Stop: {selectedVehicle.nextStop}</p>
            </div>
          </div>
        </div>
      )}

      {/* Emergency Response Modal */}
      {showEmergencyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4">Emergency Response System</h2>
            <div className="space-y-4">
              <button className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                Send SOS Alert
              </button>
              <button className="w-full bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700">
                Report Vehicle Breakdown
              </button>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Request Emergency Maintenance
              </button>
              <button 
                onClick={() => setShowEmergencyModal(false)}
                className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Fleet;