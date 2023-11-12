<template>
  <div id="home">
    <b-carousel
      id="carousel"
      v-model="slide"
      :interval="5000"
      indicators
      fade
    >
      <b-carousel-slide img-src="../assets/images/20220519.jpg"></b-carousel-slide>
      <b-carousel-slide img-src="../assets/images/20211225.jpg"></b-carousel-slide>
      <b-carousel-slide img-src="../assets/images/20220310.jpg"></b-carousel-slide>
      <b-carousel-slide img-src="../assets/images/20230623.jpg"></b-carousel-slide>
    </b-carousel>

    <div class="link-area">
      <img class="foot" src="../assets/images/BLACKCAT_foot.svg">
      <div class="link-group">
        <div class="link">
          <a target="_blank" href="https://twitter.com/HeyMiao_hpmi">
            <img src="../assets/images/twitter-brands.svg" alt="Twitter">
          </a>
        </div>
        <div class="link">
          <a target="_blank" href="https://www.pixiv.net/users/4954908">
            <img src="../assets/images/pixiv.svg" alt="Pixiv">
          </a>
        </div>
        <div class="link">
          <a href="mailto:heymiao.illust@gmail.com">
            <img src="../assets/images/envelope-solid.svg" alt="E-mail">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
