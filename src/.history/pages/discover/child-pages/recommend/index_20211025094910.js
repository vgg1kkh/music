import React, { memo, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import getTopBannerAction from "./store/actionCreators";

function Recommend(props) {
  const { getTopBanner } = props;
  // lines to initial fetching data, replaced by hooks
  /* useEffect(() => {
        getTopBanner()
      
    }, [getTopBanner]) */

  //get the data with useDispatch
  const dispatch = useDispatch();
  const {topBanner} = useSelector((state) => ({
    topBanner: state.recommend.topBanner
  }));
   console.log(recommend.topBanner);

  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  return (
    <div>
      Recommend 
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
