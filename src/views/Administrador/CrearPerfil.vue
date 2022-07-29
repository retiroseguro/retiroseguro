<template>
<div>
    <div class="editarperfil">
        <div class="editar_cuenta">
            <h2>Cuenta Nueva</h2>
                <label class="edita_tipo_cuenta">Tipo de Cuenta:</label> <br>
                <select v-model="cuenta" class="escribir">
                    <option  value="1">Profesor</option>
                    <option  value="2">Apoderado</option>
                    <option  value="3">Alumno</option>
                </select>
        </div>

        <br>

    <form class="form">
    <div>
        <label for="nombre" class="form_label">Nombre</label> <br />
        <input 
            type="text" 
            id="nombre" 
            name="nombre" 
            placeholder="Nombre" />
    </div>

    <div>
        <label for="apellidoPaterno" class="">Apellido Paterno</label> <br />
        <input
            type="text"
            id="apellidoPaterno"
            name="apellidoPaterno"
            placeholder="Apellido Paterno"
        />
    </div>

    <div>
        <label for="apellidoMaterno" class="">Apellido Materno</label> <br />
        <input
            type="text"
            id="apellidoMaterno"
            name="apellidoMaterno"
            placeholder="Apellido Materno"
        />
    </div>

    <div v-if="cuenta != 1 ">
        <label class="">Rut</label> <br />
        <input 
            type="text" 
            id="rut" 
            name="rut" 
            placeholder="x.xxx.xxx-x" />
    </div>

    <div v-if="cuenta == 2">
        <label class="">Dirección</label> <br />
        <input
            type="text"
            name="direccion"
            id="direccion"
            placeholder="Dirección"
        />
    </div>

    <div v-if="cuenta == 2">
        <label class="">Telefono</label> <br />
        <input
            type="Number"
            name="fono"
            id="fono"
            placeholder="(+569)XXXXXXXX"
        />
    </div>

        <div class="curso_asignado" v-if="cuenta == 1">
            <label class="">Curso Asignado</label> <br>
        <select class="cursos_asignados">
                    <option  value="1">1°</option>
                    <option  value="2">3°B</option>
                    <option  value="3">4°A</option>
                </select>
        </div>

        <div class="curso_estudiante" v-if="cuenta == 3">
            <label class="">Curso</label> <br />
        <select class="curso">
                    <option  value="1">1°</option>
                    <option  value="2">3°B</option>
                    <option  value="3">4°A</option>
        </select>
        </div>

        <div class="lista_apoderados" v-if="cuenta == 3">
            <label class="">Apoderado</label> <br />
        <select class="apoderados">
                    <option  value="1">Camila Torres</option>
                    <option  value="2">Pablo Rojas</option>
                    <option  value="3">Claudia Correa</option>
                    <option  value="4">Marta Sanchez</option>
        </select>
        </div>

        <div class="lista_profesor_jefe" v-if="cuenta == 3">
            <label class="">Profesor Jefe</label> <br />
        <select class="profesor_jefe">
                    <option  value="1">Martia Elena</option>
                    <option  value="2">Carlos Correa</option>
                    <option  value="3">Soledad Fuentes</option>
                    <option  value="4">Carla Rojas</option>
        </select>
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
    data() { 
        return {
        cuenta: null,
        }
    }   
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
.editar_cuenta {
    text-align: center;
}
.curso_estudiante {
    margin-right: 14.1rem;
}
.lista_apoderados {
    margin-right: 8.7rem;


}
.lista_profesor_jefe {
    margin-right: 7.8rem;


}
.curso_asignado {
    margin-right: 10.8rem;
}
}
@media only screen and (min-width: 768px) {

}
</style>    
