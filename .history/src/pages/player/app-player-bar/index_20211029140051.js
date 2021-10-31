import React, { memo } from 'react'

import { PlayerBarWrapper,Control } from './style.js'

export default memo(function HYAppPlayerBar() {
    return (
            <PlayerBarWrapper className="sprite_player">
                <div className="content w980">
                    <Control>

                    </Control>
                </div>
            </PlayerBarWrapper>
            
        
    )
})
