<template>
  <v-container fluid class="grey lighten-5">
    <v-row
      class="mb-6"
      justify="center"
      no-gutters
    >
      <v-col lg="2">
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <v-img
            contain
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="300"
            max-width="500"
            src="https://picsum.photos/id/11/500/300"
          />
        </v-card>
      </v-col>
      <v-col lg="8">
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <v-list three-line>
            <template v-for="(item, index) in items">
              <v-subheader
                v-if="item.header"
                :key="item.header"
                v-text="item.header"
              />
              <v-divider
                v-else-if="item.divider"
                :key="index"
                :inset="item.inset"
              />
              <v-list-item
                v-else
                :key="item.title"
              >
                <v-list-item-avatar
                  tile
                  size="75"
                >
                  <v-img class="rounded-lg" :src="item.avatar" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    <span class="text-uppercase font-weight-bold">
                      {{ item.title }}
                    </span>
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    <p class="font-weight-regular">
                      {{ item.subtitle }}
                    </p>
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-list-item-action-text v-text="item.action" />
                </v-list-item-action>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-col>
      <v-col lg="2">
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <v-img
            contain
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="300"
            max-width="500"
            src="https://picsum.photos/id/11/500/300"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      { header: 'Today / Post Category' },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle: 'll be in your neighborhood doing errands this weekend. Do you want to hang out? ll be in your neighborhood doing errands this weekend. Do you want to hang out? ll be in your neighborhood doing errands this weekend. Do you want to hang out?',
        action: '6 hr'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ',
        subtitle: 'To Alex, Scott, Jennifer Wish I could come, but I\'m out of town this weekend. To Alex, Scott, Jennifer Wish I could come, but I\'m out of town this weekend.',
        action: '15 min'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle: 'Do you have Paris recommendations? Have you ever been? Do you have Paris recommendations? Have you ever been?',
        action: '2 hr'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Birthday gift',
        subtitle: 'Have any ideas about what we should get Heidi for her birthday? Have any ideas about what we should get Heidi for her birthday?',
        action: '1 hr'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try',
        subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos. We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        action: '18hr'
      }
    ]
  })
}
</script>

<style>

</style>
