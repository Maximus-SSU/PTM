<template>
    <img class="layout-logotip"
      src="../assets/registration_page/Logotip.svg"
      alt="mainpage-img"
        />
  <form id="authorization" action="https://localhost:7279/user" method="POST" class="form-wrapper">
      <div class="navigation-section">
          <router-link to="/UserAuthorization">Вход</router-link>
          <router-link to="/UserRegistration">Регистрация</router-link>
      </div>
      <div class="form-section">
          <FormInput placeholder="Введите E-Mail" name="Email" form="authorization"></FormInput>
          <FormInput placeholder="Введите пароль" name="Password" type="password" form="authorization"></FormInput>
          <router-link to="/ForgotPassword" class="Forgot-Password">Забыли пароль?</router-link> 
      </div>
      <input type="submit" value="Войти" class="form-button">
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

<style lang="scss">

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