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
  // text-align: center;
  color: $blanco;
  padding-bottom: 2.5rem;
    min-height: calc(100% - 2.5rem);
    position: relative;
}
html {
  min-height: 100%;
  position: relative;
}
body {
  background-color: $primario;
  margin: 0;
}



</style>
