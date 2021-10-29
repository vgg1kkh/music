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
    const {left, right} = props
    return (
        <Wrapper>
                <div className="header">
                <div>{left}</div>
                <a href="/#">{right} &gt;</a>
            </div>
        </Wrapper>    
    )
})
