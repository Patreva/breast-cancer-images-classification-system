<template>
<div>
    <sidebar-component></sidebar-component>
<div class="relative md:ml-64 bg-blueGray-100">
    <navbar-component></navbar-component>
      <div class="relative bg-pink-600 md:pt-32 pb-32 pt-5">
        <div class="px-4 md:px-10 mx-auto w-full">
          <div class="flex flex-wrap mt-4">
          <div class="w-full mb-10 xl:mb-0 px-4">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div class="rounded-t mb-0 px-4 py-3 border-0">
                <div class="flex flex-wrap items-center">
                  <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 class="font-semibold text-base text-blueGray-700">
                      Page visits
                    </h3>
                  </div>
                </div>
              </div>
              <div class="block w-full overflow-x-auto">
                <!-- Projects table -->
                <table class="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Category
                      </th>
                      <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Name
                      </th>
                      <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        System Prediction
                      </th>
                      <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Normal Probabilty
                      </th>
                      <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Has Probabilty
                      </th>
                     <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Date Added
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <pulse-loader v-if="loading" color="blue"></pulse-loader>
                    <tr v-for="user in users" v-bind:key="user.id" v-else>
                      <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        {{user.breastcancer}}
                      </th>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {{user.name}}
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {{user.systemprediction}}
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                       {{user.normalprobablity}}
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {{user.hasprobablity}}
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {{user.publish_date}}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
  </div>
</div>
</template>

<script>
import NavbarComponent from "../components/Navbar.vue";
import SidebarComponent from "../components/Sidebar.vue";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
export default {
  name: "dashboard-page",
  components: {
    NavbarComponent,
    SidebarComponent,
    PulseLoader
  },
  data(){
        return{
            userid:null,
            users: null,
            errors:null,
            loading: false
        }
    },
created(){
  this.loading = true
  this.axios.get('/api/userreports')
     .then(res=> {
       this.loading = false
        this.users=res.data
      console.log(this.users);
     })
     .catch(err=>{
          //console.log(err)
          if(err.response.data.error == 'Token is not provided'){
            this.$helpers.logout()
        }})
},
}
</script>

<style>

</style>