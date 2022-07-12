<template>
  <div id="app">
    <!-- 選單 -->
    <div id="menu">
      <b-navbar toggleable="lg" type="light" variant="warning">
        <!-- LOGO -->
        <b-navbar-brand to="/">
          <img class="blackcat-logo" src="./assets/images/BLACKCAT_logo.png">
          <span class="blackcat-name">BLACKCAT</span>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <!-- LINK -->
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
            <b-nav-item to="/original_gallery">Original Gallery</b-nav-item>
            <b-nav-item to="/fan_art_gallery">Fan Art Gallery</b-nav-item>
          </b-navbar-nav>

        <!-- 告示 -->
        <div id="notice">
          <p>
          ✦ 本站所有圖文無斷轉載、二次加工禁止。<br>
          ✦ 二次創作之作品版權皆屬原作與官方。<br>
          ✦ 本網站之創作與原作、官方無任何關係。<br>
          ✦ 全部圖文皆為本站管理者所有。<br>
          <span class="copyright">Copyright © BlackCat 2022</span>
          </p>
        </div>
        </b-collapse>
      </b-navbar>
    </div>

    <div id="main">
      <router-view></router-view>
    </div>

    <div id="footer">
      <p>Copyright © BlackCat 2022</p>
    </div>
  </div>
</template>
