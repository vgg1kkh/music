

import { memo } from 'react'


import {HotRecommendWrapper,HotRecommendNavWrapper,HotRecommendContentWrapper} from './style-backup'


export default memo(function HotRecommend() {
    return (
        <HotRecommendWrapper>
            <HotRecommendNavWrapper>
                <span className="icon"></span>
                <a href="/discover/playlist">Recommends</a>
            </HotRecommendNavWrapper>
            <HotRecommendContentWrapper>
                Item
            </HotRecommendContentWrapper>
            
        </HotRecommendWrapper>
    )
})
