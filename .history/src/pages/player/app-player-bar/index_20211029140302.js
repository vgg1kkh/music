import React, { memo } from 'react'

import { PlayerBarWrapper,Control } from './style.js'

export default memo(function HYAppPlayerBar() {
    return (
            <PlayerBarWrapper className="sprite_player">
                <div className="content w980">
                    <Control>
                        <button className="pre"></button>
                        <button className="play"></button>
                        <button></button>
                    
                    </Control>

                </div>
            </PlayerBarWrapper>
            
        
    )
})
