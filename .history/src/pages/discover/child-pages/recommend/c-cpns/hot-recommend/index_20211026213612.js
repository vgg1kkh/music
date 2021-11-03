import React, { memo } from 'react'
import Theme
import { HotRecommendWrapper } from './style'

export default memo(function HotRecommend(props) {

    //state
    const {history} = props



    return (
        <HotRecommendWrapper>
            <ThemeHeaderRcm>
                Hot
            </ThemeHeaderRcm>
        </HotRecommendWrapper>
            
            
    )
})
