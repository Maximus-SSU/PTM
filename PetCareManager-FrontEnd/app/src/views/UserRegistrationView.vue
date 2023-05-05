<template>
      <img class="layout-logotip"
        src="../assets/registration_page/Logotip.svg"
        alt="mainpage-img"
          />
    <form id="registration" action="https://localhost:7279/user" method="POST" class="form-wrapper">
        <div class="navigation-section">
            <router-link to="/userAuthorization">Вход</router-link>
            <router-link to="/UserRegistration">Регистрация</router-link>
        </div>
        <div class="form-section">
            <FormInput placeholder="Введите имя" name="Name" form = "registration"></FormInput>
            <FormInput placeholder="Введите E-Mail" name="Email" form="registration"></FormInput>
            <FormInput placeholder="Введите пароль" name="Password" form="registration"></FormInput>
            <FormInput placeholder="Повторите пароль" name="RepeatPassword" form="registration"></FormInput>
        </div>
        <input type="submit" value="Зарегистрироваться" class="form-button">
    </form>
</template>

<script>
    import FormInput from '@/components/FormInput.vue'

    export default {
        name: 'UserRegistrationView',
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
        align-items: center;
        justify-content: center;
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
</style>