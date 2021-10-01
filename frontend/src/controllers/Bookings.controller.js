import httpClient from "./httpClient";

const END_POINT = '/api/booking';

const bookings = {
    getBookings: () => httpClient.get(END_POINT + 's'),
    createBooking: (booking) => httpClient.post(END_POINT, booking),
    editBooking: (booking, code) => httpClient.post(END_POINT + '/' + code, booking),
    deleteBooking: (code) => httpClient.get(END_POINT+'/'+code),
}
export {
    bookings
}