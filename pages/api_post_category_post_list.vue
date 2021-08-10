<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row dense>
      <v-btn class="ml-2 mt-5" outlined rounded small @click="api_call()">
        START RADIO
      </v-btn>
      <v-col v-for="(item, i) in items" :key="i" cols="6" sm="3">
        <v-card hover dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline" v-text="item.post_title" />
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <div class="text-center">
      <v-pagination
        :length="6"
        @input="pagination_clicked()"
      />
    </div>
  </v-container>
</template>
<script>
export default {
  async asyncData ({ $axios }) {
    const items = await $axios.$get('http://localhost:8080/api/post-category-api-child-chain-post-list/20/5/1')
    console.log(items)

    return { items }
  },
  data () {
    return {
      items: [],
      post_category: 20,
      pagination_start: 1,
      pagination_limit: 5
    }
  },
  methods: {
    api_call () {
      this.$axios.setHeader('X-API-KEY', '12345') // example how to pass headers
      this.$axios.$post('http://localhost:8080/api/Test_bengal_api_c', { post_data: 1234 }).then(res => console.log(res))// example for post request...
    },
    async pagination_clicked () {
      this.pagination_start = this.pagination_start + 5
      const res = await this.$axios.$get(`http://localhost:8080/api/post-category-api-child-chain-post-list/${this.post_category}/${this.pagination_limit}/${this.pagination_start}`)
      this.items = []
      this.items = res
    }
  }
}
</script>
