<template>
  <div>
    <v-row>
      first install: npm i nuxt-jsonapi
      <br>
      then install: npm install fake-json-api-server
      <br>
      then create: server.js file with code
      <br>
      in nuxt.config.js file:
      <br>
      {
      <br>
      modules:
      <br>
      [
      // Simple usage
      'nuxt-jsonapi',
      <br>
      // With options
      <br>
      [
      'nuxt-jsonapi',
      <br>
      {
      <br>
      baseURL: 'http://www.example.com/api'
      <br>
      /* other module options */
      <br>
      }
      <br>
      ]
      <br>
      ]
      <br>
      }
    </v-row>
    <v-row>
      <ul>
        <li v-for="article in articles" :key="article.id">
          {{ article.body }}
        </li>
      </ul>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
    //   articles: []
    }
  },
  computed: {
    articles () {
      return this.$store.state.json_data_fetch.post_list
    }
  },
  created () {
    this.$store.dispatch('json_data_fetch/getPosts')
  }
//   async fetch () {
//     this.articles = await this.$axios
//       .get('http://localhost:3003/comments')
//       .then(articles => articles.data)
//     console.log(this.articles)
//   }
}
</script>
