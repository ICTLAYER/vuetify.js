<template>
  <div>
    <h2>Fire Base</h2>
    <v-btn color="success" class="mr-4" @click="submitForm">
      Submit
    </v-btn>
  </div>
</template>
<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
export default {
  methods: {
    submitForm () {
      firebase.firestore.collection('blog').doc().set({
        title: 'okkk',
        description: 'efregerg'
      })
    }
  }
}
</script>
