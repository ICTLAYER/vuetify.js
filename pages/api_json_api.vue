<template>
  <div>
    <v-row>
      first install: npm i json-server
      <br>
      then create: server.js file with code
      <br>
      in package.json file: "jsonapi": "json-server -p 3003 ./db.json",
      <br>
      run "npm run jsonapi" first... then on different console "npm run dev"
      <br>
    </v-row>
    <v-row>
      <ul>
        <li v-for="article in articles" :key="article.id">
          {{ article.body }}
        </li>
      </ul>
      <v-btn class="ml-2 mt-5" outlined rounded small @click="post_to_json()">
        POST To Json
      </v-btn>
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
  },
  methods: {
    post_to_json () {
      this.$axios.$post('http://localhost:3003/comments', { id: 16, body: 'some content 16', postId: 2 })
    }
  }
}
</script>
