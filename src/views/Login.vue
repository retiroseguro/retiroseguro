<template>
  <div>
    <p class="p__run">Rut</p>
      <Input/>
    <p class="p__pass">Contraseña</p>
      <Input/>
      <Botones/>
    <div>
      <img class="img_bg__login" src="../assets/img/bg_login.svg" alt="bg">
    </div>
  </div>
</template>

<script>
import Input from '../components/Input.vue'
import Botones from '../components/Botones.vue'

export default {
name: "Login",
  components: {
    Input,
    Botones
  }
}
</script>

<style lang="scss">
@import "../assets/scss/tipografia.scss";

@media only screen and (min-width: 320px) {
.p__run {
    padding-top: 30px;
    font-family: $inter;
    font-size: 1rem;
}
.p__pass {
  padding-top: 20px;
  font-family: $inter;
  font-size: 16px;

}
button {
  margin-top: 40px;
}

.img_bg__login {
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
  .img_bg__login {
      width: 310px;
      opacity: 30%;
      filter: saturate(0.5);
      display: flex;
      margin-left: 68px;
      margin-top: -200px;
  }
}



</style>