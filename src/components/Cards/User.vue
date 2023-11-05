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
      <Btn icon="Edit" />
      <Btn icon="Delete" @click="deleteUser"/>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";
import Swal from "sweetalert2";
import api from '../../axios/index';

const { userId } = defineProps(['userId']);
const userDelete = defineEmits(['deletion-success']);


async function deleteUser() {
  let response = await api.delete(`pessoas/${userId}`);

  if(response.status == 200){
    Swal.fire({
      icon: 'success',
      title: 'Sucesso!',
      text: 'Usuário deletado com sucesso!',
    })
    userDelete('deletion-success');
  }else{
      Swal.fire({
      icon: 'error',
      title: 'Erro!',
      text: 'Algum erro desconhecido ocorreu, entre em contato com o administrador do sistema.',
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