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
                                <a href="/#" title="share" className="btn text-indent sprite_player favor">favor</a>
                                <a href="/#" title="share" className="btn text-indent add sprite_player">add</a>
                                <a href="/#" title="share" className="btn text-indent share sprite_player">share</a>
                            </div>
                            <div className="right">
                                <a href="/#" title="volumn" className="btn text-indent volume sprite_player">volume</a>
                                <a href="/#" title="loop" className="btn text-indent loop sprite_player">loop</a>
                                <a href="/#" title="playlist" className="btn text-indent playlist sprite_player">playlist</a>
                            </div>
                            

                    </Operator>


                </div>
            </PlayerBarWrapper>
            
        
    )
})
