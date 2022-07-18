<template>
    <main class="apoderado">
        <div class="apoderado__resumen">
            <div class="foto_perfil">
                <img src="@/assets/img/perfil_blanco.png" alt="foto_perfil">
            </div>
            <div class="info_ap">
                <p>Nombre: <span>Pedro Rojas Toledo</span></p>
                <p>RUT: <span>9.467.876-9</span></p> 
                <p>Dirección: <span>Los perales 2310</span></p> 
                <p>Teléfono: <span>+56 9 5784 7366</span></p> 
            </div>
        </div>
        <div class="resumen_est">
            <h5>Información Estudiante(s)</h5>
            <div class="barra_est">
                <p>Estudiante</p>
                <router-link to="/listaEstudiantes"><img class="icon_agregar" src="@/assets/img/agregar.png" alt="agregar"></router-link>
            </div>
            <div class="tarjeta_blanca">
                <div class="foto_perfil">
                    <img src="@/assets/img/perfil_blanco.png" alt="foto perfil">
                </div>
                <div class="info_est">
                    <p>Nombre: <span>Felipe Rojas Sotomayor</span></p>
                    <p>RUT: <span>22.543.032-6</span></p> 
                    <p>Curso: <span>8° B</span></p> 
                    <p>Profesor Jefe: <span>Mónica Soto</span></p> 
                </div>
                <div class="editar">
                    <router-link to="/estudiante/:id"><img src="@/assets/img/editar.png" alt="editar"></router-link>
                </div>
                <div class="link">
                    <router-link to="/estudiante/:id">Ver Perfil</router-link>
                </div>
            </div>
        </div>
        <div class="resumen_ret">
            <h5>Información Retirador(es)</h5>
            <div class="barra_ret">
                <p>Retirador</p>
                <router-link to="apoderado/agregaRetirador"><img class="icon_agregar" src="@/assets/img/agregar.png" alt="agregar"></router-link>
            </div>
            <div class="tarjeta_blanca">
                <div class="foto_perfil">
                    <img src="@/assets/img/perfil_blanco.png" alt="foto perfil">
                </div>
                <div class="info_est">
                    <p>Nombre: <span>Javier Rojas Toledo</span></p>
                    <p>RUT: <span>9.467.876--9</span></p> 
                    <p>Teléfono: <span>+56 9 5784 7366</span></p>
                </div>
                <div class="editar">
                    <router-link to="/retirador/:id"><img src="@/assets/img/editar.png" alt="editar"></router-link>
                </div>
                <div class="link">
                    <router-link to="/retirador/:id">Ver Perfil</router-link>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
@import "@/assets/scss/tipografia.scss";
@import "@/assets/scss/colores.scss";

p {
    font-family: $inter;
    margin: 0;
    text-align: left;
}
h5{
    color: $blanco;
    text-align: left;
}

.apoderado__resumen {
    padding-top: 2.5rem;
    padding-bottom: 1rem;
    color: $blanco;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.foto_perfil img {
    width: 12.5vh;
    height: 12.5vh;
    border-radius: 50%;
}
.info_ap p, .info_est p {
    font-weight: bold;
    font-size: small;
}
.info_ap span, .info_est span {
    font-size: small;
    font-weight: 200;
}
.icon_agregar {
    height: 1rem;
    padding-right: 0.3rem;
}
.resumen_est .resumen_ret {
    padding: 1rem;
}

.barra_est, .barra_ret{
    color: $blanco;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.tarjeta_blanca {
    position: relative;
    padding: 1rem;
    background-color: $blanco;
    color: $primario;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.editar img {
    z-index: 2;
    height: 1rem;
    width: 1rem;
    position: absolute;
    top : 0.3rem;
    right: 0.3rem;
}
.link {
    font-size: small;
    text-decoration: underline;
    position: absolute;
    bottom: 0.3rem;
    right: 0.3rem;
}
    
</style>