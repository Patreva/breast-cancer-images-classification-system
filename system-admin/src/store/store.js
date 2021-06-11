import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        slug:null,
        changeProblemdynamic:null,
        order_id:null,
        pagesprice:null,
        slidesprice:null, 
        sourcesprice:null,
        writerprice:null,
        plagarismprice:null,
        progressiveprice: null,
        summaryprice:null,
        draftprice:null,
        softwareprice:null,
        problemsprice:null,
    },
    getters: {},
    mutations: {
        updateChangeProblemDynamic(state, data) {
            localStorage.setItem('changeProblemdynamic', data);
            state.changeProblemdynamic = data;
        },
        updateslug(state, data) {
            localStorage.setItem('slug', data);
            state.slug = data;
        },
        updateorderid(state, data) {
            localStorage.setItem('order_id', data);
            state.order_id = data;
        },
        updatedetailsformat(state, data) {
            localStorage.setItem('format', data);
            state.detailsform.format = data;
        },
        updateDetailsformtypeofpaper(state, data) {
            localStorage.setItem('typeofpaper', data);
            state.detailsform.typeofpaper = data;
        },
        updateDetailsformsubject(state, data) {
            localStorage.setItem('subject', data);
            state.detailsform.subject = data;
        },
        updateDetailsformtopic(state, data) {
            localStorage.setItem('topic', data);
            state.detailsform.topic = data;
        },
        updateDetailsformdetails(state, data) {
            localStorage.setItem('details', data);
            state.detailsform.details = data;
        },
        updateDetailsformacademiclevel(state, data) {
            localStorage.setItem('academiclevel', data);
            state.detailsform.academiclevel = data;
        },
        updateDetailsformtypeofwork(state, data) {
            localStorage.setItem('typeofwork', data);
            state.detailsform.typeofwork = data;
        },
        updateDetailsformdeadline(state, data) {
            localStorage.setItem('deadline', data);
            state.detailsform.deadline = data;
        },
        updateDetailsformspacing(state, data) {
            localStorage.setItem('spacing', data);
            state.detailsform.spacing = data;
        },
        updateDetailsformpages(state, data) {
            localStorage.setItem('pages', data);
            state.detailsform.pages = data;
        },
        updateDetailsformproblems(state, data) {
            localStorage.setItem('problems', data);
            state.detailsform.problems = data;
        },
        updateDetailsformslides(state, data) {
            localStorage.setItem('slides', data);
            state.detailsform.slides = data;
        },
        updateDetailsformsource(state, data) {
            localStorage.setItem('source', data);
            state.detailsform.source = data;
        },
        updateDetailsformsoftware(state, data) {
            localStorage.setItem('software', data);
            state.detailsform.software = data;
        },
        updateDetailsformadditionalfeatures(state, data) {
            localStorage.setItem('additionalfeatures', data);
            state.detailsform.additionalfeatures = data;
        },
        updateDetailsformchoosewriters(state, data) {
            localStorage.setItem('choosewriters', data);
            state.detailsform.choosewriters = data;
        },
        updatePriceTag(state, data){
            localStorage.setItem('pricetag', data);
            state.detailsform.pricetag = data;
        },
        updatePricePage(state, data){
            localStorage.setItem('pagesprice', data);
            state.pagesprice = data;
        },
        updatePriceSlide(state, data){
            localStorage.setItem('slidesprice', data);
            state.slidesprice = data;
        },
        updatePriceSource(state, data){
            localStorage.setItem('sourcesprice', data);
            state.sourcesprice = data;
        },
        updatePriceWriter(state, data){
            localStorage.setItem('writerprice', data);
            state.writerprice = data;
        },
        updateDetailsformplararismprice(state, data){
            localStorage.setItem('plagarismprice', data);
            state.plagarismprice = data;
        },
        updateDetailsformprogressiveprice(state, data){
            localStorage.setItem('progressiveprice', data);
            state.progressiveprice = data;
        }, 
        updateDetailsformsummaryprice(state, data){
            localStorage.setItem('summaryprice', data);
            state.summaryprice = data;
        }, 
        updateDetailsformdraftprice(state, data){
            localStorage.setItem('draftprice', data);
            state.draftprice = data;
        }, 
        updateDetailsformsoftwareprice(state, data){
            localStorage.setItem('softwareprice', data);
            state.softwareprice = data;
        }, 
        updateDetailsformchangePlagarism(state, data){
            localStorage.setItem('plagarism', data);
            state.detailsform.plagarism = data;
        },
        updateDetailsformchangeProgressiveDelivery(state, data){
            localStorage.setItem('progressive', data);
            state.detailsform.progressive = data;
        },
        updateDetailsformchangeSummaryPaper(state, data){
            localStorage.setItem('summary', data);
            state.detailsform.summary = data;
        },
        updateDetailsformchangeDraft(state, data){
            localStorage.setItem('draft', data);
            state.detailsform.draft = data;
        },
        updateDetailsformchangeClickedSoftware(state, data){
            localStorage.setItem('clickedsoftware', data);
            state.detailsform.clickedsoftware = data;
        },
        updatePriceProblem(state, data){
            localStorage.setItem('problemsprice', data);
            state.problemsprice = data;
        },
        initialiseStore(state) {
            if (localStorage.getItem('typeofpaper')) {
              state.detailsform.typeofpaper = localStorage.getItem('typeofpaper');
            }
            if (localStorage.getItem('changeProblemdynamic')) {
                state.changeProblemdynamic = localStorage.getItem('changeProblemdynamic');
              }
            if (localStorage.getItem('order_id')) {
                state.order_id = localStorage.getItem('order_id');
              }
            if (localStorage.getItem('slug')) {
                state.slug = localStorage.getItem('slug');
              }
            if (localStorage.getItem('academiclevel')){
                state.detailsform.academiclevel = localStorage.getItem('academiclevel');
            }
            if (localStorage.getItem('subject')){
                state.detailsform.subject = localStorage.getItem('subject');
            }
            if (localStorage.getItem('topic')){
                state.detailsform.topic = localStorage.getItem('topic');
            }
            if (localStorage.getItem('details')){
                state.detailsform.details = localStorage.getItem('details');
            }
            if (localStorage.getItem('format')){
                state.detailsform.format = localStorage.getItem('format');
            }
            if (localStorage.getItem('typeofwork')){
                state.detailsform.typeofwork = localStorage.getItem('typeofwork');
            }
            if (localStorage.getItem('spacing')){
                state.detailsform.spacing = localStorage.getItem('spacing');
            }
            if (localStorage.getItem('deadline')){
                state.detailsform.deadline = localStorage.getItem('deadline');
            }
            if (localStorage.getItem('problems')){
                state.detailsform.problems = localStorage.getItem('problems');
            }
            if (localStorage.getItem('pages')){
                state.detailsform.pages = localStorage.getItem('pages');
            }
            if (localStorage.getItem('slides')){
                state.detailsform.slides = localStorage.getItem('slides');
            }
            if (localStorage.getItem('source')){
                state.detailsform.source = localStorage.getItem('source');
            }
            if (localStorage.getItem('software')){
                state.detailsform.software = localStorage.getItem('software');
            }
            if (localStorage.getItem('additionalfeatures')){
                state.detailsform.additionalfeatures = localStorage.getItem('additionalfeatures');
            }
            if (localStorage.getItem('choosewriters')){
                state.detailsform.choosewriters = localStorage.getItem('choosewriters');
            }
            if (localStorage.getItem('pricetag')){
                state.detailsform.pricetag = localStorage.getItem('pricetag');
            }
            if (localStorage.getItem('pagesprice')){
                state.pagesprice = localStorage.getItem('pagesprice');
            }
            if (localStorage.getItem('slidesprice')){
                state.slidesprice = localStorage.getItem('slidesprice');
            }
            if (localStorage.getItem('writerprice')){
                state.writerprice = localStorage.getItem('writerprice');
            }
            if (localStorage.getItem('plagarismprice')){
                state.plagarismprice  = localStorage.getItem('plagarismprice');
            }
            if (localStorage.getItem('progressiveprice')){
                state.progressiveprice = localStorage.getItem('progressiveprice');
            }
            if (localStorage.getItem('summaryprice')){
                state.summaryprice = localStorage.getItem('summaryprice');
            }
            if (localStorage.getItem('draftprice')){
                state.draftprice = localStorage.getItem('draftprice');
            }
            if (localStorage.getItem('softwareprice')){
                state.softwareprice = localStorage.getItem('softwareprice');
            }   
            if (localStorage.getItem('plagarism')){
                state.detailsform.plagarism = localStorage.getItem('plagarism');
            }
            if (localStorage.getItem('progressive')){
                state.detailsform.progressive= localStorage.getItem('progressive');
            }
            if (localStorage.getItem('summary')){
                state.detailsform.summary = localStorage.getItem('summary');
            }
            if (localStorage.getItem('draft')){
                state.detailsform.draft = localStorage.getItem('draft');
            }
            if (localStorage.getItem('clickedsoftware')){
                state.detailsform.clickedsoftware = localStorage.getItem('clickedsoftware');
            }
            if (localStorage.getItem('problemsprice')){
                state.problemsprice = localStorage.getItem('problemsprice');
            }
          },

    },
    actions: {},
});