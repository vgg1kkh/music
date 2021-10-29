import React, { memo } from 'react'
import styled from 'styled-components'
import { getImageSize } from '../../../../../../utils/format-utils'

const SingerCoverWrapper = styled.a`
    href:picUrl;

`


export default memo(function SingerCover({info}) {
    
    return (
        <div>
            <div>
                <img src={getImageSize(info.picUrl,62,51)} alt=""></img>
            </div>
            <a></a>
            <div>
                <p>{info.name}</p>
                <p>{info.alias[0]}</p>
            </div>
        </div>
    )
})
