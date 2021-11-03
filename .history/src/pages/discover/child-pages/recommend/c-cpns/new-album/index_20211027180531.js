import { memo,useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getNewAlbums } from '../../../../../../services/recommend'
import NewAlbumWrapper from './style'
import ThemeHeaderRcm from '@/components/theme-header-rcm'
import { getNewAlbumAction } from '../../store/actionCreators'
import { NEW_ALBUM_LIMIT } from '../../../../../../common/constants'

export default memo(function NewAlbum() {

    //redux-hooks
    const dispatch = useDispatch()
    const {NewAlbum}
    

    useEffect(()=>{
      dispatch(getNewAlbumAction(NEW_ALBUM_LIMIT))
    //   getNewAlbums().then(res=>console.log(res.data.albums))  
    },[dispatch])
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
