<template lang="pug">
b-navbar(toggleable="md" type="dark" variant="secondary")
  b-navbar-toggle(target="nav_collapse")
  b-navbar-brand(to="home") Todos
  b-collapse#nav_collapse(is-nav)
    b-navbar-nav
      b-nav-item(href="https://github.com/iamstevendao/meteor-vue-demo") github
    b-navbar-nav.ml-auto
      b-nav-item(to="login" right) login
      b-nav-item(to="sign-up" right) sign up
</template>

<script>
export default {
  name: "sheader",
}
</script>



  
