import React, { memo } from 'react'

import { SliderPlaylistWrapper } from './style'

export default memo(function SliderPlaylist(props) {
    const {isShowSlider} = props
    return (
        <SliderPlaylistWrapper
        style={{ visibility: isShowSlider ? 'visible' : 'hidden' }}
        >
            SliderPlayList
        </SliderPlaylistWrapper>
    )
})
