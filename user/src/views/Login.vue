<template>
  <div>
    <navbar-component></navbar-component>
    <main>
      <section class="absolute w-full h-full">
        <div
          class="absolute top-0 w-full h-full bg-gray-900"
          style="background-size: 100%; background-repeat: no-repeat;"
          :style="{'background-image': 'url(' + require('../assets/img/register_bg_2.png') + ')'}"
        ></div>
        <div class="container mx-auto px-4 h-full">
          <div class="flex content-center items-center justify-center h-full">
            <div class="w-full lg:w-4/12 px-4">
              <div
                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0"
              >
                <div class="rounded-t mb-0 px-6 py-6">
                <h1 class="flex items-center justify-items-center"> Sign In </h1>
                  <hr class="mt-6 border-b-1 border-gray-400" />
                </div>
                <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <form @submit.prevent="login">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="grid-password"
                        >Email</label
                      ><input
                        type="email"
                        v-model="user.email"
                        class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Email"
                        style="transition: all 0.15s ease 0s;"
                      />
       <div v-if="this.submitted && $v.user.email.$error" class="invalid-feedback left text-red-500">
          <span v-if="!$v.user.email.required">Email is required</span>
          <span v-if="user.email && !$v.user.email.email">Enter valid email address</span>
          <span v-if="user.email && $v.user.email.email && !$v.user.email.maxLength">Email is allowed only 30 characters</span>
        </div>
                    </div>
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="grid-password"
                        >Password</label
                      ><input
                        type="password"
                        v-model="user.password"
                        class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Password"
                        style="transition: all 0.15s ease 0s;"
                      />
        <div v-if="this.submitted && $v.user.password.$error" class="invalid-feedback left text-red-500">
          <span v-if="!$v.user.password.required">Password is required</span>
          <span v-if="user.password && !$v.user.password.minLength">Password must be minimum 6 characters</span>
        </div>
                    </div>
                    <div class="text-center mt-6">
                      <pulse-loader v-if="loading" color="blue"></pulse-loader>
                      <button v-else
                        class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                        type="submit"
                        style="transition: all 0.15s ease 0s;"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer-component></footer-component>
      </section>
    </main>
  </div>
</template>
<script>

import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { required, email, minLength } from 'vuelidate/lib/validators';
export default {
"name": "login_page",
  components:{
    NavbarComponent,
    FooterComponent,
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
