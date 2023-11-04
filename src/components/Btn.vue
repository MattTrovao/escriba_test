<template>
  <button class="btn" :class="iconBtn">
    <template v-if="iconBtn == 'New'">
      <font-awesome-icon :icon="['fas', 'plus']" />
    </template>
    <template v-else-if="iconBtn == 'Save'">
      <font-awesome-icon :icon="['fas', 'floppy-disk']" />
    </template>
    <template v-else-if="iconBtn == 'Edit'">
      <font-awesome-icon :icon="['fas', 'pencil']" />
    </template>
    <template v-else-if="iconBtn == 'Delete'">
      <font-awesome-icon :icon="['fas', 'trash']" />
    </template>
        <template v-else-if="iconBtn == 'Close'">
      <font-awesome-icon :icon="['fas', 'x']" />
    </template>
    <template v-else>
      <font-awesome-icon :icon="['fas', 'ellipsis']" />
    </template>
  </button>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const { icon } = defineProps({
  icon: {
    type: String,
    default: 'generic',
    validator: (value) => [
      'New',
      'Save',
      'Edit',
      'Delete',
      'Close',
      'Generic'
    ].includes(value),
  }
});

const iconBtn = icon === 'generic' ? 'Generic' : icon;
</script>

<style lang="scss">
@import '@/sass/ds.scss';

.btn{
  $size: 2rem;

  border-radius: $defaultRadius;
  border: $border $gray500;
  width: $size;
  height: $size;
  background: $white;

  &.New,
  &.Save{
    border-color: $green;
    svg{
      color: $green;
    }
  }
  &.Edit{
    border-color: $yellow;
    svg{
      color: $yellow;
    }
  }
  &.Delete,
  &.Close{
    border-color: $red;
    svg{
      color: $red;
    }
  }

  &:not(:disabled):hover{
    border-radius: $innerRadius;

    svg{
      opacity: $opacity;
    }
  }

  &:disabled{
    cursor: not-allowed;
    opacity: $opacity;
  }

  svg{
    color: $gray500;
  }
}
</style>