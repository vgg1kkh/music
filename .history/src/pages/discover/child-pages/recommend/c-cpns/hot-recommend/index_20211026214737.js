import React, { memo } from 'react'
import ThemeHeaderRcm from '@/components/theme-header-rcm'
import { HotRecommendWrapper } from './style'

export default memo(function HotRecommend(props) {

    //state
    const {history} = props



    return (
        <HotRecommendWrapper>
            <ThemeHeaderRcm
            title="Recommend"
            keywords={['Asian', 'Hots', 'R&R', 'Country', 'Eletric']}
            keywordsClick={(item) => handleKeyWordClick(item)}
            >

        </HotRecommendWrapper>
            
            
    )
})
