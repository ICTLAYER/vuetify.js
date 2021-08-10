<template>
  <v-container
    class="fill-height"
    fluid
    style="min-height: 434px"
  >
    <v-fade-transition mode="out-in">
      <v-row dense>
        <v-col
          v-for="(post, index) in postdatas"
          :key="index"
          cols="6"
          sm="4"
        >
          <v-card hover>
            <v-img
              v-if="post.mini_thumbs_featured_image_url"
              loading="lazy"
              lazy-src="/bn.webp"
              :src="''+post.mini_thumbs_featured_image_url"
              :alt="''+post.post_title"
              :title="''+post.post_title"
              max-height="228"
              contain
              class="grey lighten-4 text--secondary align-end"
            >
              <v-card-title class="font-weight-light">
                {{ post.category_name }}
              </v-card-title>
            </v-img>
            <v-img
              v-else
              lazy-src="/bn.webp"
              loading="lazy"
              src="/bn.webp"
              :alt="''+post.post_title"
              :title="''+post.post_title"
              max-height="228"
              contain
              class="grey lighten-4 text--secondary align-end"
            >
              <v-card-title class="font-weight-light">
                {{ post.category_name }}
              </v-card-title>
            </v-img>
            <v-card-text
              v-if="$i18n.locale == 'en'"
              :to="switchLocalePath('en')"
              class="font-weight-bold"
            >
              {{ post.post_title }}
            </v-card-text>
            <v-card-text
              v-else-if="$i18n.locale == 'bn'"
              :to="switchLocalePath('bn')"
              class="text-overline font-weight-bold"
            >
              {{ post.post_title_other_lang }}
            </v-card-text>
          </v-card>
        </v-col>
        <!--Add here the vuetify directive -->
        <v-col v-intersect="infiniteScrolling" />
      </v-row>
    </v-fade-transition>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Posts',
  data () {
    return {
      postdatas: [],
      page: 1
    }
  },
  computed: {
    url () {
      // return 'https://bengalnews.cmslayer.com/api/AllPost/getData/asdf1234/' + this.page
      return 'http://localhost:70/cmslayerv3/api/AllPost/getData/asdf1234/' + this.page
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      const response = await axios.get(this.url)
      this.postdatas = response.data
    },
    infiniteScrolling (entries, observer, isIntersecting) {
      setTimeout(() => {
        this.page++
        axios
          .get(this.url)
          .then((response) => {
            if (response.data.length > 1) {
              response.data.forEach(item => this.postdatas.push(item))
            }
          })
          .catch((err) => {
            // eslint-disable-next-line no-console
            console.log(err)
          })
      }, 500)
    }
  }
}
</script>
