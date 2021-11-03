import React, { memo } from "react";

import { getImageSize,getCount } from "../../utils/format-utils";
import SongCoverWrapper from "./style";

export default memo(function SongCover(props) {
  const { info, songList, width = 140 } = props;
  return (
    <SongCoverWrapper width={width}>
      <div className="cover-wrapper">
        <img src={getImageSize(info.picUrl)} alt="song" />
        <div className="cover-mask sprite_cover">
          <div className="bottom-bar sprite_cover">
            <span>
              <i className="sprite_icon erji"></i>
              {/* {getCount(playCount)} */}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div> 
      </div>


      <div className="cover-title text-nowrap">by-{info.name}</div>
      {/* <div className="cover-source text-nowrap">
        by {(info && info.copywriter) || nickname}
      </div> */}
    </SongCoverWrapper>
  );
});
