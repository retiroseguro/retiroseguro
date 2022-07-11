<template>
    <div>
        <div class="resumen_ap">
            <div class="imagen_ap">
                <img src="../assets/img/perfil_blanco.png" alt="foto_perfil">
            </div>
            <div class="info_ap">
                <p>Nombre: <span>Pedro Rojas Toledo</span></p>
                <p>RUT: <span>9.467.876-9</span></p> 
                <p>Dirección: <span>Los perales 2310</span></p> 
                <p>Teléfono: <span>+56 9 5784 7366</span></p> 
            </div>
        </div>
        <div class="resumen_est">
            <p>Información Estudiante(s)</p>
            <div class="barra_est">
                <p>Estudiante</p>
                <img class="icon_agregar" src="../assets/img/agregar.png" alt="agregar">
            </div>
            <div class="resumen_ap2 bg-light">
                <div class="imagen_ap">
                    <img src="../assets/img/perfil_blanco.png" alt="foto_perfil">
                </div>
                <div class="info_ap2">
                    <p>Nombre: <span>Pedro Rojas Toledo</span></p>
                    <p>RUT: <span>9.467.876-9</span></p> 
                    <p>Dirección: <span>Los perales 2310</span></p> 
                    <p>Teléfono: <span>+56 9 5784 7366</span></p> 
                </div>
            </div>
        </div>
        <div class="resumen_ret">
            <p>Información Retirador(es)</p>
            <div class="barra_ret">
                <p>Retirador</p>
                <img class="icon_agregar" src="../assets/img/agregar.png" alt="agregar">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
@import "../assets/scss/tipografia.scss";
@import "../assets/scss/colores.scss";

p {
    font-family: $inter;
    color: $blanco;
    margin: 0;
    text-align: left;
}

.resumen_ap {
    padding-top: 2.5rem;
    display: flex;
    align-items: center;
}
.imagen_ap {
    padding: 0.5rem 1rem 0.5rem 2rem;
}
.imagen_ap img {
    width: 12.5vh;
    height: 12.5vh;
    border-radius: 50%;
}
.info_ap p {
    font-weight: bold;
    font-size: small;
}
.info_ap span {
    color: $blanco;
    font-size: small;
    font-weight: 200;
}
.icon_agregar {
    height: 1rem;
}
.resumen_est .resumen_ret {
    padding: 1rem;
}

.barra_est, .barra_ret{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
    
</style>