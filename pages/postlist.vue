<template>
  <v-row dense>
    <v-col cols="12">
      <v-card
        v-for="(title, index) in titles"
        :key="index"
        class="mb-2"
        hover
      >
        <v-img
          v-if="title.mini_thumbs_featured_image_url"
          loading="lazy"
          :src="''+title.mini_thumbs_featured_image_url"
          height="500px"
        />
        <v-card-title class="text-h5">
          {{ title.post_title }}
        </v-card-title>

        <v-card-subtitle>{{ title.short_desc }}</v-card-subtitle>
      </v-card>
      <!--Add here the vuetify directive -->
      <v-card
        v-intersect="infiniteScrolling"
      />
    </v-col>
  </v-row>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Posts',
  data () {
    return {
      titles: [],
      page: 1
    }
  },
  computed: {
    url () {
      return 'https://bengalnews.cmslayer.com/api/AllPost/getData/asdf1234/' + this.page
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      const response = await axios.get(this.url)
      this.titles = response.data
    },
    infiniteScrolling (entries, observer, isIntersecting) {
      setTimeout(() => {
        this.page++
        axios
          .get(this.url)
          .then((response) => {
            if (response.data.length > 1) {
              response.data.forEach(item => this.titles.push(item))
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
