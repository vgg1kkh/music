import { memo } from "react";
import { getImageSize } from "@/utils/format-utils";

import { TopRankingWrapper } from "./style";

export default memo(function TopRanking(props) {
  const { info, index } = props;

  return (
    <TopRankingWrapper>
      <div className="ranking-header">
        <div className="image">
          <img src={getImageSize(info.coverImgUrl, 80)} alt=""></img>
        </div>
        <div className="title">
          <div>
            <h3>{info.name}</h3>
          </div>
          <div className="btn">
            <a
              href="/discover/recommend"
              className=" no-link sprite_02 text-indent play"
            >
              Play
            </a>
            <a
              href="/discover/recommend"
              className=" sprite_02 text-indent favourite"
            >
              +
            </a>
          </div>
        </div>
      </div>
      <div className="ranking-list">List</div>
      <div className="ranking-footer">Footer</div>
    </TopRankingWrapper>
  );
});
