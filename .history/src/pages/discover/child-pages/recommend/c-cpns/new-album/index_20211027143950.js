import React, { memo,useEffect } from 'react'
import { getNewAlbum } from '../../../../../../services/recommend'
import NewAlbumWrapper from './style'
import ThemeHeaderRcm from '@/components/theme-header-rcm'

export default memo(function NewAlbum() {

    useEffect(()=>{
        getNewAlbum().then(
            res
        )
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
