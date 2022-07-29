<template>
<div class="profesor">
        <div class="texto">Buscar por:</div>
        <br><br>
            <div class="ordenar">         
                <label><input type="radio" v-model="buscar" value="rut"> Rut</label>
                <br>
                <label><input type="radio" v-model="buscar" value="nombre"> Nombre</label>
                <br>
                <label><input type="radio" v-model="buscar" value="curso"> Curso</label>    
            </div>
            <div v-if="buscar == 'rut'">
                <input class="escribir" type="text" id="rut" name="rut" placeholder="xx.xxx.xxx-x">
            </div>
            <div v-if="buscar == 'nombre'">
                <input class="escribir" type="text" id="nombre" name="nombre" placeholder="Ingrese Nombre del Alumno">
            </div>
            <div v-if="buscar == 'curso'">
                <select class="escribir">
                    <option selected>Seleccione Curso</option>
                    <option value="1">Pre-Básica</option>
                    <option value="2">Básica</option>
                    <option value="3">Media</option>
                    </select>
            </div>

    <Boton texto="BUSCAR" class="mt-4"/>
</div>
</template>

<script>
import Input from "../components/Input.vue";
import Boton from "../components/Boton_md.vue";
export default {
    name:"Profesor",
    components:{
        Input,
        Boton,
    },
    data() {
        return {
            buscar: null
        }
    },
};


</script>

<style lang="scss">
@import "../assets/scss/colores.scss";
@import "../assets/scss/tipografia.scss";

    .texto{
        color:$blanco;
        font-family: $inter;
        font-size: 16px;    
    }
     .ordenar{
        justify-items: center;
        text-align: left;
        display:inline-block;
    }
    .profesor{

    }
    input[type="radio"]:after {
        width: 16px;
        height: 16px;
        border-radius: 16px;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: $blanco;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid $blanco;
    }

    input[type="radio"]:checked:after {
        width: 16px;
        height: 16px;
        border-radius: 16px;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: $verde;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid $blanco;
    }
    input.escribir, select.escribir {
        background: $blanco;
        border: 1px solid $secundario;
        border-radius: 10px 10px 10px 10px;
        color: $gris;
        font-size: 16px;
        padding: 5px;
        width:250px;
    }


</style>