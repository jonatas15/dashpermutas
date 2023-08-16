<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <Banner />
    <!-- Page Content -->
    <section class="py-5">
      <div class="container">
        <h2 class="titulo-de-section pb-5 text-black">
          <div class="px-3 float-start">
            <i class="fas fa-2x fa-search"></i>
          </div>
          <div style="float: left">
            <strong>Pesquisar os</strong><br />
            Imóveis disponíveis
          </div>
        </h2>
        <div class="card px-5 py-5">
          <SearchForm @search="handleSearch" />
          <!-- <div v-if="searchResults.length > 0">
            <h2>Resultados da Busca</h2>
            <ul>
              <li v-for="(result, index) in searchResults" :key="index">{{ result }}</li>
            </ul>
          </div> -->
          <div class="mt-3 text-center">
            <h5>Pesquisa avançada</h5>
            <!-- <div>
              <p>Estamos em um dispositivo {{ isMobile ? 'móvel' : 'desktop' }} e {{ slidescont }}.</p>
            </div> -->
          </div>
          <SearchFormAdvanced />
        </div>
      </div>
    </section>
    <!--
    <section class="py-5">
      <div class="container">
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="..." class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
    -->
    <section class="py-5">
      <div class="container">
        <h2 class="titulo-de-section pb-5 my-3 mb-3 text-black">
          <div class="px-3 float-start">
            <i class="fa-solid fa-2x fa-house-chimney"></i>
          </div>
          <div style="float: left">
            <strong>Pesquisar os</strong><br />
            Imóveis disponíveis
          </div>
        </h2>
        <div class="carousel-container">
          <swiper
            :modules="modules"
            :slides-per-view="slidescont"
            :space-between="-40"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            >
            <!-- 
              :loop="true"
              ref="swiper" 
            -->
            <SwiperSlide v-for="property in properties" :key="property.id" class="px-5">
              <div class="card w-100">
                <img :src="property.image" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">{{ property.title }}</h5>
                  <p class="card-text">{{ property.description }}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </SwiperSlide>
            <div class="swiper-button-prev" @click="anteriorSlide"></div>
            <div class="swiper-button-next" @click="proximoSlide"></div>
          </swiper>
        </div>
      </div>
    </section>
  
  </main>
</template>
<script>
// import { ref } from 'vue';
// const swiper = new Swiper('.swiper', {
//   speed: 400,
//   spaceBetween: 100,
// });
// const swiper = document.querySelector('.swiper').swiper;
import Banner from "@/components/Banner.vue";
import SearchForm from "@/components/SearchForm.vue";
import SearchFormAdvanced from "@/components/SearchFormAdvanced.vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide, useSwiper } from "swiper/vue";
import { Navigation } from 'swiper/modules';

import "swiper/css";
import 'swiper/css/navigation';
// import 'swiper/scss/pagination';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';  

// const swiper = ref();

export default {
  name: "HomeView",
  components: {
    Banner,
    SearchForm,
    SearchFormAdvanced,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const swiper = useSwiper();
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      // swiper
      modules: [Navigation],
    };
  },
  data() {
    return {
      searchResults: [],
      properties: [
        // Lista de imóveis com seus detalhes
        {
          id: 1,
          image:"https://s01.jetimgs.com/trsmAp8vb8l6JoThBfL-M9HWIBF1sTisneGpHfTsGCaNvSDpGBovv-zwtPCOL-cbIIq9xge-UhMxz4X3RX2fNS-9BKwe7SAkpUuT1K9xSlEDJAn455sNj0ER3nwUVTRph5dO3xHF_K3xbrPr181GUDMuH0x2PW_RR26qIFU81HyI8308VrVohRzlovkV/.jpg",
          title: "Imóvel 1",
          description: "Descrição 1",
        },
        {
          id: 2,
          image:"https://s01.jetimgs.com/trsmAp8vb8l6JoThBfL-M9HWIBF1sTisneGpHfTsGCaNvSDpGBovv-zwtPCOL-cbIIq9xge-UhMxz4X3RX2fNS-9BKwe7SAkpUuT1K9xSlEDJAn455sNj0ER3nwUVTRph5dO3xHF_K3xbrPr181GUDMuH0x2PW_RR26qIFU81HyI8308VrVohRzlovkV/.jpg",
          title: "Imóvel 2",
          description: "Descrição 2",
        },
        {
          id: 3,
          image:"https://s01.jetimgs.com/trsmAp8vb8l6JoThBfL-M9HWIBF1sTisneGpHfTsGCaNvSDpGBovv-zwtPCOL-cbIIq9xge-UhMxz4X3RX2fNS-9BKwe7SAkpUuT1K9xSlEDJAn455sNj0ER3nwUVTRph5dO3xHF_K3xbrPr181GUDMuH0x2PW_RR26qIFU81HyI8308VrVohRzlovkV/.jpg",
          title: "Imóvel 3",
          description: "Descrição 3",
        },
        {
          id: 4,
          image:"https://s01.jetimgs.com/trsmAp8vb8l6JoThBfL-M9HWIBF1sTisneGpHfTsGCaNvSDpGBovv-zwtPCOL-cbIIq9xge-UhMxz4X3RX2fNS-9BKwe7SAkpUuT1K9xSlEDJAn455sNj0ER3nwUVTRph5dO3xHF_K3xbrPr181GUDMuH0x2PW_RR26qIFU81HyI8308VrVohRzlovkV/.jpg",
          title: "Imóvel 4",
          description: "Descrição 4",
        },
        {
          id: 5,
          image:"https://s01.jetimgs.com/trsmAp8vb8l6JoThBfL-M9HWIBF1sTisneGpHfTsGCaNvSDpGBovv-zwtPCOL-cbIIq9xge-UhMxz4X3RX2fNS-9BKwe7SAkpUuT1K9xSlEDJAn455sNj0ER3nwUVTRph5dO3xHF_K3xbrPr181GUDMuH0x2PW_RR26qIFU81HyI8308VrVohRzlovkV/.jpg",
          title: "Imóvel 5",
          description: "Descrição 5",
        },
        {
          id: 6,
          image:"https://s01.jetimgs.com/trsmAp8vb8l6JoThBfL-M9HWIBF1sTisneGpHfTsGCaNvSDpGBovv-zwtPCOL-cbIIq9xge-UhMxz4X3RX2fNS-9BKwe7SAkpUuT1K9xSlEDJAn455sNj0ER3nwUVTRph5dO3xHF_K3xbrPr181GUDMuH0x2PW_RR26qIFU81HyI8308VrVohRzlovkV/.jpg",
          title: "Imóvel 6",
          description: "Descrição 6",
        },
        {
          id: 7,
          image:"https://s01.jetimgs.com/trsmAp8vb8l6JoThBfL-M9HWIBF1sTisneGpHfTsGCaNvSDpGBovv-zwtPCOL-cbIIq9xge-UhMxz4X3RX2fNS-9BKwe7SAkpUuT1K9xSlEDJAn455sNj0ER3nwUVTRph5dO3xHF_K3xbrPr181GUDMuH0x2PW_RR26qIFU81HyI8308VrVohRzlovkV/.jpg",
          title: "Imóvel 7",
          description: "Descrição 7",
        },
      ],
      swiperOptions: {
      },
      isMobile: window.innerWidth <= 768,
      swiper: null,
      slidescont: this.isMobile ? 1 : 4,
    };
  },
  methods: {
    updateIsMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
    handleSearch(searchCriteria) {
      // Simulação: substitua isso com a lógica real de busca
      // Aqui, você pode fazer uma chamada à API ou manipular os dados localmente
      this.searchResults = [
        `Tipo: ${searchCriteria.propertyType}`,
        `Bairro: ${searchCriteria.neighborhood}`,
        `Valor: R$${searchCriteria.value}`,
      ];
    },
    onSwiper(swiper) {
      this.swiper = swiper;
    },
    proximoSlide() {
      this.swiper.slideNext();
    },
    anteriorSlide() {
      this.swiper.slidePrev();
    }
    
  },
  created() {
    window.addEventListener('resize', this.updateIsMobile);
    if(this.isMobile) {
      this.slidescont = 1;
    } else {
      this.slidescont = 4;
    }
    // this.init();
  },
  destroyed() {
    // Remova o listener quando o componente for destruído
    window.removeEventListener('resize', this.updateIsMobile);
  },
};
</script>
<style scoped>
.titulo-de-section {
  font-size: 17px;
  line-height: 24px;
  color: #626262;
  /* font-weight: 800; */
  font-family: "Open Sans";
}
</style>
