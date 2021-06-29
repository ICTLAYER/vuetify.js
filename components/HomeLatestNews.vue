<template>
  <vue-horizontal responsive>
    <section v-for="item in items" :key="item.title">
      <h3>{{ item.title }}</h3>
      <p>{{ item.content }}</p>
    </section>
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
