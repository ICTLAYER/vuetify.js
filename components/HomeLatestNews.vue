<template>
  <vue-horizontal responsive>
    <v-card
      v-for="item in items"
      :key="item.title"
      class="mx-auto"
      max-width="344"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">
            {{ item.title }}
          </div>
          <v-list-item-title class="text-h5 mb-1">
            {{ item.content }}
          </v-list-item-title>
          <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </vue-horizontal>
</template>

<script>
import VueHorizontal from 'vue-horizontal'

export default {
  components: { VueHorizontal },
  data () {
    return {
      // E.g: creates 20 array items...
      items: [...Array(20).keys()].map((i) => {
        return { title: `Item ${i}`, content: `🚀 Content ${i}` }
      })
    }
  }
}
</script>

<style scoped>
section {
  padding: 16px 24px;
  background: #460404;
}
</style>
