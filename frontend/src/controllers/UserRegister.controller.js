import httpClient from "./httpClient";

const END_POINT = "api/booking/registros";

const usersRegisters = {
    getUsers: () => httpClient.get(END_POINT + 's'),
    createUser: (register) => httpClient.post(END_POINT, register),
    editUser: (user, code) => httpClient.post(END_POINT + '/' + code, user),
    deleteUser: (code) => httpClient.get(END_POINT + '/' + code),
    login: (data) => httpClient.post('/api/login', data),
}
export {
    usersRegisters
}


