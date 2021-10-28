import { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import ThemeHeaderRcm from "@/components/theme-header-rcm";
import { getHotRecommendAction } from "../../store/actionCreators";
import { HotRecommendWrapper } from "./style";

export default memo(function HotRecommend(props) {
  //state
  const { history } = props;

  //redux hooks
  const dispatch = useDispatch();
  const { hotRecommend } = useSelector(state) => ({
        hotRecomend: state.getIn(["recommend", "hotRecommend"]),
      }), shallowEqual);

  //other hooks

  useEffect(() => {
    dispatch(getHotRecommendAction(8));
  }, [dispatch]);

  // other function
  const handleKeyWordClick = (item) => {
    history.push(`/discover/songs?albumName=${item}`);
  };

  return (
    <HotRecommendWrapper>
      <ThemeHeaderRcm
        title="Recommend"
        showIcon={true}
        keywords={["Asian", "Hots", "Rock", "Country", "Eletric"]}
        right="more"
        keywordsClick={(item) => handleKeyWordClick(item)}
      />
      {console.log(hotRecommend)}
    </HotRecommendWrapper>
  );
});
