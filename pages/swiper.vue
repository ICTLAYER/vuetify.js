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
    <!-- directive: render origin html on server & render Swiper on browser -->
    <div>
      <p>Hello</p>
    </div>
    <!-- You can get the swiper instance object in current component context by the name: "mySwiper"  -->
    <div
      v-swiper:myDirectiveSwiper="swiperOptions"
      @ready="onSwiperRedied"
      @click-slide="onSwiperClickSlide"
      @slide-change-transition-start="onSwiperSlideChangeTransitionStart"
    >
      <div class="swiper-wrapper">
        <div v-for="index in 16" :key="index" class="swiper-slide">
          <span>
            <v-card
              class="mx-auto"
              max-width="400"
            >
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img>
              <v-card-subtitle class="pb-0">
                Gagan {{ index }}
              </v-card-subtitle>
              <v-card-text class="text--primary">
                <div>Whitehaven Beach</div>
                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>
            </v-card>
          </span>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-bullets" />
    </div>
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
        loop: false,
        slidesPerView: '4.1',
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
