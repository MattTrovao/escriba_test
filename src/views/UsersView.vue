<template>
  <Container>
    <template v-if="users == null">
      <Loading />
    </template>
    <template v-else>
      <template v-for="user in users" :key="user.id">

        <User>
          <template #Name>
            {{user.nome}}
          </template>
          <template #Doc>
            {{user.cpf}}
          </template>
          <template #Ncto>
            {{formatDate(user.dataNascimento)}}
          </template>
        </User>

      </template>
    </template>
  </Container>
</template>

<script setup>
import { onMounted, ref } from "vue";
import api from '../axios/index';
import { formatDate } from '../utils'


const users = ref(null)
async function getUsers() {
  let response = await api('pessoas');

  if(response.data){
    //Fake time para simular delay da Api
    setTimeout(() => {
      users.value = response.data;
    }, 2000);
  }
}

onMounted(() => {
  getUsers();
})
</script>

<style lang="scss">
</style>