import httpClient from "./httpClient";

const END_POINT = "/api/asignarTarifas";

const tarifas = {
    getAllTarifas: () => httpClient.get(END_POINT),
    createTarifa: (tarifa) => httpClient.post(END_POINT, tarifa),
    getTarifa: (code) => httpClient.get(END_POINT+'/'+code),
    updateTarifa: (code, tarifa) => httpClient.put(END_POINT+'/'+code, tarifa),
    deleteTarifa: (code) => httpClient.delete(END_POINT+'/'+code),

}

export {tarifas}