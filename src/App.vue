<script setup>
import { RouterLink, RouterView } from "vue-router";
import HomeView from "./views/HomeView.vue";
</script>

<template>
  <!-- Navigation -->
  <nav
    class="navbar navbar-expand-lg navbar-light shadow fixed-top text-white"
    :style="{ backgroundColor: navBarColor }"
  >
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="@/assets/logo.png" alt="Logo" />
      </a>
      <button
        class="navbar-toggler bg-white"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item active">
            <a class="nav-link text-white" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="content">
    <HomeView />
  </div>
  <footer class="footer">
    <div class="row">
      <div class="col-12 footer-logo col-md-12">
        <center>
          <img src="@/assets/logo.png" alt="Logo">
        </center>
      </div>
      <div class="col-md-12">
        <br />
      </div>
      <div class="col-12 footer-text col-md-12">
        <p>Texto informativo 1</p>
        <p>Texto informativo 2</p>
        <p>Texto informativo 3</p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      navBarColor: 'rgba(0, 0, 0, .4) !important', // Cor de fundo inicial
    };
  },
  mounted() {
    window.addEventListener('scroll', this.changeNavBarColor);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.changeNavBarColor);
  },
  methods: {
    changeNavBarColor() {
      // Verifica a posição do scroll para determinar a cor de fundo da navbar
      if (window.scrollY > 400) {
        this.navBarColor = 'black !important'; // Cor de fundo quando a página é rolada para baixo
      } else {
        this.navBarColor = 'rgba(0, 0, 0, .4) !important'; // Cor de fundo quando a página é rolada para cima
      }
    },
  },
};
</script>

<style>
navbar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  transition: background-color 0.3s ease;
}
.content {
  /* Defina as propriedades de layout conforme necessário */
  margin-bottom: 150px; /* A altura aproximada do rodapé */
}

.footer {
  position: relative;
  bottom: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  z-index: 999; /* Certifique-se de que o rodapé esteja acima do conteúdo */
  border-top: 15px solid green;
}

.footer-logo img {
  /* max-width: 100px; */
  text-align: center;
}

.footer-text {
  text-align: center;
  /* margin-left: 20px; */
}
</style>
