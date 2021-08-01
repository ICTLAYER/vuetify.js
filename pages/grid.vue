<template>
  <v-container fluid class="red lighten-2">
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="8"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <HomeCarousel />
        </v-card>
      </v-col>
      <v-col
        cols="6"
        md="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <HomeCarousel />
        </v-card>
      </v-col>
    </v-row>
    <v-row
      justify="center"
    >
      <v-col lg="2">
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <HomeCarousel />
        </v-card>
      </v-col>
      <v-col lg="2">
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <HomeCarousel />
        </v-card>
      </v-col>
      <v-col lg="2">
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <HomeCarousel />
        </v-card>
      </v-col>
      <v-col lg="2">
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <HomeCarousel />
        </v-card>
      </v-col>
      <v-col lg="2">
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <HomeCarousel />
        </v-card>
      </v-col>
      <v-col lg="2">
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <HomeCarousel />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import HomeCarousel from '~/components/HomeCarousel.vue'
export default {
  components: {
    HomeCarousel
  }
}
</script>
