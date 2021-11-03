import { memo } from "react";

import SongI
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
