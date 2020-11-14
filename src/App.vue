<template>
  <div id="app">
    <LoadLayout v-if="isLoading">
      <BaseLoading />
   </LoadLayout>
   <MainLayout v-else />

  </div>
</template>

<script>

import { mapState } from 'vuex'
import LoadLayout from './layouts/LoadLayout'
import MainLayout from './layouts/MainLayout'
import BaseLoading from '@/components/BaseLoading.vue'

export default {
  name: 'App',
  components: {
    LoadLayout,
    MainLayout,
    BaseLoading
  },
  computed: {
  // aqui se usa mapState(moduleName, {state}) en este caso el modulo es loading.js , este fichero hay que colocalor en el store index

    ...mapState('loading', {
      isLoading: 'isLoading'
    })
  }

}
</script>

<style lang="stylus">
#app
  padding 60px 0
  color #ffffff
  background-color #075559
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
</style>
