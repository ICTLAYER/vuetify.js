<template>
  <v-row>
    <v-col cols="12" sm="12" md="12">
      <span>{{ $t('Home') }}</span>
      <HomeCarousel />
      <Swiper />
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
