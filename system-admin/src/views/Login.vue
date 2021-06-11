<template>
 <div class="h-screen w-full flex justify-center items-center bg-gradient-to-tr from-blue-900 to-blue-500">
    <div class="bg-image w-full sm:w-1/2 md:w-9/12 lg:w-1/2 mx-3 md:mx-5 lg:mx-0 shadow-md flex flex-col md:flex-row items-center rounded z-10 overflow-hidden bg-center bg-cover bg-blue-600">
      <div class="w-full md:w-1/2 flex flex-col justify-center items-center bg-opacity-25 bg-blue-600 backdrop">
        <h1 class="text-3xl md:text-4xl font-extrabold text-white my-2 md:my-0">
          Admin
        </h1>
        <p class="mb-2 text-white hidden md:block font-mono">
          Breast Cancer Classifier
        </p>
      </div>
      <div class="w-full md:w-1/2 flex flex-col items-center bg-white py-5 md:py-8 px-4">
        <h3 class="mb-4 font-bold text-3xl flex items-center text-blue-500">
          LOGIN
        </h3>
        <form @submit.prevent="login" class="px-3 flex flex-col justify-center items-center w-full gap-3">
          <input 
            type="email" placeholder="email.." v-model="user.email"
            class="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500"
          >
          <div v-if="this.submitted && $v.user.email.$error" class="invalid-feedback left text-red-500">
          <span v-if="!$v.user.email.required">Email is required</span>
          <span v-if="user.email && !$v.user.email.email">Enter valid email address</span>
          <span v-if="user.email && $v.user.email.email && !$v.user.email.maxLength">Email is allowed only 30 characters</span>
        </div>
          <input 
            type="password" placeholder="password.." v-model="user.password"
            class="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500"
          >
        <div v-if="this.submitted && $v.user.password.$error" class="invalid-feedback left text-red-500">
          <span v-if="!$v.user.password.required">Password is required</span>
          <span v-if="user.password && !$v.user.password.minLength">Password must be minimum 6 characters</span>
        </div>
          <pulse-loader v-if="loading" color="blue"></pulse-loader>
          <button v-else type="submit" class="flex justify-center items-center bg-blue-500 hover:bg-blue-600 text-white focus:outline-none focus:ring rounded px-3 py-1">
            <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
            </svg>
            <p class="ml-1 text-lg">
              Login
            </p>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { required, email, minLength } from 'vuelidate/lib/validators';
export default {
  components:{
    PulseLoader
  },
data(){
  return {
      user :{
          email:null,
          password:null
        },
        errors:null,
        loading: false
    }
  },
validations: {
 user: {
   email: { required, email },
   password: { required, minLength: minLength(6) },
 }
},
created () {
  this.submitted = false
  return this.$v.$touch()
},
methods:{
    login(){
          this.submitted = true
            //console.log(this.form.name)
    this.$v.$touch()
    if (this.$v.$invalid) {
        this.loading = false
        return false // stop here if form is invalid
    } else {
        this.loading=true
        this.axios.post('/api/auth/login', this.user)
        .then(res=> {
          //console.log(res);
          this.loading=false
          this.$helpers.responseAfterLogin(res)
          }) 
        .catch(error=> {
          //console.log(error);
        this.errors = error.response
        this.loading=false
        }) 
        }
      }
}
}
</script>

<style scoped>
.bg-image {
    background-image: url(https://i.postimg.cc/13pssvxG/bg-image.png);
}
.backdrop {
    backdrop-filter: blur(2px);
}
</style>