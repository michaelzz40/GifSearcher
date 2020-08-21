<template>
  <div>
    <ProgressBar :isLoading="isLoading"></ProgressBar>
    <Form
      @searchUpdated="searchTerm = $event"
      @limitUpdated="limit = $event"
    ></Form>
    <ImageLists v-if="gifs.length > 0" :gifs="gifs"></ImageLists>
    <h1 v-if="!isLoading && gifs.length === 0">No Images Found</h1>
  </div>
</template>

<script>
import Form from "../components/Home/Form";
import ImageLists from "../components/Home/ImageLists";
import ProgressBar from "../components/ProgressBar";
import axios from "axios";
export default {
  data() {
    return {
      searchTerm: "",
      limit: 15,
      gifs: [],
      isLoading: false
    };
  },
  components: {
    Form: Form,
    ImageLists: ImageLists,
    ProgressBar: ProgressBar
  },
  watch: {
    searchTerm() {
      this.isLoading = true;
      axios
        .get(
          `https://api.giphy.com/v1/gifs/search?q=${this.searchTerm}&limit=${this.limit}&api_key=${process.env.VUE_APP_API_KEY}`
        )
        .then(data => {
          this.buildGifs(data);
          this.isLoading = false;
        })
        .catch(err => {
          console.error(err);
          this.isLoading = false;
        });
    },
    limit() {
      this.isLoading = true;
      axios
        .get(
          `https://api.giphy.com/v1/gifs/search?q=${this.searchTerm}&limit=${this.limit}&api_key=${process.env.VUE_APP_API_KEY}`
        )
        .then(data => {
          this.buildGifs(data);
          this.isLoading = false;
        })
        .catch(err => {
          console.error(err);
          this.isLoading = false;
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
    this.isLoading = true;
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?q=Masters&limit=10&api_key=${process.env.VUE_APP_API_KEY}`
      )
      .then(data => {
        this.buildGifs(data);
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
