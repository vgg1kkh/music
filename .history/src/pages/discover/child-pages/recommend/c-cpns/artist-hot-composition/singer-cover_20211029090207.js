import React, { memo } from 'react'

import { getImageSize } from '../../../../../../utils/format-utils'

export default memo(function SingerCover({info}) {
    
    return (
        <div>
            <div>
                <img src={getImageSize(info.picUrl,62)}></img>
            </div>
        </div>
    )
})
