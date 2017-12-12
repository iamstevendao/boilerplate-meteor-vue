<template lang="pug">
body
  sheader
  router-view
  sfooter
</template>

<script>
import sheader from '/imports/ui/includes/header.vue';
import sfooter from '/imports/ui/includes/footer.vue'
export default {
  name: 'app',
  components: {
    sheader,
    sfooter,
  }
}
</script>


<style scoped>
footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  text-align: right;
  padding: 0.5em 1em;
}
</style>

