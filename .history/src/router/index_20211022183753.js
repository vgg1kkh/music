import HYMime from "@/pages/mime";
import HYFriend from "@/pages/friend";
import HYDiscover from "@/pages/discover";
import Top from "../pages/discover/child-pages/toplist";


const routes = [
  {
    path: "/",
    exact: "true",
    component: HYDiscover,
    routes:[
      {
        path:"/",
        exact:"true",
        component:HYDiscover
      },
      {
        path:"/discover/toplist",
        exact:"true",
        component:TopList
      },
      {
        path:"/discover/playlist",
        exact:"true",
        component:PlayList
      },
      {
        path:"/discover/djradio",
        exact:"true",
        component:DJRadio
      },
      {
        path:"/discover/artist",
        exact:"true",
        component:Artist
      },
      {
        path:"/discover/album",
        exact:"true",
        component:Album
      },
      
      

    ]
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
