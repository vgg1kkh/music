import HYMime from "@/pages/mime";
import HYFriend from "@/pages/friend";
import HYDiscover from "@/pages/discover";
const routes = [
  {
    path: "/",
    exact: "true",
    component: HYDiscover,
    routes:
  },
  {
    path: "/mime",
    component: HYMime,
  },
  {
    path: "/friend",
    component: HYFriend,
  },
];

export default routes;
