<template>
<div>
    <sidebar-component></sidebar-component>
<div class="relative md:ml-64 bg-blueGray-100">
    <navbar-component></navbar-component>
      <div class="relative md:pt-5 pb-16 pt-5">
        <div class="px-4 md:px-10 mx-auto w-full">
    <div class="container filestyle">
    <h1>Metastatic Analyzer</h1>
        <div class="large-12 medium-12 small-12 filezone">
            <input type="file" id="files" ref="files" multiple v-on:change="handleFiles()"/>
            <p>
                Drop your files here <br>or click to search
            </p>
        </div>

        <div v-for="(file, key) in files" v-bind:key="file.id" class="file-listing">
            <img class="preview" v-bind:ref="'preview'+parseInt(key)"/>
            {{ file.name }}
            <div class="success-container" v-if="showsuccess">
                Success
            </div>
            <div class="remove-container" v-else>
                <a class="remove" v-on:click="removeFile(key)">Remove</a>
            </div>
        </div>
        <pulse-loader v-if="loading" color="blue"></pulse-loader>
        <div v-else>
        <a v-if="showupload" class="submit-button cursor-pointer" v-on:click="submitFiles()">Upload files</a>
        </div>
        <a v-if="disabled" class="predict-button cursor-pointer" v-on:click="predict()">Predict</a>
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
        files: [],
        loading: false,
        showsuccess: false,
        disabled: false,
        showupload: true,
        token: this.$helpers.geToken()
    }
},
methods:{

    handleFiles() {
    let uploadedFiles = this.$refs.files.files;

    for(var i = 0; i < uploadedFiles.length; i++) {
        this.files.push(uploadedFiles[i]);
    }
    this.getImagePreviews();
},
getImagePreviews(){
    for( let i = 0; i < this.files.length; i++ ){
        if ( /\.(jpe?g|png|gif|tif)$/i.test( this.files[i].name ) ) {
            let reader = new FileReader();
            reader.addEventListener("load", function(){
                this.$refs['preview'+parseInt(i)][0].src = reader.result;
            }.bind(this), false);
            reader.readAsDataURL( this.files[i] );
        }else{
            this.$nextTick(function(){
                this.$refs['preview'+parseInt(i)][0].src = '/img/generic.png';
            });
        }
    }
},
removeFile( key ){
    this.files.splice( key, 1 );
    this.getImagePreviews();
},
predict(){
    this.loading = true
    this.disabled = false
    this.axios.post('/api/classifymetastaticimages')
        .then(data => {
            this.loading = false
            this.$store.state.metastaticprediction = data.data.systemprediction;
            this.$store.state.metastaticpredictiondetail = data.data.predictiondetail;
            this.$router.push('/metastaticfeedback');
        }).catch(function(data) {
            this.loading = false
         if(data.response.data.error == 'Token is not provided'){
            this.$helpers.logout()
                 }
        }); 

},
submitFiles() {
    this.loading = true
        for( let i = 0; i < this.files.length; i++ ){
        if(this.files[i].id) {
            continue;
        }
        let formData = new FormData();
        formData.append('file', this.files[i]);
        // formData.append('user_id', this.$helpers.id());
        this.axios.post('/api/uploadmetastaticimages',formData)
        .then(() => {
            this.showsuccess = true
            this.loading = false
            this.disabled = true
            this.showupload = false
        }).catch(function(data) {
            this.loading = false
         if(data.response.data.error == 'Token is not provided'){
            this.$helpers.logout()
                 }
        });  
    }
}
}
}
</script>

<style scoped>

.filestyle{
    margin-bottom: 50px;
    margin-top: 130px;
}
.text-style{
    text-align: center;
}
    input[type="file"]{
        opacity: 0;
        width: 100%;
        height: 200px;
        position: absolute;
        cursor: pointer;
    }
    .filezone {
        outline: 2px dashed grey;
        outline-offset: -10px;
        background: #ccc;
        color: dimgray;
        padding: 10px 10px;
        min-height: 200px;
        position: relative;
        cursor: pointer;
    }
    .filezone:hover {
        background: #c0c0c0;
    }

    .filezone p {
        font-size: 1.2em;
        text-align: center;
        padding: 50px 50px 50px 50px;
    }
    div.file-listing img{
        max-width: 90%;
    }

    div.file-listing{
        margin: auto;
        padding: 10px;
        border-bottom: 1px solid #ddd;
    }

    div.file-listing img{
        height: 100px;
    }
    div.success-container{
        text-align: center;
        color: green;
    }

    div.remove-container{
        text-align: center;
    }

    div.remove-container a{
        color: red;
        cursor: pointer;
    }

    a.submit-button{
        display: block;
        margin: auto;
        text-align: center;
        width: 200px;
        padding: 10px;
        text-transform: uppercase;
        background-color: purple;
        color: white;
        font-weight: bold;
        margin-top: 20px;
    }
    a.predict-button{
        display: block;
        margin: auto;
        text-align: center;
        width: 200px;
        padding: 10px;
        text-transform: uppercase;
        background-color: green;
        color: white;
        font-weight: bold;
        margin-top: 20px;
    }
.dashboard{
        display: block;
        width: 200px;
        padding: 10px;
        text-transform: uppercase;
        font-weight: bold;
        margin-left: 10px;
        margin-top:-40px;
}
</style>