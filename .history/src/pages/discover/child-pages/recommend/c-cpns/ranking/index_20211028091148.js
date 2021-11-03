import React, { memo } from 'react'
import RankingWrapper from './style'
import ThemeHeaderRcm from '@/components/theme-header-rcm'

export default memo(function Ranking() {
    return (
        <RankingWrapper>
            <ThemeHeaderRcm 
                title="Ranking"
                showIcon={true}
                right="more"
            />
            <div cl></div>
        </RankingWrapper>
    )
})
