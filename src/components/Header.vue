<template>
  <div class="navbar">
    <div class="navbar-left">
      <div class="links">
        <router-link to="/" active-class="active" exact>Home</router-link>
      </div>
      <div class="links">
        <router-link to="/random" exact active-class="active"
          >Random</router-link
        >
      </div>
    </div>
    <h1><span class="main-title">Gif</span> Searcher</h1>
    <div class="navbar-right">
      <div class="links">
        <router-link to="/">Trending</router-link>
      </div>
      <div class="links">
        <router-link to="/">Categories</router-link>
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
  padding: 4em 10em;
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
  font-weight: 700;
  text-transform: uppercase;
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

.navbar .navbar-right .links a.active,
.navbar .navbar-left .links a.active {
  text-transform: uppercase;
  color: var(--border-color);
}

.navbar .navbar-right .links a.active:hover,
.navbar .navbar-left .links a.active:hover {
  transform: translateY(0);
}

.main-title {
  color: var(--border-color);
  box-shadow: 0 0 5px 1px var(--border-color);
  padding: 10px;
}

/* Ipad Size */

@media screen and (min-width: 768px) and (max-width: 960px) {
  .navbar {
    display: grid;
    grid-template-areas:
      "title title title title"
      "left left right right";
    gap: 20px;
    padding: 4em 6em;
  }

  .navbar h1 {
    grid-area: title;
    text-align: center;
  }
  .navbar .navbar-left {
    width: 100%;
    grid-area: left;
    margin-top: 20px;
  }
  .navbar .navbar-right {
    width: 100%;
    grid-area: right;
    margin-top: 20px;
  }
}

@media screen and (min-width: 375px) and (max-width: 767px) {
  .navbar {
    display: grid;
    grid-template-areas:
      "title title"
      "left left"
      "right right";
    padding: 2em 2em;
  }

  .navbar h1 {
    grid-area: title;
    text-align: center;
    padding: 20px;
    font-size: 1.3em;
  }
  .navbar .navbar-left {
    width: 100%;
    grid-area: left;
  }
  .navbar .navbar-right {
    width: 100%;
    grid-area: right;
  }
}
</style>
