import { memo, useState,useEffect, useRef } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Slider } from "antd";
import moment from "moment";
import { getImageSize, getPlayUrl } from "../../../utils/format-utils";
import { createSongDetailsAction } from "../store/";
import { PlayerBarWrapper, Control, PlayerInfo, Operator } from "./style.js";

export default memo(function HYAppPlayerBar() {

  //local hooks and props
  const [currentTime, setCurrentTime] = useState(0)
  
  //redux hooks
  const dispatch = useDispatch();
  const {currentSong} = useSelector(state=>({
    currentSong: state.getIn(["player","currentSong"])
  }),shallowEqual)

  //local hooks
  const audioRef= useRef()
  useEffect(() => {
    dispatch(createSongDetailsAction(1890044606));

  }, [dispatch]);

    // // 设置音频src
    // useEffect(() => {
    //     audioRef.current.src = getPlayUrl(currentSong.id);
    //     // 设置音量
    //     audioRef.current.volume = 0.3;
    //     // 如果不是首次加载: 播放音乐
    //     // if (!firstLoad) setIsPlaying(true + Math.random());
    //   }, [currentSong]);

  //other handles
  const picUrl = (currentSong.al && currentSong.al.picUrl) || ""
  const singerName = (currentSong.ar && currentSong.ar[0].name) || "Singer"
  //count the song's duration
  const duration = currentSong.dt || 0
  const showDuration = moment(duration).format("mm:ss") || "0:00"
  

  //other handle function
  const playMusic = ()=>{
      audioRef.current.src=getPlayUrl(currentSong.id)
      audioRef.current.play()
  }
  return (
    <PlayerBarWrapper className="sprite_player">
        {console.log(currentSong)}
      <div className="content w980">
        <Control>
          <button className="pre sprite_player"></button>
          <button className="play sprite_player" onClick={()=>playMusic()}></button>
          <button className="next sprite_player"></button>
        </Control>
        <PlayerInfo>
          <div className="image">
            <a href="/#">
              <img
                src={getImageSize(picUrl,35,35)}
                alt=""
              ></img>
            </a>
          </div>
          <div className="play-detail">
            <div className="song-info">
              <span className="song-name">{currentSong.name}</span>
              <a href="/#" className="singer-name">
                {singerName}
              </a>
            </div>
            <Slider defaultValue={30} />
          </div>
          <div className="song-time">
            <span className="now-time">1:00</span>
            <span className="total-time"> / {showDuration}</span>
          </div>
        </PlayerInfo>
        <Operator>
          <div className="left">
            <a
              href="/#"
              title="share"
              className="btn text-indent favor sprite_player"
            >
              add
            </a>
            <a
              href="/#"
              title="share"
              className="btn text-indent share sprite_player"
            >
              share
            </a>
          </div>
          <div className="right">
            <a
              href="/#"
              title="volumn"
              className="btn text-indent volume sprite_player"
            >
              volume
            </a>
            <a
              href="/#"
              title="loop"
              className="btn text-indent loop sprite_player"
            >
              loop
            </a>
            <a
              href="/#"
              title="playlist"
              className="btn text-indent playlist sprite_player"
            >
              playlist
            </a>
          </div>
        </Operator>
      </div>
      <audio  ref={audioRef} onTimeUpdate={()=>}/>
    </PlayerBarWrapper>
  );
});
