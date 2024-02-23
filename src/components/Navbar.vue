


<template>
  <v-app-bar color="#588722">
    <div>
      <v-btn to="/" color="white" dark>Home </v-btn>
    </div>
    <div>
      <v-btn to="/services" color="white" dark>Services </v-btn>
    </div>
    <div>
      <v-btn to="/about" color="white" dark>About Us </v-btn>
    </div>
    <div>
        <v-btn to="/clients" color="white" dark>Clients</v-btn>

    </div>
    <div>
        <v-btn to="/contact" color="white" dark>ContactUs</v-btn>
    </div>
  </v-app-bar>
</template>
<script>
    import Home from './Homepage.vue'
    import Services from './Services.vue'
    import Clients from './Clients.vue'
    import About from './About.vue'
</script>
