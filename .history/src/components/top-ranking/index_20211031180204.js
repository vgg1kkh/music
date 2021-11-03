import { memo } from "react";
import { getImageSize } from "@/utils/format-utils";

import { TopRankingWrapper } from "./style";
import { createSongDetailsAction } from "../../pages/player/store"

export default memo(function TopRanking(props) {
  const { info, index } = props;
  const { tracks = [] } = info;

 const playMusic = (e,item) => {
   e.preventDefault()
   console.log(item.id)
   createSongDetailsAction(item.id)
 }

  return (
    <TopRankingWrapper>
      <div className="ranking-header">
        <div className="image">
          <img src={getImageSize(info.coverImgUrl, 80)} alt=""></img>
          <a href="/todo" className="image-cover">ranking</a>
        </div>
        <div className="tit">
          <div>
            <h3>{info.name}</h3>
          </div>
          <div className="btn">
            <a
              href="/discover/recommend"
              className="play sprite_02 text-indent no-link"
            >
              Play
            </a>
            <a
              href="/discover/recommend"
              className="sprite_02 text-indent favourite no-link"
            >
              +
            </a>
          </div>
        </div>
      </div>
      <div className="ranking-list">
        {tracks &&
          tracks.length > 0 &&
          tracks.slice(0, 10).map((item, index) => (
            <div key={item.id} className="list-item">
              <div className="number">{index + 1}</div>
              <a
                href="/play"
                className="song-name text-nowrap"
                // onClick={(e) => playMusic(e, item)}
              >
                {item.name}
              </a>
              <div className="open">
                  <a
                    href="/discover/recommend"
                    className="sprite_02 btn play"
                    onClick={e => playMusic(e,item)}
                  >
                    {item.name}
                  </a>
                  <a
                    href="/discover/recommend"
                    className="sprite_icon2 btn addto"
                    // onClick={e => addPlaylist(e,item.id)}
                  >
                    {item.name}
                  </a>
                  <a href="/play" className="no-link sprite_02 btn favourite">
                    {item.name}
                  </a>
                </div>
            </div>
          ))}
      </div>
      <div className="ranking-footer">
      <a href="/all" className="show-all" 
    //   onClick={(e) => toLink(e)}
      >
          <h3>Full List &gt;</h3>
        </a>
      </div>
    </TopRankingWrapper>
  );
});
