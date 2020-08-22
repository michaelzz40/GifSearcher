import Home from "./pages/Home";
import Random from "./pages/Random";
import Trending from "./pages/Trending";

export const routes = [
  { path: "/", component: Home },
  { path: "/random", component: Random },
  { path: "/trending", component: Trending }
];
