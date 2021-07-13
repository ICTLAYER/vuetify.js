<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="12">
      <div class="text-center">
        <HomeCarousel />
        <Swiper />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import HomeCarousel from '~/components/HomeCarousel.vue'
import Swiper from '~/components/Swiper.vue'
export default {
  components: {
    HomeCarousel,
    Swiper
  }
}
</script>
