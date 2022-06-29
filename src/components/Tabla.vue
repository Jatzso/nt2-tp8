<template>

<div>
 <table class="table" v-if="usuarios.length">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Edad</th>
      <th scope="col">Mail</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(usuario,index) in usuarios" :key="index">
      <td>{{ usuario.nombre }}</td>
      <td>{{ usuario.edad }}</td>
      <td>{{ usuario.mail }}</td>
    </tr>
  </tbody>
</table>
<h3 class="alert alert-warning mt-3" v-else>No hay usuarios disponibles</h3>
</div>
</template>

<script>

  export default  {
    name: 'src-components-tabla',
    props: [],
    mounted () {
      this.getUsuarios()
    },
    data () {
      return {
      
      }
    },
    methods: {
      getUsuarios(){
        this.$store.dispatch('obtenerUsuarios')
      }
    },
    computed: {
      usuarios(){
        let usuarios = this.$store.state.usuarios
        return usuarios
      }
    }
}


</script>

<style scoped lang="css">
  .src-components-tabla {

  }
</style>
