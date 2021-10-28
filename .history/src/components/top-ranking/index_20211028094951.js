import { memo } from 'react'

import {TopRankingWrapper} from './style'

export default memo(function TopRanking() {
    return (
        <TopRankingWrapper>
            <div className="ranking-header">Header</div>
            <div className="ranking-list">List</div>
            <div className="ranking-footer">Footer</div>
        </TopRankingWrapper>
    )
})
