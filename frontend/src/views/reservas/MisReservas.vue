<template>
  <div class="bookings">
    <!--<v-btn color="primary" to="/products/new">New product</v-btn>-->
    <v-container>

      <v-row>
        <v-col
            v-for="booking in bookings"
            :key="booking.code"
            md="4"
            sm="6"
            cols="12"
        >
          <BookingCard :item="booking"></BookingCard>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {bookings} from "../../controllers/Bookings.controller";
import BookingCard from "../../components/BookingCards.vue";

export default {
  props:["item"],
  name: "MisReservas",
  components: {
    BookingCard,
  },
  data(){
    return {
      bookings: [],
    };
  },
 
  created() {
    bookings.getAllBookings() 
        .then((response) => {
          this.bookings = response.data;
        })
        .catch((err) => console.error(err));
  }
}

</script>

<style>
* {
  font-family: "Roboto";
}
.titles {
  color: #fa6f41;
  text-align: center;
  font-size: 48px;
}
.subtitles {
  color: #1c1724;
  text-align: center;
  font-size: 32px;
}
</style>