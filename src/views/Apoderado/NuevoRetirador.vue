<template>
<div class="nuevo_retirador">
    <h2>Actualizacion de datos personales</h2>

    <form class="form"> 
    <div>
        <label for="nombre" class="form_label">Nombre</label> <br />
        <input 
            type="text" 
            id="nombre" 
            name="nombre" 
            placeholder="Claudia" />
    </div>

    <div>
        <label for="apellidoPaterno" class="">Apellido Paterno</label> <br />
        <input
            type="text"
            id="apellidoPaterno"
            name="apellidoPaterno"
            placeholder="Sotomayor"
        />
    </div>

    <div>
        <label for="apellidoMaterno" class="">Apellido Marerno</label> <br />
        <input
            type="text"
            id="apellidoMaterno"
            name="apellidoMaterno"
            placeholder="Perez"
        />
    </div>

    <div>
        <label class="">Rut</label> <br />
        <input 
            type="text" 
            id="rut" 
            name="rut" 
            placeholder="9.303.870-K" />
    </div>

    <div>
        <label class="">Estudiante</label> <br />
        <input
            type="text"
            name="estudiante"
            id="estudiante"
            placeholder="Felipe Rojas Sotomayor"
        />
    </div>

    <div>
        <label class="">Telefono</label> <br />
        <input
            type="Number"
            name="fono"
            id="fono"
            placeholder="(+56)997423008"
        />
    </div>
<br>
    <div>
        <p>SUBIR FOTO</p>
    </div>

    <div class="edit_boton">
        <router-link to="/Apoderado"><Boton texto="REGISTRAR" /></router-link>
    </div>

    
    </form>
</div>
</template>

<script>
import Boton from "../../components/Boton_md.vue";

export default {
name: "NuevoRetirador",
components: {
    Boton,
    },
};
</script>

<style lang="scss">
@media only screen and (min-width: 320px) {
form {
    display: flex;
    flex-direction: column;
    align-items: center;
}
label {
    font-size: 14px;
    margin-top: 8px;
}
input {
    border-radius: 8px;
    border: 1px;
    padding: 8px;
    width: 280px;
    font-size: 12px;
}
.edit_boton {
    margin-top: 40px;
}
}
@media only screen and (min-width: 768px) {

}
</style>    
