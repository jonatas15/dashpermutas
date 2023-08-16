<template>
  <form @submit.prevent="submitForm">
    <div class="row">

      <div class="col-md-5 col-sm-12 my-1">
        <select id="suaPermuta" class="form-control" v-model="suaPermuta">
          <option value="">Informe aqui o tipo da sua permuta</option>
          <option value="casa">Casa</option>
          <option value="apartamento">Apartamento</option>
          <!-- Adicione mais opções de tipo de imóvel, se necessário -->
        </select>
      </div>
      <div class="col-md-1 col-sm-12 my-1">com ></div>
      <div class="col-md-5 col-sm-12 my-1">
        <select id="trocaPor" class="form-control" v-model="trocaPor">
          <option value="">Informe aqui o perfil do imóvel que estás buscando</option>
          <option value="bairro1">Bairro 1</option>
          <option value="bairro2">Bairro 2</option>
          <!-- Adicione mais opções de bairros, se necessário -->
        </select>
      </div>
      <div class="col-md-1 col-sm-12 my-1">
        
        <button class="btn btn-success w-100" type="submit">Buscar</button>
      </div>
    </div>
  </form>
</template>
  
  <script>
export default {
  data() {
    return {
      suaPermuta: "",
      trocaPor: "",
      selectedValue: "100000",
    };
  },
  methods: {
    submitForm() {
      const searchCriteria = {
        propertyType: this.suaPermuta,
        neighborhood: this.trocaPor,
        value: this.selectedValue,
      };
      // Você pode emitir um evento aqui ou fazer outra ação com os dados do formulário
      this.$emit('search', searchCriteria);
    },
  },
};
</script>
  
  <style scoped>
/* Adicione estilos conforme necessário */
.form-row {
  display: flex;
  gap: 1rem;
}
.form-group {
  flex: 1;
}
</style>
  