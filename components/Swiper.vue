<template>
  <div>
    <!-- component: only render Swiper on browser env -->
    <client-only>
      <swiper
        ref="carousel"

        :options="swiperOptions"
        @ready="onSwiperRedied"
        @clickSlide="onSwiperClickSlide"
        @slideChangeTransitionStart="onSwiperSlideChangeTransitionStart"
      >
        <swiper-slide v-for="index in 16" :key="index">
          <v-sheet
            :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
            class="pa-3"
          >
            <v-skeleton-loader
              class="mx-auto"
              max-width="300"
              type="card"
            />
            Akaash {{ index }}
          </v-sheet>
        </swiper-slide>
        <div slot="pagination" class="swiper-pagination" />
      </swiper>
    </client-only>
  </div>
</template>
<script>
export default {
  name: 'SwiperNuxt',
  inject: {
    theme: {
      default: { isDark: false }
    }
  },
  data () {
    return {
      swiperOptions: {
        loop: true,
        slidesPerView: '5',
        centeredSlides: true,
        spaceBetween: 10,
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: false
        }
      }
    }
  },
  methods: {
    onSwiperRedied (swiper) {
      console.log('Swiper redied!', swiper)
    },
    onSwiperSlideChangeTransitionStart () {
      console.log('SwiperSlideChangeTransitionStart!')
    },
    onSwiperClickSlide (index, reallyIndex) {
      console.log('Swiper click slide!', reallyIndex)
    }
  }
}
</script>
<style lang="scss" scoped>
.example {
  height: auto;
  .swiper {
    height: 300px;
    width: 100%;
    .swiper-slide {
      text-align: center;
      background-color: rgb(116, 109, 109);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .swiper-pagination {
      > .swiper-pagination-bullet {
        background-color: red;
      }
    }
  }
}
</style>
