import Vue from 'vue'
import InfiniteLoading from 'vue-infinite-loading'

Vue.use(InfiniteLoading, {
  props: {
    spinner: 'default'
    /* other props need to configure */
  },
  system: {
    throttleLimit: 50
    /* other settings need to configure */
  }
})
