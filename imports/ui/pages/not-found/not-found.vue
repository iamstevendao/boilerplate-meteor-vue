<template lang="pug">
body
  #not-found
    .not-found-image: img(src="/img/404.svg"
                          alt="not found")
    .not-found-title
      h1 Sorry, that page doesn't exist
      a.gotohomepage(href="/") Go to home
</template>

<script>
export default {
  name: "not-found",
}
</script>

