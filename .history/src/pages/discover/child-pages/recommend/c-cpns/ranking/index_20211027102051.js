import React, { memo } from 'react'
import NewAlbumWrapper from './style'
import ThemeHeaderRcm from '@/components/theme-header-rcm'

export default memo(function Ranking() {
    return (
        <RankingWrapper>
            <ThemeHeaderRcm 
                title="New Arrival"
                showIcon={true}
                right="more"
            />
        </RankingWrapper>
    )
})
