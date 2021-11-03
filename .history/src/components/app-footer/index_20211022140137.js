import React, { memo } from 'react'
import { FooterWrapper } from './style'

export default memo(function HYAppFooter() {
    return (
        <FooterWrapper>
            <div className="left">Underdevelop</div>
            <div className="right">
                <h4>Copyright Little Birdy &copy; 2021</h4>
            </div>
        </FooterWrapper>
    )
})
