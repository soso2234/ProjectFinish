<template>
<router-view/>
</template>

<style>
@import './css/style.css';
@import './css/tiny-slider.css';
@import './css/aos.css';

@import './fonts/flaticon/font/flaticon.css';
@import './fonts/icomoon/style.css';

/* 구글 폰트 */
@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');
@import url('https://fonts.gstatic.com');
@import url('https://fonts.googleapis.com');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>
