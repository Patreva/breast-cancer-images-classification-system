<template>
<div>
    <sidebar-component></sidebar-component>
<div class="relative md:ml-64 bg-blueGray-100">
    <navbar-component></navbar-component>
      <div class="relative md:pt-5 pb-16 pt-5">
        <div class="px-4 md:px-10 mx-auto w-full">
<h3 class="text-grey-dark text-sm font-sans">System Report</h3>
<div class="flex mx-2">
<div class="shadow rounded to w-full md:w-1/4 border-solid border-t-4 border-grey p-6 mx-2 my-2" v-for="(valuename, propertyName,index) in systemprediction" v-bind:key="index" :set="formvalue = valuename">
<div v-for="(prediction, predictionName,index) in predictiondetail" v-bind:key="index">
    <form @submit.prevent="submitForm(valuename,predictionName, prediction[0][1],prediction[0][0],)"  v-if="predictionName == propertyName">
    <div class="flex justify-between items-center">
      <h4 class="uppercase text-black text-xs tracking-wide font-bold mb-2">Image Name: {{propertyName}} </h4>
      <input type="hidden" :value="propertyName" name="name">
    </div>

    <h3 class="text-grey-dark text-sm font-medium font-sans leading-normal">Prediction: {{valuename}}</h3>
    <input type="hidden"  :value="valuename" name="systemprediction">

  <div v-if="predictionName == propertyName">
    <h3 class="text-grey-dark text-sm font-medium font-sans leading-normal">IDC Probabilty: {{prediction[0][1]}}</h3>
    <input type="hidden" :value="prediction[0][1]" name="hasprobablity">
   <h3 class="text-grey-dark text-sm font-medium font-sans leading-normal">Normal Probabilty: {{prediction[0][0]}}</h3>
    <input type="hidden" :value="prediction[0][0]" name="normalprobablity"> 
  </div>
<pulse-loader v-if="loading" color="blue"></pulse-loader>
<div v-else>
      <div class="success-container" v-if="showModal && predictionName == formname">
                Success
      </div>
    <button v-else type="submit" class="flex justify-center mt-2 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save Report</button>
</div>
    </form>
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
  components: {
    NavbarComponent,
    SidebarComponent,
    PulseLoader
  },
  data(){
    return{
      form:{
          name:null,
          systemprediction: null,
          hasprobablity: null,
          normalprobablity: null,
          breastcancer: "idc"
      },
        systemprediction: this.$store.state.idcsystemprediction,
        predictiondetail: this.$store.state.idcpredictiondetail,
        loading: false,
        showModal: false,
        formname: null
    }
},
created() {
  this.systemprediction = this.$store.state.idcsystemprediction
  this.predictiondetail = this.$store.state.idcpredictiondetail
},
methods: {
    submitForm: function(prediction,imagename,hasprobablity,normalprobablity) {
      this.loading = true
      this.form.name= imagename
      this.form.systemprediction = prediction
      this.form.hasprobablity = hasprobablity
      this.form.normalprobablity = normalprobablity
      this.formname = imagename
      this.axios.post('/api/reports',this.form)
      .then(res=>{
          this.loading = false
          this.showModal = true;
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
},
},
}
</script>

<style scoped>
  div.success-container{
        text-align: center;
        color: green;
  }
</style>