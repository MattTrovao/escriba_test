<template>
  <header class="header">
    <router-link to="/" class="header__logo">
      <img src="../../assets/logo.svg" alt="Logo">
    </router-link>

    <div class="header__btn">
      <router-link to="/">

        <font-awesome-icon :icon="['fas', 'money-bill-wave']" />
        <span>Produtos</span>
      </router-link>
      
      <router-link to="/users">
        <font-awesome-icon :icon="['fas', 'user']" />
        <span>Usuários</span>
      </router-link>

      <router-link to="orders">
        <font-awesome-icon :icon="['fas', 'list-ul']" />
        <span>Pedidos</span>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/sass/ds.scss';

.header{
  $size: 4.5rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  width: 90%;
  margin: 0 auto;
  padding: 1rem 2rem;

  .header__logo{
    width: $size;
    height: $size;
    
    img{
      width: 100%;
      height: 100%;
    }
  }

  .header__btn{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2.5rem;


    a{
      width: $size;
      height: $size;
      border: $border $yellow;
      border-radius: $defaultRadius;
      background: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: .2rem;

      &:hover,
      &.router-link-active{
        border-radius: $innerRadius;

        svg,span{
          opacity: $opacity;
          color: $gray500;
        }
      }

      &.router-link-active{
        border-color: $gray500
      }

      svg{
        $svgSize: 50%;
    
        width: $svgSize;
        height: $svgSize;
        color: $black;
      }

      span{
        font-size: $caption;
        color: $black;
        transition: inherit;
        text-transform: capitalize;
      }

      @media screen and (max-width: $mobile) {
        width: 3.2rem;
        height: 3.2rem;

        span{
          font-size: .6rem;
        }
      }
    }
  }

  @media screen and (max-width: $mobile) {
    padding: 1rem;
  }
} 
</style>