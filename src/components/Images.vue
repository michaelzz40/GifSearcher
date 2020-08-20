<template>
  <div class="card">
    <div class="img-box">
      <img :src="gif.image" alt="image" />
    </div>
    <div class="card-link">
      <input type="text" :value="gif.image" readonly />
      <button
        type="button"
        v-clipboard:copy="gif.image"
        v-clipboard:success="onCopy"
        class="copy-button"
      >
        <font-awesome-icon :icon="['fa', 'copy']">Copy Link</font-awesome-icon>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["gif"],
  methods: {
    onCopy(e) {
      this.$emit("copied", e.text);
    }
  },
  filters: {
    truncate: function(text, length, suffix) {
      if (text.length > length) {
        return text.substring(0, length) + suffix;
      } else {
        return text;
      }
    }
  }
};
</script>

<style scoped>
.card {
  width: 100%;
  display: flex;
  overflow: hidden;
  border-radius: 20px;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  padding: 0px 0px 15px;
}
.card .img-box {
  text-align: center;
  width: 100%;
  height: 100%;
}

.card .img-box img {
  object-fit: cover;
  max-width: 100%;
  height: 100%;
}

.card-link {
  padding: 0px 10px;
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.card-link input {
  border: none;
  outline: none;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);
  padding: 10px;
  width: 85%;
}

.copy-button {
  background: none;
  outline: none;
  border: none;
  width: 15%;
  color: var(--border-color);
  padding: 10px;
}
</style>
