<template>
  <div>
    <h2>Fire Base</h2>
    <v-btn color="success" class="mr-4" @click="submitForm">
      Insert
    </v-btn>
    <v-btn color="success" class="mr-4" @click="readFromFirestore">
      Read
    </v-btn>
    <v-btn color="success" class="mr-4" @click="asyncDataAllData">
      All Read
    </v-btn>
    <v-btn color="success" class="mr-4" @click="asyncDataWhereData">
      Where Read
    </v-btn>
    <v-btn color="success" class="mr-4" @click="asyncDataLimitData">
      Limit Read
    </v-btn>
    <div v-for="(list,index) in lists" :key="index">
      <p>{{ list.title }}</p>
    </div>
  </div>
</template>
<script>

export default {
  data: () => ({
    lists: []
  }),
  created () {
    // const data = this.$fire.firestore.collection('blog').doc()
    // const messageRef = this.$fire.firestore.collection('blog').doc('123')
    // try {
    //   const messageDoc = messageRef.get()
    //   alert(messageDoc.data().blog)
    // } catch (e) {
    //   alert(e)
    // }
  },
  methods: {
    submitForm () {
      try {
        this.$fire.firestore.collection('blog').doc().set({
          description: 'my_Description may last',
          title: 'my title last',
          date: new Date('August 26, 2021')
        })
      } catch (err) {
        console.log(err)
      }
    },
    async asyncDataAllData ({ app, error }) {
      const photosArr = []
      const docRef = await this.$fire.firestore.collection('blog')
      try {
        docRef.onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            photosArr.push(doc.data())
          })
        })
      } catch (e) {
        error({
          statusCode: 503,
          message: 'Unable to fetch posts at this time. Please try again.'
        })
      }
      console.log(photosArr)
    },

    async readFromFirestore () {
      const messageRef = this.$fire.firestore.collection('blog').doc('123') // single data
      try {
        const messageDoc = await messageRef.get()
        // alert(messageDoc.data().blog)
        console.log(messageDoc.data())
      } catch (e) {
        alert(e)
      }
    },
    async asyncDataWhereData () {
      const messageRef = this.$fire.firestore.collection('blog') // single data
      let toDay = '2021-08-26'
      toDay = toDay.split('-')
      const currentTimestamp = new Date(toDay[0], toDay[1] - 1, toDay[2]).getTime() / 1000
      console.log(currentTimestamp)

      try {
        const messageDoc = await messageRef.where('title', '==', 'my title').get()
        // alert(messageDoc.data().blog)
        messageDoc.forEach((doc) => {
          console.log(doc.data())
        })
        // console.log(messageDoc)
      } catch (e) {
        alert(e)
      }
    },
    async asyncDataLimitData () {
      const messageRef = this.$fire.firestore.collection('blog') // single data
      try {
        const messageDoc = await messageRef.limit(10).get()
        // alert(messageDoc.data().blog)
        messageDoc.forEach((doc) => {
          console.log(doc.data())
          this.lists.push(doc.data())
        })
        // console.log(messageDoc)
      } catch (e) {
        alert(e)
      }
    }
  }
}
</script>
