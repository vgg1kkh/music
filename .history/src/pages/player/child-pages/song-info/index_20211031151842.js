import { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";



import { getImageSize } from "../../../../utils/format-utils";
import { SongInfoWrapper } from "./style";

export default memo(function SongInfo() {
  // redux hook
  const {
    currentSong,
    lyricList = [],
    totalComment = [],
  } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
      lyricList: state.getIn(["player", "lyricList"]),
      totalComment: state.getIn(["player", "currentCommentTotal"]),
    }),
    shallowEqual
  );

  // other handle
  const { Panel } = Collapse;
  const pirUrl = currentSong.al && currentSong.al.picUrl;
  const songName = currentSong.name ? currentSong.name : "";
  const singer = currentSong.ar && currentSong.ar[0].name;
  const album = currentSong.al && currentSong.al.name;
  return (
    <SongInfoWrapper>
      <div className="album">
        <img src={getImageSize(pirUrl, 130)} alt="" />
        <div className="image_cover cover"></div>
      </div>
      <div></div>
    </SongInfoWrapper>
  );
});
