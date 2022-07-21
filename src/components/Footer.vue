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
    height: 2.5rem;
    width: 100%;
    background-color: $rse;
    position: absolute;
    bottom: 0;
}
#sigla{
    margin: 0;
    padding: 0;
}
</style>