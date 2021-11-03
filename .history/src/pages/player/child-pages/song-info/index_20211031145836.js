import { memo } from 'react'

import { getImageSize } from '../../../../utils/format-utils'
import { SongInfoWrapper } from './style'

export default memo(function SongInfo() {
    return (
        <SongInfoWrapper>
            <div>
            <img src={getImage(pirUrl, 130)} alt="" />
            <div className="image_cover cover"></div>
            </div>
            <div>

            </div>
        </SongInfoWrapper>
    )
})
