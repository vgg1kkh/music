import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { HeartOutlined, ClearOutlined, CloseOutlined} from "@ant-design/icons"

import { SliderPlaylistWrapper ,SliderPlaylistHeader} from './style'

export default memo(function SliderPlaylist(props) {
    const {isShowSlider, closeWindow} = props

    //redux-hooks
    const {playList,currentSong} = useSelector(state=>({
        playList: state.getIn(["player","playList"]),
        currentSong:state.getIn(["player","currentSong"])
    }),shallowEqual)
    return (
        <SliderPlaylistWrapper
        style={{ visibility: isShowSlider ? 'visible' : 'hidden' }}
        //stop Propagation, it will pass the action to it's father otherwise
        //then the value of isShowSlide will be changed.
        onClick={(e) => e.stopPropagation()}
        >
            <SliderPlaylistHeader>
        <div className="playlist-header-left">
          <h3 className="header-title">PlayList({playList.length})</h3>
          <div>
            <a
              href="/favorite"
              className="header-icon"
              onClick={(e) => e.preventDefault()}
            >
              <HeartOutlined />
              <span>Add to Fav</span>
            </a>
            <a
              href="/clear"
            //   onClick={(e) => clearAllPlaylist(e)}
              className="header-icon"
            >
              <ClearOutlined />
              <span>Clear </span>
            </a>
          </div>
        </div>
        <div className="playlist-header-right">
          <div className="song-name">{currentSong.name}</div>
          <div className="close-window" onClick={closeWindow}>
            <CloseOutlined />
          </div>
        </div>
      </SliderPlaylistHeader>
        </SliderPlaylistWrapper>
    )
})
