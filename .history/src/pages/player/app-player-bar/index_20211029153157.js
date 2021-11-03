import React, { memo } from 'react'
import { Slider} from 'antd';

import { PlayerBarWrapper,Control,PlayerInfo, Operator } from './style.js'

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
                        <div className="image">
                            <a href="/#">
                                <img src="http://p3.music.126.net/ULq-rXEsWpicf8iyuxYdvw==/2399134371831533.jpg?param=34y34" alt=""></img>
                            </a>
                        </div>
                        <div className="play-detail">
                            <div className="song-info">
                                <span className="song-name">SongName</span>
                                <a href="/#" className="singer-name">SingerName</a>
                            </div >
                            <Slider defaultValue={30} />  
                        </div>
                        <div className="song-time">
                            <span className="now-time">1:00</span>
                            <span className="total-time"> / 3:99</span>
                        </div>
                    </PlayerInfo>
                    <Operator>

                            <div className="left">
                                <a href="/#" title="share" className="btn text-indent">share</a>
                                <a href="/#" title="share" className="btn text-indent aa">share</a>
                                <a href="/#" title="share" className="btn text-indent">share</a>
                            </div>
                            <div className="right">right</div>

                    </Operator>


                </div>
            </PlayerBarWrapper>
            
        
    )
})
