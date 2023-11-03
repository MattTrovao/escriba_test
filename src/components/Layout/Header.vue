<template>
  <header class="header">
    <div class="header__logo">
      <img src="../../assets/logo.svg" alt="Logo">
    </div>

    <div class="header__btn">
      <button>
        <font-awesome-icon :icon="['fas', 'user-plus']" />
      </button>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  @import '../../sass/ds.scss';

  .header{
    $size: 3.5rem;

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
      width: $size;
      height: $size;

      button{
        width: 100%;
        height: 100%;
        border: $border $yellow;
        border-radius: $defaultRadius;
        background: none;

        &:hover{
          border-radius: $innerRadius;

          svg{
            opacity: $opacity;
          }
        }

        svg{
          $svgSize: 70%;
      
          width: $svgSize;
          height: $svgSize;
          color: $black;
          transition: inherit;
        }
      }
    }

    @media screen and (max-width: $mobile) {
      padding: 1rem;
    }
  } 
</style>