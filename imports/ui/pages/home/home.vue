<template lang="pug">
body
  hello
  info
</template>

<script>
import hello from '/imports/ui/components/hello/hello.vue'
import info from '/imports/ui/components/info/info.vue'
export default {
  name: "home",
  components: {
    hello,
    info
  }
}
</script>
