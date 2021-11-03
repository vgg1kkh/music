import { memo } from 'react'

im
import { SongInfoWrapper } from './style'

export default memo(function SongInfo() {
    return (
        <SongInfoWrapper>
            <div>
            <img src={getSizeImage(pirUrl, 130)} alt="" />
            <div className="image_cover cover"></div>
            </div>
            <div>

            </div>
        </SongInfoWrapper>
    )
})
