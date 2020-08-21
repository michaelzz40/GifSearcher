<template>
  <div>
    <transition name="fade">
      <div class="alert" v-if="message">
        <h1 class="alert-text">
          <font-awesome-icon :icon="['fa', 'check-circle']"></font-awesome-icon>
          Copied to Clipboard
        </h1>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["message"]
};
</script>

<style scoped>
.alert-text {
  text-transform: uppercase;
  color: rgba(255, 255, 255);
  text-align: center;
  font-size: 1em;
  padding: 5px;
}

.alert {
  position: fixed;
  top: 5%;
  right: 5%;
  padding: 10px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(255, 199, 199, 0.9);
  border-radius: 20px;
  z-index: 6;
}

.alert-link {
  text-decoration: none;
  color: var(--primary-text);
}

.fade-enter-active {
  animation: fadeIn 0.3s ease-out;
}

.fade-leave-active {
  animation: fadeOut 0.3s ease-in;
}

@keyframes fadeIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes fadeOut {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
</style>
