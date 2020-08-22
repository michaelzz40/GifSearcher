<template>
  <div>
    <Alert :message="message"></Alert>
    <ProgressBar :isLoading="isLoading"></ProgressBar>

    <div class="middle-section">
      <button @click="fetchNew">Get new Random Image</button>
    </div>

    <div v-if="gif" class="random-section">
      <WhiteDrop v-if="isLoading"></WhiteDrop>
      <img :src="gif.image" alt="image" />
      <div class="card-link">
        <input type="text" :value="gif.image" readonly />
        <button
          type="button"
          v-clipboard:copy="gif.image"
          v-clipboard:success="onCopy"
          class="copy-button"
        >
          Copy Link
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
import Alert from "../components/Alert";
import WhiteDrop from "../components/WhiteDrop";
import axios from "axios";

export default {
  data() {
    return {
      gif: null,
      isLoading: false,
      message: ""
    };
  },
  components: {
    ProgressBar: ProgressBar,
    Alert: Alert,
    WhiteDrop: WhiteDrop
  },
  methods: {
    onCopy(e) {
      this.message = e.text;
    },
    hideAlert() {
      this.message = "";
    },
    fetchNew() {
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
          this.isLoading = false;
        })
        .catch(err => {
          console.error(err);
          this.isLoading = false;
        });
    }
  },
  watch: {
    message: function(value) {
      if (value) {
        setTimeout(this.hideAlert, 3000);
      }
    }
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
        this.isLoading = false;
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
  position: relative;
  padding: 4em 10em;
}

.random-section img {
  width: 100%;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
}

.middle-section {
  padding: 1em 10em;
  text-align: center;
}

.middle-section button {
  padding: 25px;
  background: var(--border-color);
  outline: none;
  border: none;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  border-radius: 20px;
  text-transform: uppercase;
  transition: all 0.2s ease;
}

.middle-section button:hover {
  background: #f6f6f6;
  color: var(--primary-text);
  box-shadow: 0px 0px 10px 10px var(--border-color);
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

.card-link {
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.card-link input {
  border: none;
  outline: none;
  color: rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);
  padding: 10px;
  width: 85%;
}

.copy-button {
  text-transform: uppercase;
  background: var(--border-color);
  outline: none;
  border: none;
  border-radius: 5px;
  height: 40px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  width: 13%;
  color: rgba(255, 255, 255, 1);
  padding: 10px;
  cursor: pointer;
  transition: all 0.4s ease;
}

.copy-button:hover {
  transform: scale(1.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

@media screen and (min-width: 768px) and (max-width: 960px) {
  .random-section {
    padding: 4em 6em;
  }
  .middle-section {
    padding: 1em 6em;
  }
  .middle-section button {
    font-size: 1.5em;
  }

  .card-link {
    flex-direction: column;
    justify-content: space-between;
    height: 100px;
    margin-top: 50px;
  }

  .card-link input {
    border-radius: 5px;
    width: 100%;
  }

  .copy-button {
    width: 100%;
  }

  .copy-button:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
}

@media screen and (min-width: 375px) and (max-width: 767px) {
  .random-section {
    padding: 2em 2em;
  }
  .middle-section {
    padding: 1em 6em;
  }
  .middle-section button {
    font-size: 0.3em;
  }

  .card-link {
    flex-direction: column;
    justify-content: space-between;
    height: 100px;
    margin-top: 50px;
  }

  .card-link input {
    border-radius: 5px;
    width: 100%;
  }

  .copy-button {
    width: 100%;
  }

  .copy-button:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
}
</style>
