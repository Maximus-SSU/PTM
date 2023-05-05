<!-- <template>
    <footer>
        <div class="footer-text">
            <div class="title-section">Pet Care Manager</div>
            <div class="rights-section">© Pet Care Manager. 2023</div>
        </div>
        <div class="footer-contacts">
            <a href="mailto:pet.care.manager.support@gmail.com" class="contancts">pet.care.manager.support@gmail.com</a>
        </div>
    </footer>
</template>

<style>
    footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 45px;
        border-top: 1px solid #D78A8A;
        padding: 0 20px;

        .footer-text {
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        .title-section {
            font-family: "Handlee";
            font-size: 30px;
            margin-right: 30px;
        }

        .rights-section {
            font-family: "Cormorant Infant";
            font-size: 20px;
        }

        .contancts {
            font-family: "Cormorant Infant";
            font-size: 20px;
            text-decoration: none;
            color: black;
        }
    }
</style> -->
<template>
<footer class ="footer-line"></footer>
<footer class="footer-group">
<div class="footer-names">
  <img
      src="../assets/footer/Name2.svg"
      alt="Name-Logo"
      class="footer-name-logo"
    />  
  <span class="footer-text1">
  <span>© Pet Care Manager. 2023</span>
</span>
</div>
<!-- <span class="footer-text2">
  <span>pet.care.manager.support@gmail.com</span>
</span> -->
<a href="mailto:pet.care.manager.support@gmail.com" 
class="footer-contacts">pet.care.manager.support@gmail.com</a>
</footer>
</template>
<style scoped>
.footer-group {
    width: 100%;
    height: 45px;
    flex: 0 0 auto;
    width:100%;
    display: flex;
    position: relative;
    align-items: flex-start;
    justify-content: space-between;
    background-color: rgba(237, 217, 217, 1);
  }

  .footer-names{
  position: relative;
  align-items: flex-start;
  display: flex;
  min-width:700px;
  }
  .footer-line {
    width: 100%;
    height: 1px;
    color: rgba(0, 0, 0, 1);
    position: relative;
    background-color: black;
  }
  .footer-logo{
    position: relative;
  }
  .footer-text1 {
    margin-top: 10px;
    color: rgba(0, 0, 0, 1);
    height: auto;
    position: relative;
    margin-left: 10px;
    font-size: 20px;
    font-style: Bold;
    font-family: Cormorant Infant;
    font-weight: 700;
    line-height: normal;
    font-stretch: normal;
    text-decoration:none;
  }
  .footer-contacts {
    color: rgba(0, 0, 0, 1);
    height: auto;
    position: relative;
    /* margin-top: 10px; */
    font-size: 20px;
    font-style: Bold;
    text-align: right;
    font-family: Cormorant Infant;
    font-weight: 700;
    line-height: normal;
    font-stretch: normal;
    text-decoration: none;
  }
  
  
  .footer-name-logo {
    margin-top: 5px;
    width: 227px;
    height: 40px;
    display: flex;
    position: relative;
    align-items: flex-start;
    flex-shrink: 1;
  }
  
</style>