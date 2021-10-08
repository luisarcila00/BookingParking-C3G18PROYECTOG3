import httpClient from "./httpClient";

const END_POINT_CUP = "api/asignarCupos";

const getAllCupos = () => httpClient.get(END_POINT_CUP);

const createCupo = (cupo) => httpClient.post(END_POINT_CUP, cupo);

const getCupo = (code) => httpClient.get(END_POINT_CUP+"/"+code);

const updateCupo = (code, cupo) => httpClient.put(END_POINT_CUP+"/"+code, cupo);

const deleteCupo = (code) => httpClient.delete(END_POINT_CUP+"/"+code);

export{
    getAllCupos,
    createCupo,
    getCupo,
    updateCupo,
    deleteCupo
}
