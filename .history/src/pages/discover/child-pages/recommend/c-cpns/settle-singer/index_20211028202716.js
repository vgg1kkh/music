import React, { memo } from 'react'
import SettleSingerWrapper from './style'

export default memo(function SettleSinger() {
    return (
        <SettleSingerWrapper>
            <div className="header">
                <div>A</div>
            </div>
            <div>Singer List</div>
        </SettleSingerWrapper>
    )
})
