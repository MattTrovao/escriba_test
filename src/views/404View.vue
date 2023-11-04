<template>
  <Container>
    <div class="notFound">
      <h1>404</h1>
      <h2>ERRO! A Página solicitada não existe ou não foi encontrada.</h2>
    </div>
  </Container>
</template>

<script>
</script>

<style lang="scss">
@import '@/sass/ds.scss';

.notFound{
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1{
    font-size: 10rem;
    text-align: center;
    color: $red;
  }
  h2{
    font-size: 2.5rem;
    text-align: center;
  }
}
</style>