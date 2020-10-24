<template>

  <section class="src-components-dataset">
    <div v-if="users.length">
      <div
          class="media alert alert-warning"
          v-for="(user, index) in users"
          :key="index"
      >
          <div class="media-body ml-3">
            <h5>
              <u>Usuario {{ index + 1 }}</u>
            </h5>
            <br />
            <p>Nombre: {{ user.nombre }}</p>
            <p>
              Edad: <i>{{ user.edad }}</i>
            </p>
            <p>
              Email: <i>{{ user.email }}</i>
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
</style>
