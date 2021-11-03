import React, { memo } from 'react'
import { FooterWrapper } from './style'

export default memo(function HYAppFooter() {
    return (
        <FooterWrapper>
            <div className="left">Left</div>
            <div className="right">Right</div>
        </FooterWrapper>
    )
})
