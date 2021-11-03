import React, { memo,useEffect } from "react";
import { useDispatch, useSelector} from 'react-redux'
import RankingWrapper from "./style";
import ThemeHeaderRcm from "@/components/theme-header-rcm";
import TopRanking from "../../../../../../components/top-ranking";
import { getTopListAction } from
export default memo(function Ranking() {


// redux hooks
const dispatch = useDispatch()


// local hooks

  // other hook
  useEffect(() => { 
    dispatch(getTopListAction(19723756))
    dispatch(getTopListAction(3779629))
    dispatch(getTopListAction(2884035))
  }, [dispatch])
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
