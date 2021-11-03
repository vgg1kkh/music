import React, { memo,useEffect,shallowEqual } from "react";
import { useDispatch, useSelector} from 'react-redux'
import RankingWrapper from "./style";
import ThemeHeaderRcm from "@/components/theme-header-rcm";
import TopRanking from "../../../../../../components/top-ranking";
import { getTopListAction } from "../../store/actionCreators"
import { CHANGE_UP_RANKING } from "../../store/constants";
export default memo(function Ranking() {


// redux hooks
const dispatch = useDispatch()
const { upRanking = [], originRanking = [], newRanking = [] } = useSelector(state => ({
    upRanking: state.getIn(['recommend', 'upRanking']),
    originRanking: state.getIn(['recommend', 'originRanking']),
    newRanking: state.getIn(['recommend', 'newRanking'])
  }), shallowEqual)


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
        <TopRanking info={upRanking} index={0/>
        <TopRanking />
        <TopRanking />
      </div>
    </RankingWrapper>
  );
});
