import { Redirect } from "react-router-dom";

import HYMime from "@/pages/mime";
import HYFriend from "@/pages/friend";
import HYDiscover from "@/pages/discover";
import TopList from "../pages/discover/child-pages/toplist";
import Album from "../pages/discover/child-pages/album";
import DJRadio from "../pages/discover/child-pages/dj-radio";
import Artist from "../pages/discover/child-pages/artist";
import PlayList from "../pages/discover/child-pages/playlist";
import Recommend from "../pages/discover/child-pages/recommend";
import App




const routes = [

  
  {
    path: "/discover",
    component: HYDiscover,
    routes:[
     
      {
        path:"/discover/toplist",
        component:TopList
      },
      {
        path:"/discover/playlist",
        component:PlayList
      },
      {
        path:"/discover/djradio",
        component:DJRadio
      },
      {
        path:"/discover/artist",
        component:Artist
      },
      {
        path:"/discover/album",
        component:Album
      },
      {
        path:"/discover/song",
        component:AppSongDetail
      }
       {
        path:"/discover",
        component:Recommend
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
  {
    path: "/",
    // component:HYDiscover
    render:()=><Redirect to="/discover" />
    
  },
];

export default routes;
