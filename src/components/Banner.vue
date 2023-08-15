<template>
  <div class="efeito-sobre"></div>
  <div class="banner-container">
    <div class="banner-overlay">
        <img
          src="@/assets/banner-img-1.png"
          class="img-fluid"
          alt="Responsive Banner"
        />
        <div class="logo-permutas">
            <div class="row">
                <div class="col">
                    <img src="@/assets/logo-permutas.png" alt="Logo">
                </div>
                <div class="col descricao-logo-permutas">
                    Conheça nossos imóveis que estão <br>
                    <span style="white-space: nowrap;">disponíveis para negócios em permuta.</span>
                    <button class="btn-safe mt-3 px-4 py-2">Imóveis disponíveis</button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "Banner",
};
</script>
  
  <style scoped>
.banner-overlay {
  position: relative;
  display: inline-block;
}

.banner-overlay::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(
    0,
    0,
    0,
    0.6
  ); /* Aqui você pode ajustar a cor e a opacidade */
  z-index: 1; /* Certifique-se de que a máscara esteja abaixo da imagem */
}
.banner-container {
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  /* margin-top: 4%; */
  position: relative;
}
.logo-permutas {
  position: absolute;
  top: 50%; /* Coloca o logo no meio vertical */
  left: 50%; /* Coloca o logo no meio horizontal */
  transform: translate(-50%, -50%);
  z-index: 2; /* Certifique-se de que o logo esteja acima da máscara */
}
.logo-permutas img {
    width: 250px;
}
.descricao-logo-permutas {
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
    font-weight: 500;
    font-family: "Exo 2";
    position: relative;
    margin-top: 10%; /* Coloca o logo no meio vertical */
}
.btn-safe {
    border: 2px solid white;
    background-color: transparent;
    color: white;
    border-radius: 10px;
}
</style>
  