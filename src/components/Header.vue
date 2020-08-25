<template>
  <div>
    <nav class="navbar">
      <v-app-bar-nav-icon
        class="pink--text text--lighten-4 hidden-sm-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-navigation-drawer v-model="drawer" app class="pink lighten-4">
        <v-list>
          <v-list-item class="flex-row-reverse ">
            <v-list-item-icon>
              <v-icon
                class="pink lighten-3 rounded-circle white--text pa-3"
                @click="drawer = false"
                >mdi-chevron-left</v-icon
              >
            </v-list-item-icon>
          </v-list-item>
          <v-list-item>
            <v-spacer></v-spacer>
          </v-list-item>
          <v-list-item
            :key="index"
            v-for="(link, index) in links"
            router
            :to="link.route"
          >
            <v-list-item-icon>
              <v-icon class="white--text">{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="white--text">{{
                link.text
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list></v-navigation-drawer
      >
      <div class="navbar-left hidden-xs-only">
        <div class="links">
          <router-link to="/" active-class="active" exact>Home</router-link>
        </div>
        <div class="links">
          <router-link to="/random" exact active-class="active"
            >Random</router-link
          >
        </div>
        <div class="links">
          <router-link to="/trending" exact active-class="active"
            >Trending</router-link
          >
        </div>
      </div>
      <h1><span class="main-title">Gif</span> Searcher</h1>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { icon: "mdi-home", text: "Home", route: "/" },
        { icon: "mdi-help", text: "Random", route: "/random" },
        { icon: "mdi-trending-up", text: "Trending", route: "/trending" }
      ],
      drawer: false
    };
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

.navbar .navbar-left {
  width: 30%;
  display: flex;
  justify-content: space-between;
  position: relative;
}

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

@media screen and (min-width: 376px) and (max-width: 960px) {
  .navbar {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "title title"
      "left left";
    gap: 20px;
    padding: 2em 10em;
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

@media screen and (max-width: 600px) {
  .navbar {
    display: flex;
    padding: 2em 1em;
  }
}
</style>
