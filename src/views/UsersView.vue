<template>
  <template v-if="users == null">
    <Loading />
  </template>
  <template v-else>
    <div class="bar">
      <Btn icon="New" @click="handleToggleModal"/>
    </div>

    <Modal @toggle-modal="handleToggleModal" :onScreen="modalVisible">
      <template #modalTitle>
        Adicionar Usuário
      </template>

      <template #modalContent>
        <div class="fields">
          <div class="fields__input">
            <label for="Nome">Nome <span class="required">*</span></label>
            <input type="text" name="Nome" v-model="userName" required>
          </div>

          <div class="fields__input">
            <label for="CPF">CPF <b>(Apenas os números)</b>  <span class="required">*</span></label>
            <input type="text" name="CPF" v-model="userDoc" maxlength="11" required>
          </div>

          <div class="fields__input">
            <label for="Ncto">Data de Nascimento <b>(DD/MM/AAAA)</b></label>
            <input type="text" name="Ncto" v-model="userNcto">
          </div>

          <Btn 
            icon="Save" 
            @click="saveUser" 
            :disabled="(userName.length < 1) || (userDoc.length !== 11)"
          />
        </div>
      </template>
    </Modal>

    <template v-for="user in users" :key="user.id">

      <User :userId="user.id">
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
</template>

<script setup>
import { onMounted, ref } from "vue";
import Swal from "sweetalert2";
import api from '../axios/index';
import { formatDate, formatDocument, formatDateDB, checkDoc } from '../utils'

//Get Users
const users = ref(null)
const usersLength = ref(null)
async function getUsers() {
  let response = await api('pessoas');

  if(response.data){
    //Fake time para simular delay da Api
    setTimeout(() => {
      users.value = response.data;
      usersLength.value = users.value.length
    }, 2000);
  }
}

//Modal
const modalVisible = ref(false);
const userName = ref('')
const userDoc = ref('')
const userNcto = ref('')

const handleToggleModal = () => {
  userName.value = ''
  userDoc.value = ''
  userNcto.value = ''
  modalVisible.value = !modalVisible.value;
};

//Create User
async function saveUser(){
  const cpf = formatDocument(userDoc.value)
  const docIsValid = checkDoc(cpf)

  if(docIsValid){
    let response = await api.post('pessoas',{
      id: usersLength.value + 1,
      nome: userName.value,
      cpf: formatDocument(userDoc.value),
      dataNasciento: formatDateDB(userNcto.value)
    });


    if(response.data){
      Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Usuário criado com sucesso!',
      })
      handleToggleModal()
      getUsers()
    }else{
      Swal.fire({
      icon: 'error',
      title: 'Erro!',
      text: 'Algum erro desconhecido ocorreu, entre em contato com o administrador do sistema.',
    })
    }
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Erro!',
      text: 'CPF inválido!',
    })
  }
}

onMounted(() => {
  getUsers();
})
</script>

<style lang="scss">
</style>