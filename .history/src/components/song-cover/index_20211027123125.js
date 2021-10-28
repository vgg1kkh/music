import React, { memo } from 'react'

import SongCoverWrapper from './style'

export default memo(function SongCover(props) {

    const {info} = props
    return (
        <SongCoverWrapper>
            <img href={info.picUrl} alt="song">
            </img>
        </SongCoverWrapper>
    )
})
