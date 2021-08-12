<template>
  <v-row>
    <v-col cols="12" sm="12" md="12">
      <PropsComponent :title="items" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    items () {
      return this.$store.state.post_list
    }
  },
  created () {
    this.$store.dispatch('getPosts')
  }

}
</script>
