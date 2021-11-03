import React, { memo } from 'react'

import { PlayerBarWrapper,Control } from './style.js'

export default memo(function HYAppPlayerBar() {
    return (
            <PlayerBarWrapper className="sprite_player">
                <div className="content w980">
                    <Control>
                        <button className="pre sprite_player"></button>
                        <button className="play sprite_"></button>
                        <button className="next"></button>
                    
                    </Control>

                </div>
            </PlayerBarWrapper>
            
        
    )
})
