import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import getTopBannerAction from "./store/actionCreators";

import HYTopBanner from "./c-cpns/topbanner"

function Recommend() {


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
