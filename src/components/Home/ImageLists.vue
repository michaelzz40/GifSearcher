<template>
  <div>
    <Alert :message="message"></Alert>
    <div class="images-section ">
      <WhiteDrop v-if="isLoading"></WhiteDrop>
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
import Alert from "../Alert";
import WhiteDrop from "../WhiteDrop";
export default {
  data() {
    return {
      message: ""
    };
  },
  props: ["gifs", "isLoading"],
  components: {
    Images: Images,
    Alert: Alert,
    WhiteDrop: WhiteDrop
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
  position: relative;
  padding: 2em 6em;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
}

span {
  color: var(--primary-text);
}
@media screen and (min-width: 376px) and (max-width: 960px) {
  .images-section {
    padding: 2em 2em;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 600px) {
  .images-section {
    padding: 2em 1em;
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
