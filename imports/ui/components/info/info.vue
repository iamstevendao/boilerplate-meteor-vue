<template lang="pug">
div
  h2 Learn Meteor!
  ul
    li
      form.info-link-add
        input(type="text" name="title" placeholder="Title" required)
        input(type="url" name="url" placeholder="Url" required)
        input(type="submit" name="submit" value="Add new link")
    li(v-for="link in links")
      a(href="link.url" target="_blank") {{ link.title }}
</template>

<script>
export default {
  name: "info",
  data() {
    return {
      links: null,
    }
  }
}
</script>

