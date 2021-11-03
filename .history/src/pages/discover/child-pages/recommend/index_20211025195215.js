import React, { memo } from "react";

import HYTopBanner from "./c-cpns/topbanner"
import  HYW

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
