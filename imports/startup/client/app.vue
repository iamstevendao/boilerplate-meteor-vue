<template lang="pug">
body
  include ../../ui/includes/header
  router-view
  include ../../ui/includes/footer
</template>

<style scoped>
footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  text-align: right;
  padding: 0.5em 1em;
}
</style>

