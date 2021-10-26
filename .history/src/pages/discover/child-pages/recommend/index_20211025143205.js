import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import getTopBannerAction from "./store/actionCreators";

import <HYTopBanner

function Recommend() {
  // lines to initial fetching data, replaced by hooks
  /* 
  const { getTopBanner } = props;
  useEffect(() => {
        getTopBanner()
      
    }, [getTopBanner]) */

  //get the data with useDispatch
  const dispatch = useDispatch();
  const { topBanner } = useSelector(
    (state) => ({
      // topBanner: state.recommend.topBanner
      // topBanner: state.get("recommend").get("topBanner")
      topBanner: state.getIn(["recommend", "topBanner"]),
    }),
    shallowEqual
  );
  console.log(topBanner);

  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  return (
    <div>
      <HYTopBanner>

      </HYTopBanner>
      {/* {console.log("topBanner.length=",props.topBanner.length)} */}
    </div>
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
