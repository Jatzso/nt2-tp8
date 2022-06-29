<template>

  <div class="container">
    <vue-form :state="formState" @submit.prevent="enviar()">
      
      <validate>
        <label class="mt-3" for="nombre">Nombre:</label>
        <input
        class="form-control" 
        type="text" 
        name="nombre" 
        v-model="formData.nombre" 
        :maxlength="15"
        :minlength="3"
        required>
        <field-messages name="nombre" show="$dirty">
          <div class="alert alert-danger mt-3" slot="required">Campo requerido</div>
          <div class="alert alert-danger mt-3" slot="maxlength">Máximo caracteres 15</div>
          <div class="alert alert-danger mt-3" slot="minlength">Mínimo caracteres 3</div>
        </field-messages>
      </validate>

      <validate>
        <label class="my-3" for="edad">Edad:</label>
        <input 
        class="form-control"
        type="number" 
        name="edad"
        v-model="formData.edad" 
        :min="18"
        :max="120"
        required>
        <field-messages name="edad" show="$dirty">
          <div class="alert alert-danger mt-3" slot="required">Campo requerido</div>
          <div class="alert alert-danger mt-3" slot="min">Edad minima 18</div>
          <div class="alert alert-danger mt-3" slot="max">Edad maxima 120</div>
        </field-messages>
      </validate>

      <validate>
        <label class="mt-3" for="mail">Mail:</label>
        <input 
        class="form-control"
        type="email" 
        name="mail" 
        v-model="formData.mail" 
        required>
        <field-messages name="mail" show="$dirty">
          <div class="alert alert-danger mt-3" slot="required">Campo requerido</div>
          <div class="alert alert-danger mt-3" slot="email">Formato inválido</div>
        </field-messages>
      </validate>

      <button class="btn btn-success mt-3" :disabled="formState.$invalid">Enviar</button>
    </vue-form>
  </div>

</template>

<script>

  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState: {},
        formData: this.getInitialData(),
      }
    },
    methods: {
      getInitialData(){
        return{
          nombre:null,
          edad: null,
          mail: null
        }
      },
      enviar(){
        console.log(JSON.stringify(this.formData))
        this.postUsuario()
        this.formData = this.getInitialData()
        this.formState._reset()
      },
       postUsuario(){
        let nuevoUsuario = {
          nombre : this.formData.nombre,
          edad : this.formData.edad,
          mail : this.formData.mail
        }
        this.$store.dispatch('enviarNuevoUsuario', nuevoUsuario)
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-formulario {

  }
</style>
