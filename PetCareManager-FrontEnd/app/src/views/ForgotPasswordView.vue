<template>
    <img class="layout-logotip"
      src="../assets/registration_page/Logotip.svg"
      alt="mainpage-img"
        />
  <form id="authorization" action="https://localhost:7279/recovery" method="POST" class="form-wrapper">
      <div class="navigation-section">
          <span class="text">Забыли пароль? </span>
      </div>
      <div class="form-section">
        <div class="notification-section">
            <span class="text-info">Пожалуйста, введите Ваш Email,к которому привязан аккаунт.
                Вы получите письмо с ссылкой для восстановления аккаунта.</span>
        </div>
          <FormInput placeholder="Введите E-Mail" name="Email" form="recovery"></FormInput>
      </div>
      <input type="submit" value="Изменить пароль" class="form-button">
  </form>
</template>

<script>
  import FormInput from '@/components/FormInput.vue'

  export default {
      name: 'UserAuthorizationView',
      components: {
          FormInput
      }
  }
</script>

<style scoped lang="scss">

  .form-wrapper {
      align-items: center;
      text-align: center;
      max-width: 864px;
      width: 100%;
      background-color: #fce9e9;
      border-radius: 35px;
      box-sizing: border-box;
      margin: 0 auto;
  .layout-logotip{
      max-width:408px;
      max-height: 380px;
      display: flex;
}
  .navigation-section {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      border-bottom: 2px solid #E18383;
      padding: 15px 70px;

      a {
          font-family: "Cormorant Infant";
          font-size: 48px;
          color: black;
          text-decoration: none;

          &.router-link-exact-active {
              font-weight: bold;
          }
      }
  }

      .form-section {
          max-width: 864px;
          align-self: center;
          display: flex;
          flex-direction: column;
          align-items: center;
      }

      .form-button {
          max-width:675px;
          width:100%;
          max-height: 100px;
          font-family: "Sofia Sans";
          font-weight: 400;
          font-size: 40px;
          text-decoration: none;
          color: white;
          background-color: #E18383;
          border: none;
          border-radius: 7px;
          padding: 5px 20px;
          margin:auto;
          margin-bottom: 60px;
          margin-top: 60px;
          cursor: pointer;

      }
  }
  .text{

    font-family: "Cormorant Infant";
    font-size: 48px;
    color: black;
    text-decoration: none;

  }
  .text-info{
    font-family: Cormorant Infant;
    font-size: 40px;
    font-weight: 400;
    line-height: 48px;
    letter-spacing: 0.03em;
    text-align: left;

  }
  .notification-section{
    max-width: 675px;
    max-height: 195px;
    background: #EDD9D9;
    border-radius: 15px;
    margin-top:60px;
  }
  .Forgot-Password {
  margin-top: 20px;
  margin-bottom:20px;
  color: rgba(66, 66, 66, 1);
  width: 210px;
  height: auto;
  display:flex;
  position: relative;
  font-size: 25px;
  font-style: Regular;
  text-align: left;
  font-family: Content;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: underline
}
</style>