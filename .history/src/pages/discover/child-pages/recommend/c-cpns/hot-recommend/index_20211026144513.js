

import { memo } from 'react'


import {HotRecommendWrapper,HotRecommendNavWrapper,HotRecommendContentWrapper} from './style'


export default memo(function HotRecommend() {
    return (
        <HotRecommendWrapper>
            <HotRecommendNavWrapper>
                <div>bg</div>
                Nav
            </HotRecommendNavWrapper>
            <HotRecommendContentWrapper>
                Item
            </HotRecommendContentWrapper>
            
        </HotRecommendWrapper>
    )
})
