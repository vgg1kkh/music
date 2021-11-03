import React, { memo } from 'react'

import {getSizeImage} from '../../utils/format-utils'
import SongCoverWrapper from './style'

export default memo(function SongCover(props) {

    const {info, songList, width = 140} = props
    return (
        <SongCoverWrapper width={width}>
            <img src={getSizeImage(info.picUrl} alt="song">
                
            </img>
        </SongCoverWrapper>
    )
})
