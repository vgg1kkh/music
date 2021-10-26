import React, { memo,useEffect,shallowEqual } from 'react'
import { useSelector,useDispatch } from 'react-redux';

import { Carousel } from 'antd';

import getTopBannerAction from '../../store/actionCreators';


import {
    BannerWrapper,BannerLeft,BannerRight,BannerControl
} from './style'

export default memo(function HYTopBanner(props) {

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
        <BannerWrapper>
            <div className="banner w980">
                <BannerLeft>
                <Carousel effect="fade">
    <div>
      <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
  </Carousel>,
                </BannerLeft>
                <BannerRight></BannerRight>
                <BannerControl></BannerControl>
            </div>
        </BannerWrapper>
    )
})

