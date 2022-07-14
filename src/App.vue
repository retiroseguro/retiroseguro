<template>
  <div id="app">
    <Menu/>
    <router-view/>
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
  text-align: center;
  color: $blanco;
}

body {
  background-color: $primario;
}



</style>
