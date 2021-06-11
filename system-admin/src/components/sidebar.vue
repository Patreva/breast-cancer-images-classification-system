<template>
<div>
      <aside class="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
        <div class="p-6">
            <a href="/dashboard" class="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</a>
            <button class="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center" type="button" v-on:click="toggleModal()">
                <i class="fas fa-plus mr-3"></i> New User
            </button>
        </div>
        <nav class="text-white text-base font-semibold pt-3">
            <a href="/dashboard" class="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
                <i class="fas fa-tachometer-alt mr-3"></i>
                Dashboard
            </a>
            <a href="/users" class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                <i class="fas fa-sticky-note mr-3"></i>
                Users
            </a>
            <a href="/reports" class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                <i class="fas fa-table mr-3"></i>
                Reports
            </a>
            <a href="/admins" class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                <i class="fas fa-align-left mr-3"></i>
                Admins
            </a>
        </nav>
    </aside>
    <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 justify-center items-center flex">
<div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form @submit.prevent="submitRegistration" novalidate>
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <span v-if="errors" style="color:red">Server error try again</span>
            <div class="grid grid-cols-6 gap-6"> 
              <div class="col-span-6 sm:col-span-3">
                <label for="first_name" class="block text-sm font-medium text-gray-700">First name</label>
                <input type="text" v-model="user.first_name" id="first_name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block h-10 w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                <div v-if="this.submitted && !$v.user.first_name.required" class="invalid-feedback left text-red-500">Enter First name</div>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="last_name" class="block text-sm font-medium text-gray-700">Last name</label>
                <input type="text" v-model="user.last_name" id="last_name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block h-10 w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                <div v-if="this.submitted && !$v.user.last_name.required" class="invalid-feedback left text-red-500">Enter Last name</div>
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label for="email_address" class="block text-sm font-medium text-gray-700">Email address</label>
                <input type="text" v-model="user.email" id="email_address" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block h-10 w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
            <div v-if="this.submitted && $v.user.email.$error" class="invalid-feedback left text-red-500">
          <span v-if="!$v.user.email.required">Email is required</span>
          <span v-if="user.email && !$v.user.email.email">Enter valid email address</span>
          <span v-if="user.email && $v.user.email.email && !$v.user.email.maxLength">Email is allowed only 30 characters</span>
        </div>
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" v-model="user.password" id="password"  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block h-10 w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
            <div v-if="this.submitted && $v.user.password.$error" class="invalid-feedback left text-red-500">
          <span v-if="!$v.user.password.required">Password is required</span>
          <span v-if="user.password && !$v.user.password.minLength">Password must be minimum 6 characters</span>
        </div>
              </div>

            <div class="col-span-6 sm:col-span-4">
                <label for="confirmpassword" class="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input type="password" v-model="user.confirmPassword" id="confirmpassword"  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block h-10 w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                <div v-if="this.submitted && $v.user.confirmPassword.$error" class="invalid-feedback left text-red-500">
                    <span v-if="!$v.user.confirmPassword.required">Confirm Password is required</span>
                    <span v-if="user.confirmPassword && !$v.user.confirmPassword.sameAsPassword">Password and Confirm Password should match</span>
                </div>
              </div>

              <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                <label for="organization" class="block text-sm font-medium text-gray-700">Organization</label>
                <input type="text" v-model="user.organization" id="organization" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block h-10 w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                <div v-if="this.submitted && !$v.user.organization.required" class="invalid-feedback left text-red-500">Enter Organization</div>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
              <label for="country" class="block text-sm font-medium text-gray-700">Country</label>
              <input type="text" v-model="user.country" id="country" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block h-10 w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              <div v-if="this.submitted && !$v.user.country.required" class="invalid-feedback left text-red text-red-500">Enter Country</div>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label for="county" class="block text-sm font-medium text-gray-700">County</label>
            <input type="text" v-model="user.county" id="county" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block h-10 w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
         <div v-if="this.submitted && !$v.user.county.required" class="invalid-feedback left text-red-500">Enter County</div>
              </div>
            </div>
          </div>
          <div class="flex items-center px-4 py-3 bg-gray-50 text-right sm:px-6">
              <pulse-loader v-if="loading" color="blue"></pulse-loader>
              <div v-else>
            <button class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
              Close
            </button>
            <button  type="submit" class="text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
              Save
            </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
export default {
    components:{
    PulseLoader
    },
  data() {
    return {
        loading:false,
        size: "10",
        color: "blue",
        submitted: false,
    user:{
        first_name:null,
        last_name:null,
        email:null,
        country:null,
        county:null,
        organization:null,
        password:null,
        confirmPassword: null,
        isAdmin: false
    },
    errors:null,
      showModal: false
    }
  },
validations: {
 user: {
   first_name: { required },
    last_name: { required },
    country: {required},
    county: {required},
    organization: {required},
   email: { required, email },
   password: { required, minLength: minLength(6) },
   confirmPassword: { required, sameAsPassword: sameAs('password') }
 }
},
created () {
  this.submitted = false
  return this.$v.$touch()
},
computed: {
  isDisabled () {
    return this.$v.$invalid
  }
},
  methods: {
    toggleModal: function(){
      this.showModal = !this.showModal;
    },
    submitRegistration(){
    this.submitted = true
            //console.log(this.form.name)
    this.$v.$touch()
    if (this.$v.$invalid) {
        this.loading = false
        return false // stop here if form is invalid
    } else {
        this.loading = true
        const updatedUser = { ...this.user };
        delete updatedUser['confirmPassword'];
        // console.log(updatedUser);
        // this.$delete(this.user, 'confirmPassword')
        this.axios.post('/api/auth/signup',updatedUser)
            .then(res=>{
                this.loading = false
                this.showModal = !this.showModal;
            //   window.location="/users"
              console.log(res)
                // this.worktypes.unshift(res.data)
                // this.form.name=null
            })
          .catch(err=>{
              this.loading = false
             this.errors = err.response
          console.log(err.response)
        //   if(err.response.data.error == 'Token is not provided'){
        //     this.$helpers.logout()
        // }
        })
    }

     },
  }
}
</script>

<style scoped>
.font-family-karla { font-family: karla; }
.bg-sidebar { background: #3d68ff; }
.cta-btn { color: #3d68ff; }
.upgrade-btn { background: #1947ee; }
.upgrade-btn:hover { background: #0038fd; }
.active-nav-link { background: #1947ee; }
.nav-item:hover { background: #1947ee; }
.account-link:hover { background: #3d68ff; }
</style>