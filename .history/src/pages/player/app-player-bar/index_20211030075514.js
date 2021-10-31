import { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Slider } from "antd";
import moment from "moment";
import { getImageSize } from "../../../utils/format-utils";
import { createSongDetailsAction } from "../store/";
import { PlayerBarWrapper, Control, PlayerInfo, Operator } from "./style.js";

export default memo(function HYAppPlayerBar() {
  //redux hooks
  const dispatch = useDispatch();
  const {currentSong} = useSelector(state=>({
    currentSong: state.getIn(["player","currentSong"])
  }),shallowEqual)

  useEffect(() => {
    dispatch(createSongDetailsAction(346089));

  }, [dispatch]);

  //other handles
  const picUrl = (currentSong.al && currentSong.al.picUrl) || ""

  const singerName = (currentSong.ar && currentSong.ar[0].name) || "Singer"
  //the song's duration
  const duration = currentSong.dt || 0
  const showDuration = moment(duration).format("hh:mm") 
  return (
    <PlayerBarWrapper className="sprite_player">
        {console.log(currentSong)}
      <div className="content w980">
        <Control>
          <button className="pre sprite_player"></button>
          <button className="play sprite_player"></button>
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
            <span className="total-time"> / {moment(duration).format("hh:mm")}</span>
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
    </PlayerBarWrapper>
  );
});
