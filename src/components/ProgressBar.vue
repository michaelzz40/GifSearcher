<template>
  <div :class="{ progressbar: isLoading }"></div>
</template>

<script>
export default {
  props: ["isLoading", "isFinished"]
};
</script>

<style scoped>
.progressbar {
  position: fixed;
  top: 0;
  height: 5px;
  z-index: 6;
  background-color: var(--border-color);
  animation: loading 1.5s ease;
}

@keyframes loading {
  0% {
    width: 0%;
  }
  30% {
    width: 30%;
  }
  70% {
    width: 70%;
  }
  100% {
    width: 100%;
  }
}
</style>
