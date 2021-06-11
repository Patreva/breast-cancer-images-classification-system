<template>
  <div>
    <sidebar-component></sidebar-component>
    <div class="relative md:ml-64 bg-blueGray-100">
      <navbar-component></navbar-component>
      <!-- Header -->
      <div class="relative bg-pink-600 md:pt-32 pb-32 pt-12">
        <div class="px-4 md:px-10 mx-auto w-full">
          <div>
            <!-- Card stats -->
            <div class="flex flex-wrap">
              <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                          No IDC Reports
                        </h5>
                        <span class="font-semibold text-xl text-blueGray-700">
                          {{countnormalidc}}
                        </span>
                      </div>
                    </div>
                      <p class="text-sm text-blueGray-400 mt-4">
                      <span class="text-emerald-500 mr-2">
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                          Has IDC Reports
                        </h5>
                        <span class="font-semibold text-xl text-blueGray-700">
                          {{counthasidc}}
                        </span>
                      </div>
                    </div>
                    <p class="text-sm text-blueGray-400 mt-4">
                      <span class="text-red-500 mr-2">
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                          Has Metastatic Cancer
                        </h5>
                        <span class="font-semibold text-xl text-blueGray-700">
                          {{counthasmet}}
                        </span>
                      </div>
                    </div>
                    <p class="text-sm text-blueGray-400 mt-4">
                      <span class="text-orange-500 mr-2">
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                          No Metastatic Cancer
                        </h5>
                        <span class="font-semibold text-xl text-blueGray-700">
                          {{countnormalmet}}
                        </span>
                      </div>
                    </div>
                    <p class="text-sm text-blueGray-400 mt-4">
                      <span class="text-emerald-500 mr-2">
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <footer class="block py-4">
          <div class="container mx-auto px-4">
            <hr class="mb-4 border-b-1 border-blueGray-200" />
            <div class="flex flex-wrap items-center md:justify-between justify-center">
              <div class="w-full md:w-4/12 px-4">
                <div class="text-sm text-blueGray-500 font-semibold py-1">
                  Copyright © {{date}}
                  Breast Cancer Images Classifier
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
import NavbarComponent from "../components/Navbar.vue";
import SidebarComponent from "../components/Sidebar.vue";
// import LineChartComponent from "../components/LineChart.vue";
// import BarChartComponent from "../components/BarChart.vue";
export default {
  name: "dashboard-page",
  components: {
    NavbarComponent,
    SidebarComponent
  },
  data() {
    return {
      date: new Date().getFullYear(),
      counthasmet:null,
      countnormalmet:null,
      counthasidc:null,
      countnormalidc:null
    }
  },
  created(){
        this.axios.get('/api/usercounthasmetastatic')
        .then(res=> {
          //console.log(res.data)
        this.counthasmet=res.data  
        })
        .catch(err=>{
        //console.log(err.response.data.error)
        if(err.response.data.error == 'Token is not provided'){
            this.$helpers.logout()
        }})
      this.axios.get('/api/usercountnormalmetastatic')
        .then(res=> {
          //console.log(res.data)
        this.countnormalmet=res.data  
        })
        this.axios.get('/api/usercounthasidc')
        .then(res=> {
          //console.log(res.data)
        this.counthasidc=res.data  
        })
         this.axios.get('/api/usercountnormalidc')
        .then(res=> {
          //console.log(res.data)
        this.countnormalidc=res.data  
        })
}
};
</script>
