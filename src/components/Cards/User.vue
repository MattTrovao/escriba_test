<template>
  <div class="card">
    <div class="card__picture">
      <font-awesome-icon :icon="['fas', 'user-tie']" />
    </div>
    <div class="card__data">
      <div class="data__name">
        <h2>
          <slot name="Name"/>
        </h2>
      </div>
      <div class="data__doc">
        <p>
          <slot name="Doc" />
        </p>
        <p>
          <slot name="Ncto" />
        </p>
      </div>
    </div>

    <div class="card__btn">
      <Btn icon="Edit" @click="editUser"/>
      <Btn icon="Delete" @click="deleteUser"/>
    </div>
  </div>

  <Modal @toggle-modal="editUser" :onScreen="modalVisible">
    <template #modalTitle>
      Editar Usuário
    </template>

    <template #modalContent>
      <div class="fields">
        <div class="fields__input">
          <label for="Nome">Nome <span class="required">*</span></label>
          <input type="text" name="Nome" v-model="editName" required>
        </div>

        <div class="fields__input">
          <label for="CPF">CPF <b>(Apenas os números)</b>  <span class="required">*</span></label>
          <input type="text" name="CPF" v-model="editDoc" maxlength="11" required>
        </div>

        <div class="fields__input">
          <label for="Ncto">Data de Nascimento <b>(DD/MM/AAAA)</b></label>
          <input type="text" name="Ncto" v-model="editNcto">
        </div>

        <Btn 
          icon="Save" 
          @click="updateUser"
          :disabled="(editName.length < 1) || (editDoc.length !== 11)"
        />
      </div>
    </template>
  </Modal>

</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";
import Swal from "sweetalert2";
import api from '../../axios/index';
import { cleanDocument, formatDocument, checkDoc , formatDate, formatDateDB } from '../../utils'

const { userId } = defineProps(['userId']);
const userEmits = defineEmits(['deletion-success', 'edit-success']);

//Delete User
async function deleteUser() {
  let response = await api.delete(`pessoas/${userId}`);

  if(response.status == 200){
    Swal.fire({
      icon: 'success',
      title: 'Sucesso!',
      text: 'Usuário deletado com sucesso!',
    })
    userEmits('deletion-success');
  }else{
      Swal.fire({
      icon: 'error',
      title: 'Erro!',
      text: 'Algum erro desconhecido ocorreu, entre em contato com o administrador do sistema.',
    })
  }
}

//Edit User
const modalVisible = ref(false);
const editName = ref('')
const editDoc = ref('')
const editNcto = ref('')

//Get Data
async function editUser() {
  let response = await api(`pessoas/${userId}`);

  editName.value = response.data.nome
  editDoc.value = cleanDocument(response.data.cpf)
  editNcto.value = formatDate(response.data.dataNascimento)

  modalVisible.value = !modalVisible.value;
};

async function updateUser(){
  const cpf = formatDocument(editDoc.value)
  const docIsValid = checkDoc(cpf)

  if(docIsValid){
    let response = await api.put(`pessoas/${userId}`,{
      id: userId,
      nome: editName.value,
      cpf: formatDocument(editDoc.value),
      dataNascimento: formatDateDB(editNcto.value)
    });


    if(response.data){
      Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Usuário editado com sucesso!',
      })
      userEmits('edit-success');
      editName.value = ''
      editDoc.value = ''
      editNcto.value = ''
      modalVisible.value = !modalVisible.value;
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

</script>

<style lang="scss">
@import '@/sass/ds.scss';

.card{
  $size: 5rem;

  background: $gray100;
  border-radius: $defaultRadius;
  padding: .8rem 1rem;
  display: grid;
  grid-template-columns: $size 1fr;
  align-items: center;
  gap: .5rem;
  min-width: 25%;
  position: relative;

  .card__picture{
    $picSize: calc($size - 1rem);

    width: $picSize;
    height: $picSize;
    border-radius: $innerRadius;
    border: $border $black;
    display: flex;
    align-items: center;
    
    svg{
      $svgSize: 75%;

      width: $svgSize;
      height: $svgSize;
      margin: 0 auto;
      color: $black;
    }
  }

  .card__data{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: .5rem;
    padding: 0 .5rem;

    .data__name{
      h2{
        font-size: $title;
        color: $blue500;
        font-weight: $bold;
      }
    }

    .data__doc {
      p {
        font-size: $caption;
        font-weight: $regular;
        margin-bottom: .2rem;

        &:last-of-type{
          margin: 0;
        }
      }
    }
  }

  .card__btn{
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    position: absolute;
    right: 1rem;
  }
}
</style>