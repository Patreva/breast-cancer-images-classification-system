<template>
<div>
  <div class="bg-gray-100 font-family-karla flex">
    <sidebar-component></sidebar-component>
    <div class="w-full flex flex-col h-screen overflow-y-hidden">
      <navbar-component></navbar-component>
        <div class="w-full overflow-x-hidden border-t flex flex-col">
            <main class="w-full flex-grow p-6">
                <h1 class="text-3xl text-black pb-6">Reports</h1>
    
                <div class="w-full mt-2">
                    <div class="bg-white overflow-auto">
                        <table class="min-w-full bg-white">
                            <thead class="bg-gray-800 text-white">
                                <tr>
                                    <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                                    <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">System Prediction</th>
                                    <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Normal Probability</th>
                                    <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Has Probability</th>
                                    <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Date</th>
                                </tr>
                            </thead>
                            <tbody class="text-gray-700">
                              <pulse-loader v-if="loading" color="blue"></pulse-loader>
                                <tr v-else v-for="report in reports" v-bind:key="report.id">
                                    <td class="w-1/3 text-left py-3 px-4">{{report.name}}</td>
                                    <td class="w-1/3 text-left py-3 px-4">{{report.systemprediction}}</td>
                                    <td class="w-1/3 text-left py-3 px-4">{{report.normalprobablity}}</td>
                                    <td class="w-1/3 text-left py-3 px-4">{{report.hasprobablity}}</td>
                                    <td class="w-1/3 text-left py-3 px-4">{{report.publish_date}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
    
            <footer class="w-full bg-white text-right p-4">
                 Breast Cancer Classifier.
            </footer>
        </div>
        </div>
  </div>
</div>
</template>

<script>
import SidebarComponent from '../components/sidebar';
import NavbarComponent from '../components/header';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
export default {
  components:{
    SidebarComponent,
    NavbarComponent,
    PulseLoader
    },
    data(){
      return {
        loading: false,
        reports: []
      }
    },
    created(){
    this.loading = true 
    this.axios.get('/api/reports')
    .then(res=> {
      this.loading= false
      this.reports=res.data
      })
    .catch(err=>{
      this.loading= false
          //console.log(err.response.data.error)
          if(err.response.data.error == 'Token is not provided'){
            this.$helpers.logout()
      }})
    }
}
</script>

<style>

</style>