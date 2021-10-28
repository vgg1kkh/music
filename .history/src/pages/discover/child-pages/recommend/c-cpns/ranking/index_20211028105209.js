import React, { memo } from "react";
import RankingWrapper from "./style";
import ThemeHeaderRcm from "@/components/theme-header-rcm";
import TopRanking from "../../../../../../components/top-ranking";

export default memo(function Ranking() {


  local hooks
  return (
    <RankingWrapper>
      <ThemeHeaderRcm title="Ranking" showIcon={true} right="more" />
      <div className="content">
        <TopRanking />
        <TopRanking />
        <TopRanking />
      </div>
    </RankingWrapper>
  );
});
