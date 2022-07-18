<template>
  <div>
    <nav class="navbar bg-white">
      <a class="navbar-brand" href="#"><img src="../assets/img/logo.webp" alt="" width="60px" height="60px"></a>
      <div class="nav__icons">
      <router-link to="/Administrador"><img class="nav__icons_lupa" src="../assets/img/search.svg" alt="" width="20px" height="20px"></router-link>
      <router-link to="/apoderado/editar-perfil"><img class="nav__icons_perfil" src="../assets/img/user.svg" alt="" width="20px" height="20px"></router-link>
      <router-link to="/"><img class="nav__icons_loginout" src="../assets/img/log-out.svg" alt="" width="20px" height="20px"></router-link>
      </div>

      <div class="nav__links">
      <router-link to="/Administrador"><a href="" class="nav__links_buscar">Buscar</a></router-link>
      <router-link to="/administrador/editarapoderado"><a href="" class="nav__links_perfil">Perfil</a></router-link>
      <router-link to="/"><a href="">Cerrar sesión</a></router-link>
      
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
        color: white !important;
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
        margin-left: -55%;
  }

  .nav__links_perfil {
    margin-right: 25px;
  }

  .nav__icons_perfil {
    margin-top: 3px;
    margin-right: 10px;
  }
  .nav__icons_perfil {
    // display:none;
    display:block;
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