import { memo } from 'react'

import {TopRankingWrapper} from './style'

export default memo(function TopRanking(props) {
    return (
        <TopRankingWrapper>
            <div className="ranking-header">
                <div className="image">Image</div>
                <div className="title">Title</div>
            </div>
            <div className="ranking-list">List</div>
            <div className="ranking-footer">Footer</div>
        </TopRankingWrapper>
    )
})
