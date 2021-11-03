import React, { memo } from 'react'

import { getImageSize } from '../../../../../../utils/format-utils'

export default memo(function SingerCover({info}) {
    
    return (
        <div>
            <div>
                <img src={getImageSize(info.picUrl,62,51)} alt=""></img>
            </div>
            <div>
                <p>{info.name}</p>
                <p>{info.alias[</p>
            </div>
        </div>
    )
})
