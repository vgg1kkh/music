import { memo, useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { NavLink } from "react-router-dom";
import { Slider } from "antd";
import moment from "moment";
import { getImageSize, getPlayUrl } from "../../../utils/format-utils";
import { createSongDetailsAction, changeSequenceAction } from "../store/";
import { PlayerBarWrapper, Control, PlayerInfo, Operator } from "./style.js";


export default memo(function HYAppPlayerBar() {
  //local hooks and props
  const [currentTime, setCurrentTime] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false)

  //redux hooks
  const dispatch = useDispatch();
  const { currentSong } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
    }),
    shallowEqual
  );

  //local hooks
  const audioRef = useRef();
  useEffect(() => {
    dispatch(createSongDetailsAction(1890044606));
  }, [dispatch]);

  // 设置音频src
  useEffect(() => {
    audioRef.current.src = getPlayUrl(currentSong.id);
      // 设置音量
      audioRef.current.volume = 0.3;
      // 如果不是首次加载: 播放音乐
      // if (!firstLoad) setIsPlaying(true + Math.random());
    }, [currentSong]);

  //other handles
  const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
  const singerName = (currentSong.ar && currentSong.ar[0].name) || "Singer Name";
  //count the song's duration(mili-secs)
  const duration = useMemo(() => {
    return currentSong.dt || 0;
  }, [currentSong]);

  //the total time showed on the page
  const showDuration = useMemo(() => {
    return moment(duration).format("mm:ss") || "0:00";
  }, [duration]);

  //the current  time on the page
  const showCurrentTime = useMemo(
    () => moment(currentTime).format("mm:ss"),
    [currentTime]
  );

  //the progress for the slider
  const progress = useMemo(
    () => (currentTime / duration) * 100,
    [currentTime, duration]
  );

  //other handle function
  const playMusic = useCallback(()=>{
    isPlaying? audioRef.current.pause(): audioRef.current.play()
    setIsPlaying(!isPlaying)
  },[isPlaying])

  //update the progress of the slider by the progress of the audio player
  const timeUpdate = (e) => {
    if (!isChanging) {
      // console.log(e.target.currentTime);
      setCurrentTime(e.target.currentTime * 1000);
    }
  };

  const sliderChange = useCallback(
    (value) => {
      // console.log(value,typeof value);
      setIsChanging(true);

      // set the slider current time when dragging the mouse
      setCurrentTime((value * duration) / 100);
    },
    [duration]
  );

  const afterSliderChange = useCallback(
    (value) => {
      // the value received is the percentage(0-100) of the Slider
      // change the audio player's progress
      audioRef.current.currentTime = (value * duration) / 100 / 1000;
      // console.log(value * duration/100/1000)
      setIsChanging(false);
      if(!isPlaying){
          playMusic()
      }
    },
    [duration,isPlaying,playMusic]
  );

  return (
    <PlayerBarWrapper className="sprite_player">

      <div className="content w980">
        <Control isPlaying={isPlaying}>
          <button className="pre sprite_player"></button>
          <button
            className="play sprite_player" 
            onClick={() => playMusic()}
          ></button>
          <button className="next sprite_player"></button>
        </Control>
        <PlayerInfo>
          <div className="image">
            <NavLink to="/discover/song">
              <img src={getImageSize(picUrl, 35, 35)} alt=""></img>
            </NavLink>
          </div>
          <div className="play-detail">
            <div className="song-info">
              <span className="song-name">{currentSong.name}</span>
              <a href="/#" className="singer-name">
                {singerName}
              </a>
            </div>
            <Slider
              defaultValue={30}
              value={progress}
              onChange={sliderChange}
              onAfterChange={afterSliderChange}
            />
          </div>
          <div className="song-time">
            <span className="now-time">{showCurrentTime}</span>
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
            <button
              href="/#"
              title="loop"
              className="btn text-indent loop sprite_player"
              onClick = { dis}
            >
              loop
            </button>
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
      <audio ref={audioRef} onTimeUpdate={timeUpdate} />
    </PlayerBarWrapper>
  );
});
