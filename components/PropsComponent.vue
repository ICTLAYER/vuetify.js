<template>
  <v-row>
    <v-col cols="12" sm="12" md="12">
      Title : {{ title }}
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    }
  }
}
</script>
