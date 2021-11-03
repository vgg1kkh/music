import React, { memo, useEffect } from 'react'
import {useDispatch} from ''
import SettleSingerWrapper from './style'
import ArtistHeaderline from '../artist-hot-composition/artist-headerline'

export default memo(function SettleSinger() {


   useEffect(()=>{

   },[])
   return(
       <SettleSingerWrapper >
           <ArtistHeaderline left="Exclusive Singers" right="See All"/>

       </SettleSingerWrapper>
        
   )
})
