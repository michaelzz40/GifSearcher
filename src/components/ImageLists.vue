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
    <div class="images-section">
      <Images
        @copied="message = $event"
        :key="gif.id"
        v-for="gif in gifs"
        :gif="gif"
      ></Images>
    </div>
  </div>
</template>

<script>
import Images from "./Images";
export default {
  data() {
    return {
      message: ""
    };
  },
  props: ["gifs"],
  components: {
    Images: Images
  },
  methods: {
    hideAlert() {
      this.message = "";
    }
  },
  watch: {
    message: function(value) {
      if (value) {
        setTimeout(this.hideAlert, 3000);
      }
    }
  }
};
</script>

<style scoped>
.images-section {
  padding: 2em 6em;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
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
}

span {
  color: var(--primary-text);
}

.alert-text {
  text-transform: uppercase;
  color: rgba(255, 255, 255);
  text-align: center;
  font-size: 1em;
  padding: 5px;
}

.alert-link {
  text-decoration: none;
  color: var(--primary-text);
}

.fade-enter-active {
  animation: fadeIn 0.3s;
}

.fade-leave-active {
  animation: fadeOut 0.3s;
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
