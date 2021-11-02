import React from 'react'
import { Redirect } from "react-router-dom";
// import AppSongDetail from "../pages/player"
//  import Recommend from "../pages/discover/child-pages/recommend";
//  import PlayList from "../pages/discover/child-pages/playlist";
//  import Artist from "../pages/discover/child-pages/artist";
// import DJRadio from "../pages/discover/child-pages/dj-radio";
import HYFriend from "@/pages/friend";
import HYDiscover from "@/pages/discover";
import TopList from "../pages/discover/child-pages/toplist";

const Album = React.lazy(()=>import())
const Album = React.lazy(()=>import())
const Album = React.lazy(()=>import())
const Album = React.lazy(()=>import("../pages/discover/child-pages/album"))
const DJRadio = React.lazy(()=>import("../pages/discover/child-pages/dj-radio"))
const Artist = React.lazy(()=>import("../pages/discover/child-pages/artist"))
const PlayList = React.lazy(()=>import("../pages/discover/child-pages/playlist"))
const Recommend = React.lazy(()=>import("../pages/discover/child-pages/recommend"))

const AppSongDetail = React.lazy(()=>import("../pages/player"))
const HYMime = React.lazy(()=> import("@/pages/mime"))
// import HYMime from "@/pages/mime";





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
      },
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
