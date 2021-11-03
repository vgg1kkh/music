import React, { memo } from "react";

import HYTopBanner from "./c-cpns/topbanner";
import RecommendWrapper from "./style";
import HYHotRecommend from "./c-cpns/hot-recommend";
import { Content, RecommendLeft, RecommendRight } from "./style";
import NewAlbum from "./c-cpns/new-album";
import Ranking from "./c-cpns/ranking"
import UserLogin from "./c-cpns/user-login"
import SettleSingerWrapper from "./c-cpns/settle-singer/style";

function Recommend() {
  return (
    <RecommendWrapper>
      <HYTopBanner />
      <Content>
        <RecommendLeft>
          <HYHotRecommend />
          <NewAlbum />
          <Ranking />
        </RecommendLeft>
        <RecommendRight>
          <UserLogin />
          <SettleSinger />
          <
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  );
}

// lines for connecting to the store with connect,modified by using hooks
/* const mapStateToProps= (state)=>({
    topBanner: state.recommend.topBanner,
})

const mapDispatchToProps = dispatch =>(
    {
        getTopBanner: function(){
            dispatch(getTopBannerAction())
        }
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(memo(Recommend))
 */

export default memo(Recommend);
