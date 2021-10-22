import React, { memo } from 'react'
import { FooterWrapper } from './style'

export default memo(function HYAppFooter() {
    return (
        <FooterWrapper>
            <div className="left">Left</div>
            <div className="right">
                <h4>Copyright &copy; 2021</h4>
            </div>
        </FooterWrapper>
    )
})
