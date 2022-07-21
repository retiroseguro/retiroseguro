<template>
    <div class="tarjeta_blanca">
        <div class="foto_perfil">
            <img :src="require(foto)" alt="foto perfil">
        </div>
        <div class="info">
            <p v-if="nombre" >Nombre: <span>{{nombre}}</span></p>
            <p v-if="rut" >RUT: <span>{{rut}}</span></p> 
            <p v-if="curso" >Curso: <span>{{curso}}</span></p> 
            <p v-if="profesor" >Profesor Jefe: <span>{{profesor}}</span></p>
            <p v-if="apoderado" >Apoderado: <span>{{apoderado}}</span></p>
            <p v-if="parentesco" >Teléfono: <span>{{telefono}}</span></p>
        </div>
        <div v-if="aEdit" class="editar">
            <router-link :to="aEdit"><img src="@/assets/img/editar.png" alt="editar"></router-link>
        </div>
        <div class="link">
            <router-link :to="aPerfil">Ver Perfil</router-link>
        </div>
    </div>
</template>
<script>

export default {
    name: 'Tarjeta',
    props: {
        nombre: String,
        rut: String,
        direccion: String,
        telefono: String,
        curso: String,
        profesor: String,
        apoderado: String,
        parentesco: String,
        foto: undefined,
        aEdit: String,
        aPerfil: String,
    },
    data() {
        return {
            // nombre: false,
            // rut: false,
            // direccion: false,
            // telefono: false,
            // curso: false,
            // profesor: false,
            // apoderado: false,
            // parentesco: false
        }
    },
    
    
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
.tarjeta_blanca {
    position: relative;
    padding: 1rem;
    background-color: $blanco;
    color: $primario;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.foto_perfil img {
    width: 12.5vh;
    height: 12.5vh;
    border-radius: 50%;
}
.info p {
    font-weight: bold;
    font-size: small;
}
.info span {
    font-size: small;
    font-weight: 200;
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