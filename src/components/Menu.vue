<template>
  <div>
    <nav class="navbar bg-white">
      <a class="navbar-brand" href="#"><img src="../assets/img/logo.webp" alt="" width="60px" height="60px"></a>
      <div class="nav__icons">
      <img class="nav__icons_lupa" src="../assets/img/buscar.png" alt="" width="20px" height="20px">
      <img class="nav__icons_perfil" src="../assets/img/perfil.png" alt="" width="20px" height="20px"> 
      <img src="../assets/img/login_out.png" alt="" width="20px" height="20px">
      </div>

      <div class="nav__links">
        <a href="" class="nav__links_buscar">Buscar</a>
        <a href="Apoderado">Perfil</a>
        <a href="">Cerrar sesión</a>
      
      </div>
    </nav>

  </div>
       
 
</template>

<script>
export default {
name: "Menu"
}
</script>

<style lang="scss">
@import "../assets/scss/tipografia.scss";
nav {
  padding: 30px;
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav__icons {
    display: flex;
    justify-content: space-between;
  }
  .nav__icons_lupa{
        margin-left: -40%;
  }

  .nav__links {
    display: flex;
    justify-content: space-between;
    
    a {
      font-family: $inter;
      font-size: 1rem;
    }
  }

  .nav__links_buscar{
        margin-left: -20%;
  }

  .nav__icons_perfil {
    display:none;
    // display:block (aparece en vista de apoderado y estudiante)
  }

  @media only screen and (min-width: 320px) {
    .nav__links {
       display: none
    }
  }
  @media only screen and (min-width: 768px) {
    .nav__links {
       display: flex;
    }
    .nav__icons {
      display: none
    }
  }

  @media only screen and (min-width: 992px) {
    .nav__icons {
      display: none
    }
  }

}
</style>