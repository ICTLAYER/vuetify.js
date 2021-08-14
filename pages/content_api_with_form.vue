<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="postTitle"
            :rules="nameRules"
            :counter="10"
            label="Post title"
            required
          />
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="postDescription"
            :rules="nameRules"
            :counter="10"
            label="Post Description"
            required
          />
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          />
        </v-col>
      </v-row>
    </v-container>
    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="submitForm"
    >
      Submit
    </v-btn>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    valid: false,
    postTitle: '',
    postDescription: '',
    nameRules: [
      v => !!v || 'required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  }),
  created () {
    this.$store.dispatch('json_data_fetch/getPosts')
  },
  methods: {
    submitForm () {
      const posts = {
        id: 424,
        title: this.postTitle,
        description: this.postDescription,
        email: this.email
      }
      this.$axios.$post('http://localhost:3003/posts', posts)
    }
  }
}
</script>
