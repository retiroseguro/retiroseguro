<template>
  <div>
    <main class="admin">
      <p>Buscar apoderado</p>
      <Input />
      <router-link to="/Apoderado"><Botones class="mt-4"/></router-link>
    </main>
  </div>
</template>
<script>
import Input from "../../components/Input.vue";
import Botones from "../../components/Botones.vue";
export default {
  name: "Admin",
  components: {
    Input,
    Botones,
  },
};
</script>
<style lang="scss">
.admin {
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>