<template>

  <section class="src-components-form">
    
    <form novalidate autocomplete="off" class="p-3 mt-3 text-left" @submit.prevent="enviar()">
      <div class="form-group  col-4">
          <label for="nombre">Nombre</label>
          <input 
            type="text"
            id="nombre"
            class="form-control"
            v-model="$v.f.nombre.$model"
          >
          <div v-if="$v.f.nombre.$error && $v.f.nombre.$dirty" class="alert alert-danger mt-1">
            <div v-if="$v.f.nombre.required.$invalid">Este campo es requerido</div>
            <div v-if="$v.f.nombre.minLength.$invalid">Este campo debe tener al menos {{$v.f.nombre.minLength.$params.min}} caracteres</div>
            <div v-if="$v.f.nombre.maxLength.$invalid">Este campo debe tener máximo {{$v.f.nombre.maxLength.$params.max}} caracteres</div>
          </div>
      </div>
      <div class="form-group  col-4">
                <label for="edad">Edad</label>
                <input 
                    type="number"
                    id="edad"
                    class="form-control"
                    v-model="$v.f.edad.$model"
                >
                <div v-if="$v.f.edad.$error && $v.f.edad.$dirty" class="alert alert-danger mt-1">
                    <div v-if="$v.f.edad.required.$invalid">Este campo es requerido</div>
                    <div v-else-if="$v.f.edad.between.$invalid">La edad debe estar entre los 18 y los 120 años</div>
                </div>
          </div>
          <div class="form-group col-4">
                <label for="email">Email</label>
                <input 
                    type="email"
                    id="email"
                    class="form-control"
                    v-model="$v.f.email.$model"
                >
                <div v-if="$v.f.email.$error && $v.f.email.$dirty" class="alert alert-danger mt-1">
                    <div v-if="$v.f.email.required.$invalid">Este campo es requerido</div>
                    <div v-if="$v.f.email.email.$invalid">Debe proveer un email válido</div>
                </div>
          </div>
          <div class="form-group col-4">
                <input 
                    type="submit"
                    :disabled="false"
                    class="btn btn-info mt-4"
                    value="Enviar"
                >
          </div>
     
    </form>
  </section>

</template>

<script>
  import { required, minLength, between, maxLength, email } from '@vuelidate/validators'

  export default  {
    name: 'src-components-formularioVue',
    props: [],
    mounted () {
      
    },
    data () {
      return {
          f: this.resetForm(),
          url : 'https://5f93837c8742070016da699e.mockapi.io/nt2-tp6/tp6-form'
      }
    },
    validations: {
      f: {
        nombre: { 
          required,
          minLength: minLength(5),
          maxLength: maxLength(15)
        },
        edad: { 
          required,
          between: between(18,120)
        },
        email: {
          required,
          email
        }
      }
    },
    methods: {
        /* delay : ms => new Promise(resolve => setTimeout(resolve, ms)), */
        async sendDatosFormAxios(datos) {
            try {
              let res = await this.axios.post(this.url, datos, {'content-type': 'application/json'})
              /* await this.delay(500) */
              console.log(res.data)
            }
            catch(error) {
              console.log('HTTP POST ERROR', error)
            }
        },
        async getDatosFormAxios() {
            try {
              let res = await this.axios(this.url)
              console.log(res.data)
            }
            catch(error) {
              console.log('HTTP GET ERROR', error)
            }
        },
        async enviar() {
            this.$v.$touch()
            if(!this.$v.$invalid) {
              let form = this.f
              console.log(form)
              await this.sendDatosFormAxios(form)
              this.f = this.resetForm()
              this.$v.$reset()
            }
        },
        resetForm() {
            return {
               nombre: '',
               edad : '',
               email : ''
            }
        }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-form {

  }
</style>
