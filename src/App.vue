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
  <div>
    <HomeView />
  </div>
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
</style>
