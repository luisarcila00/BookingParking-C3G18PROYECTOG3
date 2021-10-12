import httpClient from "./httpClient";

const END_POINT = '/api/vehicle';

const vehicles = {
    getVehicles: () => httpClient.get(END_POINT + 's'),
    registerVehicle: (vehicle) => httpClient.post(END_POINT, vehicle),
}
export {
    vehicles
}