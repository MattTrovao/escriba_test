<template>
  <template v-if="onScreen">
    <div class="mask"></div>

    <div class="modal">
      <div class="modal__close">
        <Btn icon="Close" @click="closeModal"/>
      </div>

      <div class="modal__header">
        <h2>
          <slot name="modalTitle" />
        </h2>
      </div>

      <div class="modal__body">
        <slot name="modalContent" />
      </div>
    </div>
  </template>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const { onScreen } = defineProps({
  onScreen: {
    type: Boolean,
    default: false,
  }
});

const showModal = defineEmits(['toggle-modal']);

const toggleModal = () => {
  showModal('toggle-modal');
};

const closeModal = () => {
  showModal('toggle-modal'); 
}
</script>

<style lang="scss">
@import '@/sass/ds.scss';

.mask{
  width: 100vw;
  height: 100vh;
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba($black, .7);

  animation: toogleVision ease-in-out .4s;
}

.modal{
  position: fixed;
  width: 80vw;
  z-index: 200;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding: 2rem;
  border-radius: $defaultRadius;
  background: $white;

  animation: toogleVision ease-in-out .45s;


  .modal__close{
    $location: 1rem;

    position: absolute;
    top: $location;
    right: $location;
  }

  .modal__header{
    margin-bottom: 2rem;
    h2{
      font-size: $title;
      font-weight: $bold;
    }
  }

  @media screen and (max-width: $mobile) {
    width: 70vw;
  }
}

@keyframes toogleVision {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>