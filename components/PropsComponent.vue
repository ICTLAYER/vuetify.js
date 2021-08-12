<template>
  <div>
    <v-row v-for="(item_title,i) in title" :key="i">
      POST Title : {{ item_title.post_title }}
    </v-row>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
