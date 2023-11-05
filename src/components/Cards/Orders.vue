<template>
  <div class="order">
    <div class="order__user">
      <h1 class="user__name">
        <slot name="Name"/>
      </h1>
    </div>

    <div class="order__info">
      <h2 class="info__date">
        <small>Data:</small>
        <slot name="Date" />
      </h2>

      <h2 class="info__totalValue">
        <small>Total:</small>
        <slot name="TotalValue"/>
      </h2>
    </div>

    <div class="order__item">
      <template v-for="item in itens" :key="item.id">
        <div class="item__prod">
          <h2 class="prod__name">
            {{item.produto.descricao}}
          </h2>
          <div class="prod__value">
            <h3 class="value__total">
              {{item.subtotal}}
            </h3>
            <p class="value__count">
              {{item.valor}} * {{item.quantidade}}
            </p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const { itens } = defineProps(['itens']);
</script>

<style lang="scss">
@import '@/sass/ds.scss';

.order{
  border: $border $black;
  border-radius: $defaultRadius;
  padding: 1.5rem;

  .order__user{
    .user__name{
      font-size: $title;
      text-align: center;
      color: $blue500;
    }
  }

  .order__info{
    margin: 2rem 0;
    padding: 1rem 0;
    border: $border rgba($black,.5);
    display: flex;
    justify-content: space-between;
    padding: .5rem 1rem;
    border-radius: $innerRadius;
    h2{
      font-size: $subtitle;

      &.info__totalValue{
        color: $green;
      }

      small{
        color: $gray500;
        font-size: $caption;
        margin-right: .6rem;
      }
    }
  }

  .order__item{
    display: flex;
    justify-content: space-evenly;
    gap: 2rem;
    .item__prod{
      .prod__name {
        border-bottom: $border $black;
        padding: 0 2rem;
        margin-bottom: 1rem;
        font-size: $subtitle;
      }
      .prod__value{
        & > *{
          text-align: center;
        }
        .value__total{
          color: $green;
          font-size: $subtitle;
        }
        .value__count{
          color: $black;
          font-size: $caption;
        }
      }
    }
  }

  @media screen and (max-width: $mobile) {
    padding: 1.5rem .8rem;

    .order__info,
    .order__intem{
      padding: 0.5rem;
      flex-direction: column;
      align-items: center;
    }

    .order__item{
      .item__prod{
        .prod__name{
          font-size: 1.2rem;
          padding: 0 .8rem;
        }
      }
    }
  }
}
</style>