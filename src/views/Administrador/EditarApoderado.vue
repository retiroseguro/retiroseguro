<template>
<div>
    <div class="editarperfil">
    <h2>Actualizacion de datos personales</h2>

    <form class="form">
    <div>
        <label for="nombre" class="form_label">Nombre</label> <br />
        <input 
            type="text" 
            id="nombre" 
            name="nombre" 
            placeholder="Pedro" />
    </div>

    <div>
        <label for="apellidoPaterno" class="">Apellido Paterno</label> <br />
        <input
            type="text"
            id="apellidoPaterno"
            name="apellidoPaterno"
            placeholder="Rojas"
        />
    </div>

    <div>
        <label for="apellidoMaterno" class="">Apellido Marerno</label> <br />
        <input
            type="text"
            id="apellidoMaterno"
            name="apellidoMaterno"
            placeholder="Toledo"
        />
    </div>

    <div>
        <label class="">Rut</label> <br />
        <input 
            type="text" 
            id="rut" 
            name="rut" 
            placeholder="9.467.876-9" />
    </div>

    <div>
        <label class="">Dirección</label> <br />
        <input
            type="text"
            name="direccion"
            id="direccion"
            placeholder="Los perales 2310"
        />
    </div>

    <div>
        <label class="">Telefono</label> <br />
        <input
            type="Number"
            name="fono"
            id="fono"
            placeholder="(+56)957847366"
        />
    </div>

    <div class="edit_boton">
        <router-link to="/Apoderado"><Boton texto="REGISTRAR"/></router-link>
    </div>

    
    </form>
</div>
</div>
</template>

<script>
import Boton from "../../components/Boton_md.vue";

export default {
name: "EditarPerfil",
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
