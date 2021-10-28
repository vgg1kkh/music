import { memo,useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getNewAlbums } from '../../../../../../services/recommend'
import NewAlbumWrapper from './style'
import ThemeHeaderRcm from '@/components/theme-header-rcm'
import { getNewAlbumAction } from '../../store/actionCreators'

export default memo(function NewAlbum() {

    //redux-hooks
    const dispatch = useDispatch()
    



    useEffect(()=>{
      dispatch(getNewAlbumAction(NEW))
      getNewAlbums().then(res=>console.log(res.data.albums))  
    },[])
    return (
        <NewAlbumWrapper>
            <ThemeHeaderRcm 
                title="New Arrival"
                showIcon={true}
                right="more"
            />
        </NewAlbumWrapper>
    )
})
