<!-- <template>
    <header>
        <div class="logotype-section">
            <img src="../assets/logotype.svg" alt="logotype" class="logotype-image">
            <span class="logotype-title">Pet Care Manager</span>
        </div>
        <div class="navigation-section">
            <router-link to="/">Главная</router-link>
            <router-link to="/about">О нас</router-link>
        </div>
    </header>
</template>

<style lang="scss">
    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 100px;
        background-color: #DC9D9D;
        color: black;
        padding: 0 20px;

        .logotype-section {
            display: flex;
            flex-direction: row;
            align-items: center;

            .logotype-image {
                width: 100px;
                height: 100px;
                margin-right: 15px;
            }

            .logotype-title {
                font-family: "Handlee";
                font-weight: 400;
                font-size: 70px;
            }
        }

        a {
            font-family: "Cormorant Infant";
            font-size: 48px;
            text-decoration: none;
            color: black;
            margin: 0 30px;

            &.router-link-exact-active {
                color: white;
            }
        }
    }
</style> -->
<template>
    <header class="header">
        <div class="logotip">
          <img
            src="../assets/header/Logo.svg"
            alt="Logo"
            class="header_logo"
          />
            <img
              src="../assets/header/LogoName.svg"
              alt="Name"
              class="header_name"
            />  
        </div>
        <div class="header_menu">
          <img
            src="../assets/header/Menu.svg"
            alt="MenuPicture"
            class="header_menupic"
          />
        </div>
    </header>
</template>

<style scoped>
.header {
    top: 0px;
    width: 100%;
    height: 100px;
    
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-shrink: 1;
    background-color: rgba(225, 131, 131, 1);;
  }
  
.logotip {
  top: 6px;
  left: 15px;
  width: 518px;
  height: 88px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 1;
}
.header_name {
  width: 418px;
  height: 64px;
  left: 15px;
  top: 18px;
  position: relative;
  align-items: flex-start;
}


.header_logo {
  top: 0px;
  left: 0px;
  width: 88px;
  height: 88px;
  position: relative;
}
.header_menu {
  width: 55px;
  padding: 26px 40px 26px 0px;
  height: 47px;
}
.header_menupic {
  width: 55px;
  height: 47px;
  border-radius: 8px;
}
</style>