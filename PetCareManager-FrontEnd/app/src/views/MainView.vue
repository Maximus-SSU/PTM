<template>
  <div class="mainpage-intro">
    <div class="mainpage-section">
      <div class="mainpage-text">
        <span class="text-section-head">Дневник для домашних питомцев</span>
        <br /><br />
        <br /><br />
        <span class="text-section">Pet Care Manager - лучший способ заботиться о своем четвероногом друге!
          <br /><br />
          Здесь Вы сможете получить рекомендации по оптимальной диете для своего питомца,
          запланировать поход к ветеринару или груминг</span>
      </div>
      <div class="mainpage-registration">
          <RouterLinkButton link="/userRegistration" title="Зарегистрироваться"></RouterLinkButton>
      </div>
    </div>
  </div>
  <div class="mainpage-img">
    <img src="../assets/mainpage-img.png" alt="mainpage-img" class="img">
  </div>
</template>

<script>
  import RouterLinkButton from '@/components/RouterLinkButton.vue'

  export default {
    name: 'IndexView',
    components: {
      RouterLinkButton
    }
  }
</script>

<style scoped lang="scss">
  .mainpage-section {
    display: flex;
    flex-direction: column;
    column-gap: 50px;
    align-items: center;
    justify-content: space-between;
  }

  .mainpage-text {
    margin-right: 140px;
  }

  .text-section-head{
    font-family: Neucha;
    font-size: 100px;
    font-weight: 400;
    line-height: 110px;
    letter-spacing: 0em;
    text-align: left;
    color:#000000;
  }
  .text-section {
    max-height: 354px;
    max-width: 961px;
    font-family: Neucha;
    font-size: 50px;
    font-weight: 400;
    line-height: 55px;
    letter-spacing: 0em;
    text-align: left;
    color:#000000;

  }

  .mainpage-registration {
    margin-top: 100px;
    a {
      text-decoration: none;
    }
  }

  .mainpage-img {
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    .img {
      max-width: 1000px;
      width: 100%;
    }
  }
</style>