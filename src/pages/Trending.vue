<template>
  <div
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="busy"
    infinite-scroll-distance="10"
    class="trending-section"
  >
    <ProgressBar :isLoading="isLoading"></ProgressBar>
    <WhiteDrop v-if="isLoading"></WhiteDrop>
    <ImageLists
      v-if="gifs.length > 0"
      :isLoading="isLoading"
      :gifs="gifs"
    ></ImageLists>
    <div class="add-post">
      <WhiteDrop v-if="addGifs"></WhiteDrop>
    </div>
    <h1 v-if="!isLoading && gifs.length === 0">No Images Found</h1>
  </div>
</template>

<script>
import ImageLists from "../components/Home/ImageLists";
import ProgressBar from "../components/ProgressBar";
import WhiteDrop from "../components/WhiteDrop";
import axios from "axios";
export default {
  data() {
    return {
      searchTerm: "",
      limit: 15,
      gifs: [],
      busy: false,
      isLoading: false,
      addGifs: false,
      count: 25
    };
  },
  components: {
    ImageLists: ImageLists,
    ProgressBar: ProgressBar,
    WhiteDrop: WhiteDrop
  },
  methods: {
    buildGifs(data) {
      const newGifs = data.data.data
        .map(gif => gif.id)
        .map(gifId => {
          return {
            id: gifId,
            image: `https://media.giphy.com/media/${gifId}/giphy.gif`
          };
        });
      this.gifs.push(...newGifs);
    },
    loadMore() {
      this.addGifs = true;
      this.busy = true;
      axios
        .get(
          `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.VUE_APP_API_KEY}&offset=${this.count}`
        )
        .then(data => {
          this.buildGifs(data);
          this.count += 25;
          this.busy = false;
          this.addGifs = false;
          if (this.isLoading === true) {
            this.isLoading = false;
          }
        })
        .catch(err => {
          console.error(err);
          this.isLoading = false;
          this.busy = false;
        });
    }
  },
  created() {
    this.isLoading = true;
    this.loadMore();
  }
};
</script>

<style scoped>
.trending-section {
  position: relative;
}
.add-post {
  background-color: white;
  position: relative;
  width: 100%;
  padding: 4em 10em;
}
</style>
