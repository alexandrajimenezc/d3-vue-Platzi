<template>
  <div>
    <h1>TopHeroes</h1>
    <div>{{ heroes }}</div>
  </div>
</template>

<script>

export default {
  name: 'TopHeroes',
  props: {
    heroes: {
      required: true,
      type: Array
    }
  }
}
</script>
