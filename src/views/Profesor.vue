<template>
<div class="container">
        <div class="texto">Buscar por:</div>
        <br><br>

            <div>
            <label><input type="radio" v-model="buscar" value="rut"> rut</label>
            <label><input type="radio" v-model="buscar" value="nombre"> nombre</label>
            <label><input type="radio" v-model="buscar" value="curso"> curso</label>
            </div>
            <div v-if="buscar == 'rut'">
                <input type="text" id="rut" name="rut" placeholder="11.222.333-4">
            </div>
            <div v-if="buscar == 'nombre'">
                <input type="text" id="nombre" name="nombre" placeholder="Ingresa Nombre">
            </div>
            <div v-if="buscar == 'curso'">
            curso
            </div>
    <Botones class="mt-4"/>

</div>
</template>

<script>
import Input from "../components/Input.vue";
import Botones from "../components/Botones.vue";
export default {
    name:"Profesor",
    components:{
        Input,
        Botones,
    },
    data() {
        return {
            buscar: null
        }
    },
};

// function clearSelection(current) {        
//         var allInputs = document.getElementsByTagName("input");
//         for (var a = 0; a < allInputs.length; a++) {
//           if (allInputs[a].type == 'radio' && allInputs[a].className == 'muestraOculta') {
//             allInputs[a].checked = false;
//           }
//         }
  
//         document.getElementById(current).checked = true;
//       }
  
//       function mostrarDiv(divId, radioId) {
//           var allDivs = document.getElementsByTagName("div");
//           for (var a = 0; a < allDivs.length; a++) {
//             if (allDivs[a].className == 'muestraDiv') {
//               allDivs[a].style.display = 'none';
//             }
//           }
  
//           document.getElementById(divId).style.display = 'block';
//           clearSelection(radioId);
//       }  
  
//       mostrarDiv('mostrarrut', 'rut');

</script>

<style lang="scss">
@import "../assets/scss/colores.scss";
@import "../assets/scss/tipografia.scss";

// input[type='radio']:checked:after {
//         width: 10px;
//         height: 10px;
//         border-radius: 10px;
//         position: relative;
//         background-color: rgb(141, 228, 11) !important;
//         content: '';
//         display: inline-block;
//         visibility: visible;
//         border: 2px solid white;
//     }

    .texto{
        color:$blanco;
        font-family: $inter;
        font-size: 16px;    
    }
    .ordenar{
        justify-items: center;
        text-align: left;
        display:inline-block;
        color:$blanco;
    }
    .container{
        padding-top: 20px;
    }

</style>