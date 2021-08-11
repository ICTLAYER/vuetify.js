<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row dense>
      <v-btn class="ml-2 mt-5" outlined rounded small>
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
      post_category: 23,
      pagination_start: 1,
      pagination_limit: 55
    }
  },
  computed: {
    items () {
      return this.$store.state.post_category.post_list
    }
  },
  created () {
    console.log('created')
    const pagintaionData = {
      limit: this.pagination_limit,
      start: this.pagination_start,
      parent_category: this.post_category
    }
    this.$store.dispatch('post_category/getPostsByCategoryChild', pagintaionData)
    // const posts = this.$store.post_list

    // console.log(posts)
  },
  methods: {
    pagination_clicked () {
      this.pagination_start = this.pagination_start + 5
      const pagintaionData = {
        limit: this.pagination_limit,
        start: this.pagination_start,
        parent_category: this.post_category
      }
      this.$store.dispatch('post_category/getPostsByCategoryChild', pagintaionData)
    }
  }
}
</script>
