<template>
  <client-only>
    <swiper>
      <swiper-slide>
        Only loaded and rendered in browser (client)
      </swiper-slide>
    </swiper>
  </client-only>
</template>
<script>
import { directive } from 'vue-awesome-swiper'

export default {
  directives: {
    swiper: directive
  }
}
</script>
