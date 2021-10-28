

import { memo } from 'react'


import {HotRecommendWrapper,HotRecommendNavWrapper,HotRecommendContentWrapper} from './style'


export default memo(function HotRecommend() {
    return (
        <HotRecommendWrapper>
            <HotRecommendNavWrapper>
                Nav
            </HotRecommendNavWrapper>
            <HotRecommendContentWrapper>
                
            </HotRecommendContentWrapper>
            
        </HotRecommendWrapper>
    )
})
