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
  data () {
    return {
      itemss: [],
      post_category: 20,
      pagination_start: 1,
      pagination_limit: 5
    }
  },
  computed: {
    items () {
      return this.$store.state.post_list_pagination
    }
  },
  created () {
    console.log('created')
    const pagintaionData = {
      limit: this.pagination_limit,
      start: this.pagination_start
    }
    this.$store.dispatch('getPostsPagination', pagintaionData)
    // const posts = this.$store.post_list

    // console.log(posts)
  },
  mounted () {
    console.log('mounted')
    const posts = this.$store.state.post_list_pagination
    this.itemss = posts
    // // console.log(posts)
  },
  methods: {
    pagination_clicked () {
      this.pagination_start = this.pagination_start + 5
      const pagintaionData = {
        limit: this.pagination_limit,
        start: this.pagination_start
      }
      this.$store.dispatch('getPostsPagination', pagintaionData)
    }
  }
}
</script>
