<script setup>
import { RouterLink, RouterView } from "vue-router";
import HomeView from "./views/HomeView.vue";
</script>

<template>
  <!-- Navigation -->
  <nav
    class="navbar navbar-expand-lg navbar-light bg-dark shadow fixed-top text-white"
    style="
      background-color: rgba(0, 0, 0, 0.4) !important;
      color: white !important;
    "
  >
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="@/assets/logo.png" alt="Logo" />
      </a>
      <button
        class="navbar-toggler"
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
<style>
/* .masthead {
  height: 100vh;
  min-height: 500px;
  background-image: url('https://source.unsplash.com/BtbjCFUvBXs/1920x1080');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
} */
</style>
