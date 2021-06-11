<template>
  <div class="bg-gray-100 font-family-karla flex">
    <sidebar-component></sidebar-component>
    <div class="w-full flex flex-col h-screen overflow-y-hidden">
      <navbar-component></navbar-component>
        <div class="w-full overflow-x-hidden border-t flex flex-col">
            <main class="w-full flex-grow p-6">
                <h1 class="text-3xl text-black pb-6">Dashboard</h1>
    
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
            </main>
    
            <footer class="w-full bg-white text-right p-4 mt-80">
                 Breast Cancer Classifier.
            </footer>
        </div>
        </div>
  </div>
</template>

<script>
import SidebarComponent from '../components/sidebar';
import NavbarComponent from '../components/header';
import Chart from "chart.js";
export default {
  name: 'HelloWorld',
  components: {
    SidebarComponent,
    NavbarComponent
  },
  data(){
    return {
    counthasmet:null,
      countnormalmet:null,
      counthasidc:null,
      countnormalidc:null
    }
  },
  created(){
        this.axios.get('/api/counthasmetastatic')
        .then(res=> {
          //console.log(res.data)
        this.counthasmet=res.data  
        })
        .catch(err=>{
        //console.log(err.response.data.error)
        if(err.response.data.error == 'Token is not provided'){
            this.$helpers.logout()
        }})
      this.axios.get('/api/countnormalmetastatic')
        .then(res=> {
          //console.log(res.data)
        this.countnormalmet=res.data  
        })
        this.axios.get('/api/counthasidc')
        .then(res=> {
          //console.log(res.data)
        this.counthasidc=res.data  
        })
         this.axios.get('/api/countnormalidc')
        .then(res=> {
          //console.log(res.data)
        this.countnormalidc=res.data  
        })
  },
     mounted: function() {
    this.$nextTick(function() {
      let config2 ={
                    type: 'line',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
      }
      let config = {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
      };
      let ctx = document.getElementById("bar-chart").getContext("2d");
      window.myBar = new Chart(ctx, config);
      let ctx2 = document.getElementById("line-chart").getContext("2d");
      window.myLine = new Chart(ctx2, config2);
      
    });
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
