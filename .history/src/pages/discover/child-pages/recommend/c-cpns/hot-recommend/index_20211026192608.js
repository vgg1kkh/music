

import { memo } from 'react'


import {HotRecommendWrapper,HotRecommendNavWrapper,HotRecommendContentWrapper} from './style'


export default memo(function HotRecommend() {
    return (
        <HotRecommendWrapper>
            <HotRecommendNavWrapper>
                <span className="icon"></span>
                <a href="/dis">Recommends</a>
            </HotRecommendNavWrapper>
            <HotRecommendContentWrapper>
                Item
            </HotRecommendContentWrapper>
            
        </HotRecommendWrapper>
    )
})
