import React, { memo } from 'react'

import { PlayerBarWrapper,Control,PlayerInfo } from './style.js'

export default memo(function HYAppPlayerBar() {
    return (
            <PlayerBarWrapper className="sprite_player">
                <div className="content w980">
                    <Control>
                        <button className="pre sprite_player"></button>
                        <button className="play sprite_player"></button>
                        <button className="next sprite_player"></button>
                    </Control>
                    <PlayerInfo >
                        <div className="image"></div>
                        <div className="play-detail">
                            <div className="song-info">
                                <span></span>
                            </div>
                           
                        </div>
                    </PlayerInfo>


                </div>
            </PlayerBarWrapper>
            
        
    )
})
