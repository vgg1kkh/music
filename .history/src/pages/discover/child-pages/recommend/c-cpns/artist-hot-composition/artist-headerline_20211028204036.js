import React, { memo } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
`

export default memo(function ArtistHeaderLine(props) {
    return (
        
            <div className="header">
                <div>Exclusive Singers</div>
                <a href="/#">See All &gt;</a>
            </div>
            <div>Singer List</div>
        
    )
})
