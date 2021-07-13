<template>
  <vue-horizontal responsive>
    <v-card v-for="item in items" :key="item.title">
      <v-list-item three-line>
        <v-list-item-content>
          <div>
            {{ item.title }}
          </div>
          <v-list-item-title>
            {{ item.content }}
          </v-list-item-title>
          <v-list-item-subtitle>
            Greyhound divisely hello coldly fonwderfully
          </v-list-item-subtitle>
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
