<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row dense>
      <v-col v-for="(item, i) in items" :key="i" cols="6" sm="3">
        <v-card hover :color="item.color" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <v-avatar class="ma-1" size="125" tile>
              <v-img :src="item.src" />
            </v-avatar>
            <div>
              <v-card-title class="headline" v-text="item.title" />
              <v-card-subtitle v-text="item.artist" />
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {

  data: () => ({
    items: [
      {
        color: '#952175',
        src: 'http://placekitten.com/200/200',
        title: 'Cat',
        artist: 'Smith'
      },
      {
        color: '#1F7087',
        src: 'http://placekitten.com/200/200',
        title: 'Cat',
        artist: 'James Smith'
      },
      {
        color: '#952175',
        src: 'http://placekitten.com/200/200',
        title: 'Cat',
        artist: 'James Smith'
      },
      {
        color: '#1F7087',
        src: 'http://placekitten.com/200/200',
        title: 'Cat',
        artist: 'James Smith'
      },
      {
        color: '#1F7087',
        src: 'http://placekitten.com/200/200',
        title: 'Cat',
        artist: 'James Smith'
      },
      {
        color: '#1F7087',
        src: 'http://placekitten.com/200/200',
        title: 'Cat',
        artist: 'James Smith'
      },
      {
        color: '#1F7087',
        src: 'http://placekitten.com/200/200',
        title: 'Cat',
        artist: 'James Smith'
      },
      {
        color: '#952175',
        src: 'http://placekitten.com/200/200',
        title: 'Cat',
        artist: 'James Smith'
      },
      {
        color: '#1F7087',
        src: 'http://placekitten.com/200/200',
        title: 'Cat',
        artist: 'James Smith'
      },
      {
        color: '#1F7087',
        src: 'http://placekitten.com/200/200',
        title: 'Cat',
        artist: 'James Smith'
      },
      {
        color: '#952175',
        src: 'http://placekitten.com/200/200',
        title: 'Cat',
        artist: 'James Smith'
      },
      {
        color: '#1F7087',
        src: 'http://placekitten.com/200/200',
        title: 'Cat',
        artist: 'James Smith'
      },
      {
        color: '#1F7087',
        src: 'http://placekitten.com/200/200',
        title: 'Cat',
        artist: 'James Smith'
      },
      {
        color: '#952175',
        src: 'http://placekitten.com/200/200',
        title: 'Cat',
        artist: 'Ellie Jones'
      }
    ]
  })
}
</script>
