<template>
  <div id="app">
    <Header></Header>
    <Form
      @searchUpdated="searchTerm = $event"
      @limitUpdated="limit = $event"
    ></Form>
    <ImageLists v-if="gifs.length > 0" :gifs="gifs"></ImageLists>
  </div>
</template>

<script>
import Header from "./components/Header";
import Form from "./components/Form";
import ImageLists from "./components/ImageLists";
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      searchTerm: "",
      limit: 15,
      gifs: []
    };
  },
  components: {
    Header: Header,
    Form: Form,
    ImageLists: ImageLists
  },
  watch: {
    searchTerm() {
      axios
        .get(
          `https://api.giphy.com/v1/gifs/search?q=${this.searchTerm}&limit=${this.limit}&api_key=dc6zaTOxFJmzC`
        )
        .then(data => {
          this.buildGifs(data);
        });
    },
    limit() {
      axios
        .get(
          `https://api.giphy.com/v1/gifs/search?q=${this.searchTerm}&limit=${this.limit}&api_key=dc6zaTOxFJmzC`
        )
        .then(data => {
          this.buildGifs(data);
          console.log(this.gifs);
        });
    }
  },
  methods: {
    buildGifs(data) {
      this.gifs = data.data.data
        .map(gif => gif.id)
        .map(gifId => {
          return {
            id: gifId,
            image: `https://media.giphy.com/media/${gifId}/giphy.gif`
          };
        });
    }
  },
  created() {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?q=Masters&limit=10&api_key=dc6zaTOxFJmzC`
      )
      .then(data => {
        this.buildGifs(data);
        console.log(this.gifs);
      });
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
</style>
