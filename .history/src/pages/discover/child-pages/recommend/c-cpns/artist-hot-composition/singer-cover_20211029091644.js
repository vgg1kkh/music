import React, { memo } from 'react'
import styled from 'styled-components'
import { getImageSize } from '../../../../../../utils/format-utils'

const S


export default memo(function SingerCover({info}) {
    
    return (
        <div>
            <div>
                <img src={getImageSize(info.picUrl,62,51)} alt=""></img>
            </div>
            <div>
                <p>{info.name}</p>
                <p>{info.alias[0]}</p>
            </div>
        </div>
    )
})
