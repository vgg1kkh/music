import { memo } from 'react'

import {TopRankingWrapper} from './style'

export default memo(function TopRanking() {
    return (
        <TopRankingWrapper>
            <div className="ranking-header"></div>
        </TopRankingWrapper>
    )
})
