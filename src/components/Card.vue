<template>
  <div class="card">
    <div class="card__picture">
      <font-awesome-icon :icon="['fas', 'user-tie']" />
    </div>
    <div class="card__data">
      <div class="data__name">
        <h2>John Doe</h2>
      </div>
      <div class="data__doc">
        <p>000.000.000-00</p>
        <p>00/00/0000</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../sass/ds.scss';

.card{
  $size: 5rem;

  background: $gray100;
  border-radius: $defaultRadius;
  padding: .8rem;
  display: grid;
  grid-template-columns: $size 1fr;
  align-items: center;
  gap: 1rem;
  min-width: 15%;

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
}
</style>