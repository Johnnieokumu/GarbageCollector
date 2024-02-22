<template>
  <div id="services">
    <v-container>
      <v-layout column>
        <v-carousel>
          <v-carousel-item
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            cover
          ></v-carousel-item>
          <v-carousel-item src="" cover></v-carousel-item>
          <v-carousel-item src="" cover></v-carousel-item>
        </v-carousel>
      </v-layout>
      <v-layout>
        <v-container>
          <v-row align="center" justify="center">
            <div class="d-flex align-center flex-column">
              <v-card width="400">
                <v-card-item>
                  <v-card-title>Our Services</v-card-title>
                </v-card-item>
                <v-card-text>
                    <v-list
                    :items="items"
                    item-title="name"
                    item-value="id"
                  ></v-list>
                </v-card-text>
              </v-card>
            </div>
          </v-row>
        </v-container>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
    export default {
data() {
return { services:[
    {
        id: 1,
        serviceName: 'Residential Waste Collection',
    },
    {
        id: 2,
        serviceName: 'Commercial Waste Management',
    },
    {
        id: 3,
        serviceName: 'Industrial Waste Solutions',
    },
    {
        id: 4,
        serviceName: 'Recycling Programs',
    },
    {
        id: 5,
        serviceName: 'Bulk Item Removal',
    }
],
componentTitle: 'Services at Clean Up'
},
methods: {
increment() {
this.count++
}
},
mounted() {
console.log(this.services)
    }
}

</script>
