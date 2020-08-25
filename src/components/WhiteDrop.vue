<template>
  <div class="white-drop grey lighten-4">
    <span class="dot d1"></span>
    <span class="dot d2"></span>
    <span class="dot d3"></span>
    <span class="dot d4"></span>
    <span class="dot d5"></span>
  </div>
</template>

<style scoped>
.white-drop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.dot {
  opacity: 0;
  height: 25px;
  width: 25px;
  margin: 4em 10px;
  border-radius: 100%;
  background-color: var(--border-color);
}

.dot.d1 {
  animation: jump 2.4s 1.2s ease infinite;
}

.dot.d2 {
  animation: jump 2.4s 0.9s ease infinite;
}
.dot.d3 {
  animation: jump 2.4s 0.6s ease infinite;
}
.dot.d4 {
  animation: jump 2.4s 0.3s ease infinite;
}
.dot.d5 {
  animation: jump 2.4s ease infinite;
}

@keyframes jump {
  0% {
    transform: translateX(-25px);
    opacity: 0;
  }
  50% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(25px);
    opacity: 0;
  }
}
</style>
