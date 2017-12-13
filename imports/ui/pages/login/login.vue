<template lang="pug">
b-row.justify-content-md-center
  b-card.text-center(bg-variant="light"
                    header="Login")
    b-form-group()
      b-row
        label(:for="email") Your email:
        b-form-input#email(:state="stateEmail"
                          aria-describedby="input-feedback"
                          v-model.trim="email")
        b-form-invalid-feedback#email-feedback {{ feedback }}
      b-row
        label(:for="password") Your password:
        b-form-input#password(v-model.trim="password"
                              :state="statePassword")
      
</template>

<script>
export default {
  name: 'login',
  computed: {
    feedback() {
      return this.email.length > 0 ? 'Enter at least 4 characters' : 'Please enter something';
    },
    stateEmail() {
      return this.email.length > 4 ? true : false;
    },
    statePassword() {
      return this.password.length > 6 ? true : false;
    }
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
}
</script>

<style scoped>
.row {
  margin: 60px;
}
</style>

