<template>
  <button class="product">
    <div class="product__picture">
      <font-awesome-icon :icon="['fas', 'money-bill']" />
    </div>

    <div class="product__data">
      <div class="data__name">
        <h2>
          <slot name="Name" />
        </h2>
      </div>

      <div class="data__price">
        <h3>
          <slot name="Price" />
        </h3>
      </div>
    </div>
  </button>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/sass/ds.scss';


.product{
  border-radius: $defaultRadius;
  background: $blue100;
  padding: 1rem;

  &:hover{
    border-radius: $innerRadius;
    background: $blue300;
  }

  .product__picture{
    $size: 3.5rem;
    width: $size;
    height: $size;
    margin: 0 auto;

    svg{
      width: 100%;
      height: 100%;
      color: $black;
    }
  }

  .product__data{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .8rem;
    text-align: center;
    margin-top: 1rem;

    .data__name{
      h2{
        font-size: $title;
        font-weight: $bold;
        color: $black;
        text-align: center;
      }
    }

    .data__price{
      h3{
        font-size: $subtitle;
        font-weight: $bold;
        color: $green;
        text-align: center;
      }
    }
  }
}
</style>