import httpClient from "./httpClient";

const END_POINT = '/api/user';

const users = {
    getUsers: () => httpClient.get(END_POINT + 's'),
    getUserByUsername: (email) => httpClient.get(END_POINT + '/' + email),
    createUser: (data) => httpClient.post(END_POINT, data),
    editUser: (email, password) => httpClient.post(END_POINT + '/' + email, password),
    deleteUser: (email) => httpClient.get(END_POINT + '/' + email),
    login: (email, password) => httpClient.post('/api/login', {email: email, password: password}),
}
export {
    users
}