import React, { memo, useEffect, } from 'react'
import {useDispatch,useSelector,shallowEqual} from 'react-redux'
import { getSettleSingerAction } from '../../store/actionCreators'
import SettleSingerWrapper from './style'
import ArtistHeaderline from '../artist-hot-composition/artist-headerline'

export default memo(function SettleSinger() {

   //redux hooks
   const dispatch = useDispatch()
   const {settleSings = []} = useSelector(state=>{
       return {
        settleSings:state.getIn(["recommend","settleSings"])
       }
   },shallowEqual)

   useEffect(()=>{
    dispatch(getSettleSingerAction())
   },[dispatch])
   return(
       <SettleSingerWrapper >
           <ArtistHeaderline left="Exclusive Singers" right="See All"/>
            {console.log(settleSings)}
       </SettleSingerWrapper>
        
   )
},isEqual)
