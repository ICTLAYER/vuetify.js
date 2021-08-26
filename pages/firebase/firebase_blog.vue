<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row dense>
      <v-col v-for="(item, i) in items" :key="i" cols="6" sm="3">
        <v-card hover dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <v-avatar class="ma-1" size="125" tile>
              <!-- <v-img :src="item.src" /> -->
            </v-avatar>
            <div>
              <v-card-title class="headline" v-text="item.title" />
              <!-- <v-card-subtitle v-text="item.artist" /> -->
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  async asyncData ({ $fire }) {
    const items = []
    const messageRef = await $fire.firestore.collection('blog') // single data
    try {
      const messageDoc = await messageRef.limit(10).get()
      // alert(messageDoc.data().blog)
      messageDoc.forEach((doc) => {
        console.log(doc.data())
        items.push(doc.data())
      })
      // console.log(messageDoc)
    } catch (e) {
      alert(e)
    }
    return { items }
  }
}
</script>
