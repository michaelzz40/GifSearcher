<template>
  <div class="navbar">
    <div class="navbar-left">
      <div class="links">
        <a href="#">Home</a>
      </div>
      <div class="links">
        <a href="#">Random</a>
      </div>
    </div>
    <h1><span class="main-title">Gif</span> Searcher</h1>
    <div class="navbar-right">
      <div class="links">
        <a href="#">Trending</a>
      </div>
      <div class="links">
        <a href="#">Categories</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.navbar {
  padding: 4em 6em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar h1 {
  padding: 0px 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.navbar .navbar-right,
.navbar .navbar-left {
  width: 25%;
  display: flex;
  justify-content: space-between;
  position: relative;
}

.navbar .navbar-right .links,
.navbar .navbar-left .links {
  position: relative;
  padding: 20px 0px;
  text-align: center;
  transition: all 0.3s ease;
}

.navbar .navbar-right .links:hover,
.navbar .navbar-left .links:hover {
  transform: translateY(-10px);
  color: var(--border-color);
}

.navbar .navbar-right .links a,
.navbar .navbar-left .links a {
  text-decoration: none;
  color: var(--primary-color);
}

.navbar .navbar-right .links::after,
.navbar .navbar-left .links::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 1px;
  width: 0px;
  background-color: var(--border-color);
  transition: all 0.3s ease;
}

.navbar .navbar-right .links:hover::after,
.navbar .navbar-left .links:hover::after {
  width: 100%;
}

/* .navbar .navbar-left .links::after a:hover {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 10px;
  background: black;
  content: "";
} */

.main-title {
  color: var(--border-color);
  box-shadow: 0 0 5px 1px var(--border-color);
  padding: 10px;
}
</style>
