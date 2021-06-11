<template>
  <div>
    <navbar-component></navbar-component>
    <main>
      <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center"
        style="min-height: 75vh;"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          :style="{'background-image': 'url(' + require('../assets/img/analyzerbackground.png') + ')'}"
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">
                  Breast cancer images classifier.
                </h1>
                <p class="mt-4 text-lg text-gray-300">
                  This helps classify invasive ductal carcinoma the most common subtype of all breast cancers images of tissues taken by a pathologist into either benign or malignant.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style="height: 70px;"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <section class="pb-20 bg-gray-300 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
                  >
                    <p>1</p>
                  </div>
                  <h6 class="text-xl font-semibold">Upload Images</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Upload the images that you need to be classified where you can upload multiple or a single image
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400"
                  >
                    <p>2</p>
                  </div>
                  <h6 class="text-xl font-semibold">Images Classification</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Our system perfoms an analysis on the uploaded images where it will classify the images uploaded to either benign or malignant.
                  </p>
                </div>
              </div>
            </div>
            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400"
                  >
                    <p>3</p>
                  </div>
                  <h6 class="text-xl font-semibold">Feedback</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    The system returns a response on the results of the analysis having a category in which it was able to predict and the probability of each class.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer-component></footer-component>
  </div>
</template>
<script>
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
export default {
  name: "landing-page",
  components: {
    NavbarComponent,
    FooterComponent
  }
}
</script>
