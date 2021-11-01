import { memo } from "react";

import songInfo from "./child-pages/song-info";
import { AppSongDetailWrapper, SongLeft, SongRight } from "./style";

export default memo(function AppSongDetail() {
  return (
    <AppSongDetailWrapper>
      <div className="content w980">
        <SongLeft>
          <SongInfo />
          {/* <SongComment /> */}
        </SongLeft>
        <SongRight>Right</SongRight>
      </div>
    </AppSongDetailWrapper>
  );
});
