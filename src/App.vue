<template>
  <div id="app">
    <Menu/>
    <router-view/>
    <Botones/>
    <Footer/>
  </div>
</template>

<script>

import Footer from './components/Footer.vue';
import Menu from './components/Menu.vue';
import Botones from './components/Botones.vue';

export default {
  name: "App", 
  components:{
    Menu,
    Footer,
    Botones,
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
  color: #2c3e50;
}

body {
  background-color: $primario;
}



</style>
