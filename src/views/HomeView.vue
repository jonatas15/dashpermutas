<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main style="margin-bottom: 150px;">
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
            <strong>Imóveis Residenciais</strong><br />
            em Destaque:
          </div>
        </h2>
        <div class="carousel-container">
          <swiper
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
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6 green-card text-white">
            <div class="row py-4">
              <div class="col-md-6 texto-1 py-2 px-4">
                <span class="align-middle">Clique e fale com a gente<br>
                diretamente pelo whatsapp</span></div>
              <div class="col-md-6 py-3">
                <div class="whatsapp-button w-75">
                  <a class="" href="https://api.whatsapp.com/send?phone=SEU_NUMERO_DE_TELEFONE" target="_blank">
                    <div class="row">
                      <div class="col-2 py-2" style="
                        background-color: white;
                        color: black;
                        border: 3px solid white;
                        width: 40px;
                        margin-top: -1px;
                        margin-bottom: -1px;
                        border-top-left-radius: 10px;
                        border-bottom-left-radius: 10px;
                      ">
                        <i class="fab fa-whatsapp"></i> 
                      </div>
                      <div class="col-10 py-2">
                        (55) 99912 8466
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>
    </section>
    <section class="py-5">
      <div class="container">
        <h2 class="titulo-de-section pb-5 my-3 mb-3 text-black">
          <div class="px-3 float-start">
            <i class="fa-solid fa-2x fa-building"></i>
          </div>
          <div style="float: left">
            <strong>Imóveis Comerciais</strong><br />
            em Destaque
          </div>
        </h2>
        <div class="carousel-container">
          <swiper
            :slides-per-view="slidescont"
            :space-between="-40"
            @swiper="onSwiper2"
            @slideChange="onSlideChange2"
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
            <div class="swiper-button-prev" @click="anteriorSlide2"></div>
            <div class="swiper-button-next" @click="proximoSlide2"></div>
          </swiper>
        </div>
      </div>
    </section>
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-1"></div>
          <div class="col-10">
            <div class="banner-container">
              <div class="mask"></div>
              <img
              src="@/assets/banner-img-2.png"
              class="img-s"
              alt=""
              />
              <div class="contente-2">
                <div class="row">
                  <div class="col-2"></div>
                  <div class="col-9">
                    <img src="@/assets/hand-house.png" alt="" style="
                      /* float: left !important; */
                      background-color: transparent;
                      width: 100px;
                      height: 100px;
                    ">
                    <h2><strong>Anuncie</strong> seu imóvel <strong>conosco</strong></h2>
                    <p>Anunciar na Café é fácil e gratuito, 
                      clique abaixo e convere com a gente.</p>
                      <p>
                        <a href="#" class="btn btn-success">quero anunciar</a>
                      </p>
                  </div>
                </div>
                </div>
            </div>
          </div>
          <div class="col-1"></div>
        </div>
      </div>
    </section>
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-12 py-4 px-2" v-for="item in parapermuta" :key="item.id">
            <div class="card para-permuta hero-container">
              <img :src="item.img" alt="" style="height: 100%; object-fit: cover;border-radius: 15px !important;">
              <div class="mask"></div>
                <div class="contente">
                  <h2>{{ item.titulo }}</h2>
                  <br>
                  <p><a href="#" class="btn btn-success">ver mais</a></p>
                </div>
            </div>
          </div>
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
// import { Navigation } from 'swiper/modules';

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
    const onSwiper2 = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    const onSlideChange2 = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSwiper2,
      onSlideChange,
      onSlideChange2,
      // swiper
      // modules: [Navigation],
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
      parapermuta: [
        {
          id: 1,
          titulo: 'Casas para permuta',
          img: new URL('@/assets/casas.png', import.meta.url).href
        },
        {
          id: 2,
          titulo: 'Apartamentos para permuta',
          img: new URL('@/assets/apartamentos.png', import.meta.url).href
        },
        {
          id: 3,
          titulo: 'Terrenos para permuta',
          img: new URL('@/assets/terrenos.png', import.meta.url).href
        },
      ],
      swiperOptions: {
      },
      isMobile: window.innerWidth <= 768,
      swiper: null,
      swiper2: null,
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
    onSwiper2(swiper) {
      this.swiper2 = swiper;
    },
    proximoSlide() {
      this.swiper.slideNext();
    },
    anteriorSlide() {
      this.swiper.slidePrev();
    },
    proximoSlide2() {
      this.swiper2.slideNext();
    },
    anteriorSlide2() {
      this.swiper2.slidePrev();
    },
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
.green-card {
  /* width: 638px; */
  height: auto;
  border-radius: 40px;
  background-color: #05925b;
}
.green-card .texto-1 {
  font-size: 18px;  
  line-height: 25px;
  color: #ffffff;
  font-weight: 400;
  font-family: "Open Sans";
  text-align: right;
  filter: drop-shadow(-2.034px 4.568px 2px rgba(0,0,0,0.31));
}
.banner-overlay {
  position: relative;
  display: inline-block;
  width: 100%;
}

.banner-overlay::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.671;
  /* border-radius: 15px; */
  background-color: #20372e;
}
.banner-container {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* margin-top: 4%; */
  position: relative;
  border-radius: 15px;
  background-image: url('@assets');
}
.banner-container img{
  /* filter: drop-shadow(0px 14px 20px rgba(0,0,0,0.45)); */
  object-fit: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 400px;
}
.para-permuta {
  height: 596px;
  border-radius: 15px;
  /* background-color: #20372e; */
}
.hero-container {
  position: relative;
  width: 100%;
  height: 596px;
  overflow: hidden;
}
.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.5);
}

.contente {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  /* background-color: red; */
  z-index: 1; /* Coloca o conteúdo acima da máscara */
}
.contente-2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(0%, -50%);
  text-align: left;
  color: white;
  /* background-color: red; */
  z-index: 1; /* Coloca o conteúdo acima da máscara */
}

.contente h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.contente p {
  font-size: 1.2rem;
}
.whatsapp-button {
  z-index: 1; /* Coloca acima de outros elementos */
  background-color: transparent;
  color: white;
  /* padding: 10px 20px; */
  border: 1px solid white;
  border-radius: 15px;
  /* box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2); */
}

.whatsapp-button a {
  text-decoration: none;
  color: white;
}

.whatsapp-button i {
  margin-right: 10px;
}
</style>
