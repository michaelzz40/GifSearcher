<template>
  <div>
    <ProgressBar :isLoading="isLoading"></ProgressBar>
    <div v-if="gif" class="random-section">
      <img :src="gif.image" alt="image" />
      <div class="card-link">
        <input type="text" :value="gif.image" readonly />
        <button
          type="button"
          v-clipboard:copy="gif.image"
          v-clipboard:success="onCopy"
          class="copy-button"
        >
          <font-awesome-icon :icon="['fa', 'copy']"
            >Copy Link</font-awesome-icon
          >
        </button>
      </div>
    </div>
    <div v-if="!isLoading && !gif" class="error-text">
      <h1>Error Fetching Image</h1>
    </div>
  </div>
</template>

<script>
import ProgressBar from "../components/ProgressBar";
import axios from "axios";
export default {
  data() {
    return {
      gif: null,
      isLoading: false
    };
  },
  components: {
    ProgressBar: ProgressBar
  },
  created() {
    this.isLoading = true;
    axios
      .get(
        `https://api.giphy.com/v1/gifs/random?api_key=${process.env.VUE_APP_API_KEY}`
      )
      .then(data => {
        const newGif = {
          id: data.data.data.id,
          image: `https://media.giphy.com/media/${data.data.data.id}/giphy.gif`
        };
        this.gif = newGif;
        setTimeout(() => {
          this.isLoading = false;
        }, 3000);
      })
      .catch(err => {
        console.error(err);
        this.isLoading = false;
      });
  }
};
</script>

<style scoped>
.random-section {
  padding: 4em 10em;
}

.error-text {
  position: relative;
  background: var(--secondary-background);
  margin: auto;
  width: 50%;
  padding: 4em 10em;
  border-radius: 10px;
  text-align: center;
}

.error-text::after {
  content: "";
  position: absolute;
  top: -15px;
  right: -15px;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
}

.error-text::before {
  content: "";
  position: absolute;
  bottom: -10px;
  left: -10px;
  width: 50px;
  height: 50px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
}

.error-text h1 {
  color: rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
}
</style>
