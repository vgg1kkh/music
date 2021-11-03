import React from 'react'
import { Redirect } from "react-router-dom";

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
