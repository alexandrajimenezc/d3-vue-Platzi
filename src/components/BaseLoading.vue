<template>
  <div class="loading-wrapper text-center py-5">
  <div class="spinner-wrapper w-100">
      <!--Componente Spinner de Bootstrap 🔄-->
    <b-spinner class="spinner" label="Loading..." :type="type" :variant="variant"/>
  </div>
  <h1 class="my-5">Loading...</h1>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    variant: {
      required: false,
      type: String,
      // en caso de no pasar nada a este prop tendra este valor por defecto
      default: 'info',
      validator: (value) => {
        // esta valida que el prop coincida con una de estas palabras
        return [
          'primary',
          'secondary',
          'danger',
          'success',
          'warning',
          'info',
          'light',
          'dark'
        ].indexOf(value) !== -1
      }
    },

    type: {
      required: false,
      type: String,
      default: 'border',
      validator: (value) => {
        return ['border', 'grow'].indexOf(value) !== -1
      }
    }
  }
}
</script>

<style lang="stylus">
.spinner-wrapper
  .spinner
    width 4rem
    height 4rem
</style>>
