import { Supply } from 'vue-supply'

// base file of vue-supply provided by Akryum, 
// not sure if its a good idea to modify this file
export default {
  extends: Supply,

  methods: {
    activate() {
      this.$startMeteor()
    },

    deactivate() {
      this.$stopMeteor()
    },
  },

  meteor: {
    $lazy: true,
  },
}
