import { memo,useEffect } from 'react'
i
import { getNewAlbums } from '../../../../../../services/recommend'
import NewAlbumWrapper from './style'
import ThemeHeaderRcm from '@/components/theme-header-rcm'

export default memo(function NewAlbum() {

    //redux-hooks




    useEffect(()=>{
      
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
