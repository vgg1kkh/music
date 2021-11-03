import React, { memo,useEffect } from 'react'
import getN
import NewAlbumWrapper from './style'
import ThemeHeaderRcm from '@/components/theme-header-rcm'

export default memo(function NewAlbum() {

    useEffect(()=>{

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
