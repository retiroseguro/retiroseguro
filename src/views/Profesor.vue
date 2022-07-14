<template>
<div class="container">
    <center> 
        <div class="texto">Buscar por:</div>
        <br><br>
        <div class="ordenar">
            <div class="custom-control custom-radio">
                <input id="nombre" Type="radio" class="custom-control-input muestraOculta" name="datos" checked="checked">
                <label for="nombre" class="custom-control-label texto">Nombre del Alumno</label>
            </div>
            <div class="custom-control custom-radio">
                <input id="rut" Type="radio" class="custom-control-input muestraOculta" name="datos">
                <label for="rut" class="custom-control-label texto">Rut</label>
            </div>
            <div class="custom-control custom-radio">
                <input  id="curso" Type="radio" class="custom-control-input muestraOculta" name="datos">
                <label for="curso" class="custom-control-label texto">Curso</label>
            </div>
        </div>
        <br><br>
    
        <div id="mostrarnombre" class="muestraDiv"><input type="text" placeholder="Ingrese Nombre del Alumno" size="30"></div>
        <div id="mostrarrut" class="muestraDiv"><input type="text" placeholder="Ingrese Rut del Alumno" size="30"></div>
        <div id="mostrarcurso" class="muestraDiv">
            <select class="form-select form-select-sm" aria-label=".form-select-sm example" style="width:255px">
                <option selected>Seleccione el curso</option>
                <option value="1">1°A</option>
                <option value="2">2°B</option>
                <option value="3">Three</option>
              </select>            
        </div>
    </center>
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