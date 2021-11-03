import { memo } from 'react'
import {getImageSize} from '@/utils/format-utils'

import {TopRankingWrapper} from './style'

export default memo(function TopRanking(props) {

    const {info,index} = props

    return (
        <TopRankingWrapper>
            <div className="ranking-header">
                <div className="image">
                    <img src={getImageSize(info.coverImgUrl,80)} alt=""></img>
                </div>
                <div className="title">Title</div>
            </div>
            <div className="ranking-list">List</div>
            <div className="ranking-footer">Footer</div>
        </TopRankingWrapper>
    )
})
