<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row dense>
      <v-col v-for="(item, i) in items" :key="i" cols="6" sm="3">
        <v-card hover dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <v-avatar class="ma-1" size="125" tile>
              <v-img :src="item.post.post_featured_thumbnail_img" />
            </v-avatar>
            <div>
              <v-card-title class="headline" v-text="item.post.post_title" />
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  async asyncData ({ $axios }) {
    // const items = await $axios.$get('http://localhost:70/cmslayerv3/api/AllPost/getData/asdf1234/')
    const items = await $axios.$get('http://localhost:8080/api/allpost-api')
    return { items }
  }
}
</script>
