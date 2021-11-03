import React, { memo } from 'react'
import SettleSingerWrapper from './style'

export default memo(function SettleSinger() {
    return (
        <SettleSingerWrapper>
            <div className="header">
                <div>Exclusive Singers</div>
                <a href>See All &gt;</a>
            </div>
            <div>Singer List</div>
        </SettleSingerWrapper>
    )
})
