<template>
  <div class="login">
    <p class="login__p_run">Rut</p>
      <input type="text" id="rut" name="rut" placeholder="11.222.333-4">
    <p class="login__p_pass">Contraseña</p>
      <input type="password" placeholder="xxxxxx">
      <div class="login__botones_posicion">
        <router-link to="/Apoderado"><boton texto="INGRESAR"/></router-link>
      </div>
      
    <div>
      <img class="login__img_bg" src="../assets/img/bg_login.svg" alt="bg">
    </div>
  </div>
</template>

<script>
import Input from '../components/Input.vue'
import Boton from '@/components/Boton_md.vue'

export default {
name: "Login",
  components: {
    Input,
    Boton
  }
}
</script>

<style lang="scss">
@import "../assets/scss/tipografia.scss";

@media only screen and (min-width: 320px) {

.login {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.login__p_run {
    padding-top: 30px;
    font-family: $inter;
    font-size: 1rem;
}
.login__p_pass {
  padding-top: 20px;
  font-family: $inter;
  font-size: 16px;

}
.login__botones_posicion {
  margin-top: 40px;
}

.login__img_bg {
    padding: 17px;
    width: 280px;
    opacity: 30%;
    filter: saturate(0.5);
}

}

@media only screen and (min-width: 768px) {
.img_bg__login {
  padding: 17px;
    width: 280px;
    opacity: 30%;
    filter: saturate(0.5);
}


}
@media only screen and (min-width: 992px) {
  .login__img_bg {
      width: 310px;
      opacity: 30%;
      filter: saturate(0.5);
      display: flex;
      margin-left: -12px;
      margin-top: 6px;
  }
}



</style>