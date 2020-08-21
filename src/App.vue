<template>
  <div id="app">
    <Header></Header>
    <keep-alive>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </keep-alive>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header: Header,
    Footer: Footer
  }
};
</script>

<style>
:root {
  --primary-text: #222831;
  --secondary-text: #f6f6f6;
  --primary-background: #f6f6f6;
  --secondary-background: #ffe2e2;
  --border-color: #ffc7c7;
}

body {
  background-color: var(--background-color);
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

.fade-enter-active {
  animation: fadeIn 0.5s ease;
}

.fade-leave-active {
  animation: fadeOut 0.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
