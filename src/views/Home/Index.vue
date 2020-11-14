<template>
  <div class="home">
    <h1>
      <HomeTitle />
      <MainForm/>
    </h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeTitle from './HomeTitle'
import MainForm from './HomeForm'
export default {
  name: 'Home',
  components: {
    HomeTitle,
    MainForm
  }
}
</script>
