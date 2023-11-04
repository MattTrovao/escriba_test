<template>
  <template v-if="products == null">
    <Loading />
  </template>
  <template v-else>
    <template v-for="product in products" :key="product.id">

      <Products>
        <template #Name>
          {{product.descricao}}
        </template>
        <template #Price>
          {{formatCurrency(product.valoUnitario)}}
        </template>
      </Products>

    </template>
  </template>
</template>

<script setup>
import { onMounted, ref } from "vue";
import api from '../axios/index';
import { formatCurrency } from '../utils'

const products = ref(null)
async function getProduct() {
  let response = await api('produtos');

  if(response.data){
    //Fake time para simular delay da Api
    setTimeout(() => {
      products.value = response.data;
    }, 2000);
  }
}

onMounted(() => {
  getProduct();
})

</script>

<style lang="scss">
</style>