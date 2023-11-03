<template>
  <div class="container">
    <div class="row">
      <slot />   
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
.container{
  max-width: 1280px;
  width: 85%;
  margin: 0 auto;
  padding: 2.5vh 0;
  
  .row{
    padding: 0 1vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;

    & > * {
      flex: 1 auto;
    }
  }
}
</style>