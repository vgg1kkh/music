import React, { memo } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 10px;
    .header {
    display:flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    height: 24px;
    }
`

export default memo(function ArtistHeaderLine(props) {

    return (
        <Wrapper>
                <div className="header">
                <div></div>
                <a href="/#">See All &gt;</a>
            </div>
            <div>Singer List</div>
        </Wrapper>

        
    )
})
