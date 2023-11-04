<template>
  <footer class="footer">
    <Container>
      <p>Site criado para teste na Escriba Curitiba por Matheus Trovão Consentino</p>
    </Container>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/sass/ds.scss';

.footer{
  padding-top: 5rem;

  p{
    font-size: $caption;
    color: $gray500;
    text-align: center;
  }
}
</style>