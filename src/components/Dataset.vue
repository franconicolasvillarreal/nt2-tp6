<template>

  <section class="src-components-dataset">
    <div v-if="users.length">
      <div
          class="media alert alert-warning mt-3"
          v-for="(user, index) in users"
          :key="index"
      >
          <div class="media-body ml-3 text-left">
            <h5>
              <strong>USUARIO {{ index + 1 }}</strong>
            </h5>
            <p>Nombre: {{ user.nombre }}</p>
            <p>
              Edad: {{ user.edad }}
            </p>
            <p>
              Email: {{ user.email }}
            </p>
          </div>
      </div>
    </div>
    <h2 v-else class="alert alert-warning">No se encontraron usuarios</h2>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-dataset',
    props: [],
    mounted () {
      this.getDatosFormAxios()
    },
    data () {
      return {
        url : 'https://5f93837c8742070016da699e.mockapi.io/nt2-tp6/tp6-form',
        users : []
      }
    },
    methods: {
      async getDatosFormAxios() {
            try {
              let res = await this.axios(this.url)
              console.log(res.data)
              this.users = res.data
            }
            catch(error) {
              console.log('HTTP GET ERROR', error)
            }
        }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-dataset {

  }
  hr {
    border: 1px solid rgb(158, 136, 8);
  }
</style>
