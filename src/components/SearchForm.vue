<template>
  <form @submit.prevent="submitForm">
    <div class="row">
      <div class="col-md-3 col-sm-12 my-1">
        <label for="propertyType">Tipo do Imóvel</label>
        <select
          id="propertyType"
          class="form-control"
          v-model="selectedPropertyType"
        >
          <option value="casa">Casa</option>
          <option value="apartamento">Apartamento</option>
          <!-- Adicione mais opções de tipo de imóvel, se necessário -->
        </select>
      </div>
      <div class="col-md-3 col-sm-12 my-1">
        <label for="neighborhood">Bairro</label>
        <select
          id="neighborhood"
          class="form-control"
          v-model="selectedNeighborhood"
        >
          <option value="bairro1">Bairro 1</option>
          <option value="bairro2">Bairro 2</option>
          <!-- Adicione mais opções de bairros, se necessário -->
        </select>
      </div>
      <div class="col-md-3 col-sm-12 my-1">
        <label for="value">Valor</label>
        <select id="value" class="form-control" v-model="selectedValue">
          <option value="100000">Até R$100,000</option>
          <option value="200000">Até R$200,000</option>
          <!-- Adicione mais opções de valores, se necessário -->
        </select>
      </div>
      <div class="col-md-3 col-sm-12 my-1">
        <br />
        <button class="btn btn-success w-100" type="submit">Buscar</button>
      </div>
    </div>
  </form>
</template>
  
  <script>
export default {
  data() {
    return {
      selectedPropertyType: "casa",
      selectedNeighborhood: "bairro1",
      selectedValue: "100000",
    };
  },
  methods: {
    submitForm() {
      const searchCriteria = {
        propertyType: this.selectedPropertyType,
        neighborhood: this.selectedNeighborhood,
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
  