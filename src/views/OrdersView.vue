<template>
  <template v-if="orders == null">
    <Loading />
  </template>
  <template v-else>
    <template v-for="order in orders" :key="order.id">
      <Orders :itens="order.itens">
        <template #Name>
          {{order.cliente.nome}}
        </template>
        <template #Date>
          {{formatDate(order.dataEmissao)}}
        </template>
        <template #TotalValue>
          {{formatCurrency(order.valorTotal)}}
        </template>
      </Orders>
    </template>
  </template>
</template>

<script setup>
import { onMounted, ref } from "vue";
import api from '../axios/index';
import { formatDate,formatCurrency } from '../utils'


const orders = ref(null)
async function getOrders() {
  let response = await api('pedidos');

  if(response.data){
    //Fake time para simular delay da Api
    setTimeout(() => {
      orders.value = response.data;
      console.log(orders.value);
    }, 2000);
  }
}

onMounted(() => {
  getOrders();
})
</script>

<style lang="scss">
</style>