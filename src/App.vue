<template>
  <div id="app">
    <Menu/>
    <div class="container_views">
    <router-view/>
    </div>

    <Footer/>
  </div>
</template>

<script>

import Footer from './components/Footer.vue';
import Menu from './components/Menu.vue';

export default {
  name: "App", 
  components:{
    Menu,
    Footer,

  },
}
</script>


<style lang="scss">
@import "./assets/scss/tipografia.scss";
@import "./assets/scss/colores.scss";

#app {
  font-family: $inter;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: $blanco;
}

body {
  background-color: $primario;
}
.container_views {
  padding: 2rem;
}



</style>
