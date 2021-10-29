import React, { memo, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import SettleSingerWrapper from './style'
import ArtistHeaderline from '../artist-hot-composition/artist-headerline'

export default memo(function SettleSinger() {

   const dispatch useDispatch()

   useEffect(()=>{

   },[])
   return(
       <SettleSingerWrapper >
           <ArtistHeaderline left="Exclusive Singers" right="See All"/>

       </SettleSingerWrapper>
        
   )
})
