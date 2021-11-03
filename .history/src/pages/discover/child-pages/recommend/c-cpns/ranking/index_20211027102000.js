import React, { memo } from 'react'
import NewAlbumWrapper from './style'
import ThemeHeaderRcm from '@/components/theme-header-rcm'

export default memo(function R() {
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
