<template>
  <form @submit.prevent="formSubmitted">
    <div class="field">
      <input id="search" type="text" v-model="keyword" class="search-input" />
      <label class="input" for="search" :class="{ float: keyword }"
        >Search</label
      >
    </div>
    <div class="field">
      <label class="limit">Limit</label>
      <select v-model="searchLimit" class="select-option">
        <option :key="i * 5" :value="i * 5" v-for="i in 5">{{ i * 5 }}</option>
      </select>
    </div>
    <button type="submit">
      <font-awesome-icon :icon="['fas', 'search']"></font-awesome-icon>
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      keyword: "",
      searchLimit: 10
    };
  },
  methods: {
    formSubmitted() {
      this.$emit("searchUpdated", this.keyword);
      this.$emit("limitUpdated", this.searchLimit);
    }
  },
  watch: {
    keyword: function(val) {
      if (val === "") {
        this.keyword = null;
      }
    }
  }
};
</script>

<style scoped>
form {
  padding: 4em 6em;
  display: flex;
  justify-content: center;
  align-items: center;
}
.field {
  display: flex;
  position: relative;
}

.field label.input {
  color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 20px;
  font-size: 1em;
  transition: 0.3s ease;
}

form .search-input {
  color: var(--primary-color);
  border: none;
  outline: none;
  background: var(--background-color);
  width: 300px;
  padding: 5px 10px;
  margin: 0px 10px;
  box-shadow: 0px 1px var(--border-color);
}

.field label.float {
  top: -20px;
}

form .select-option {
  color: rgba(0, 0, 0, 0.5);
  position: relative;
  border-radius: 10px;
  width: 60px;
  height: 30px;
  border: none;
  box-shadow: 0 0 5px var(--border-color);
  outline: none;
  padding: 5px;
}
.limit {
  position: absolute;
  top: -25px;
  left: 10px;
  z-index: 1;
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.9em;
}

button {
  padding: 5px;
  margin: 0px 15px;
  width: 40px;
  height: 40px;
  border: none;
  box-shadow: 0 0 5px var(--border-color);
  background: none;
  outline: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
}

button:hover {
  color: var(--secondary-text);
  background-color: var(--border-color);
}
</style>
