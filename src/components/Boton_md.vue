<template>
  <div>
    <button type="button" class="btn btn-fondo btn-lg">
        {{texto}}
    </button>
  </div>
</template>

<script>
export default {
    name:"Boton",
    props: {
        texto: String
    }
}
</script>

<style lang="scss">
@import "../assets/scss/colores.scss";
@import "../assets/scss/tipografia.scss";

.btn-fondo {
    background-color: $secundario;
}
.btn {
    color: $blanco;
    font-family: $inter;
}
.btn:hover{
  color: $blanco !important;
}
</style>