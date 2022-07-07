<template>
<div id="footer">
<p id="sigla">RSE</p> 
</div>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style lang="scss">
@import "../assets/scss/tipografia.scss";
@import "../assets/scss/colores.scss";

#footer {
    font-family: $inter;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $blanco;
    text-align: center;
    height: 5.625vh;
    width: 100vw;
    position: fixed;
    bottom: 0em;
    background-color: $rse;
}
#sigla{
    margin: 0;
}
</style>