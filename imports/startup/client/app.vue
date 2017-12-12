<template lang="pug">
body
  b-navbar(toggleable="md" type="light" variant="secondary")
    b-navbar-toggle(target="nav_collapse")
    b-navbar-brand(to="/") Todos
    b-collapse#nav_collapse(is-nav)
      b-navbar-nav
        b-nav-item(href="https://github.com/iamstevendao/meteor-vue-demo") github
      b-navbar-nav.ml-auto
        b-nav-item(to="login" right) login
        b-nav-item(to="sign-up" right) sign up
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

