<template>
  <v-row>
    <v-col cols="12" sm="12" md="12">
      <span>{{ $t('Home') }}</span>
      <HomeCarousel />
    </v-col>
  </v-row>
</template>

<script>
import HomeCarousel from '~/components/HomeCarousel.vue'
export default {
  components: {
    HomeCarousel
  }
}
</script>
