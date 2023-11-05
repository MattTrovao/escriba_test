<template>
  <div class="loading">
    <font-awesome-icon :icon="['fas', 'gear']" spin />
    <p>
      Carregando, por favor aguarde
    </p>
  </div>
</template>

<style lang='scss'>
  @import '@/sass/ds.scss';

  .loading{
    border-radius: $defaultRadius;
    background: $green;
    padding: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    & > *{
      color: $bg;
    } 

    svg{
      $size: 1.5rem;
      width: $size;
      height: $size;
    }
    p{
      font-size: $subtitle;
      font-weight: $bold;
    }
  }
</style>