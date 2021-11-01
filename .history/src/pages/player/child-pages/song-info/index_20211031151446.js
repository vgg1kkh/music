import { memo } from 'react'
import {use}

import { getImageSize } from '../../../../utils/format-utils'
import { SongInfoWrapper } from './style'

export default memo(function SongInfo() {

     // redux hook
    const { currentSong, lyricList=[], totalComment=[] } = useSelector(
    (state) => ({
      currentSong: state.getIn(['player', 'currentSong']),
      lyricList: state.getIn(['player', 'lyricList']),
      totalComment: state.getIn(['player', 'currentCommentTotal']),
    }),
    shallowEqual
  )

    return (
        <SongInfoWrapper>
            <div className="album">
            <img src={getImageSize(pirUrl, 130)} alt="" />
            <div className="image_cover cover"></div>
            </div>
            <div>

            </div>
        </SongInfoWrapper>
    )
})
