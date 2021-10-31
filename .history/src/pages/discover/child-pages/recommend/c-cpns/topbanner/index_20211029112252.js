import React, { memo, useState, useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { Carousel } from "antd";

import { getTopBannerAction } from "../../store/actionCreators";

import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./style";

export default memo(function HYTopBanner(props) {
  // lines to initial fetching data, replaced by hooks
  /* 
  const { getTopBanner } = props;
  useEffect(() => {
        getTopBanner()
      
    }, [getTopBanner]) */

  //local state
  //keep track of the active carousel index
  const [currentIndex, setCurrentIndex] = useState(0);

  //get the data with useDispatch redux
  const dispatch = useDispatch();
  const { topBanner } = useSelector(
    (state) => ({
      // topBanner: state.recommend.topBanner
      // topBanner: state.get("recommend").get("topBanner")
      topBanner: state.getIn(["recommend", "topBanner"]),
    }),
    shallowEqual
  );

  //local hooks
  const carouselRef = useRef();
  //   console.log(topBanner);
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  // method for the carousel,load once
  const beforeChange = useCallback((from, to) => {
    // console.log(from, to);
    setCurrentIndex(to);
  }, []);
  //   const beforeChange1 = (from, to) => {
  //     console.log(from, to);
  //     setCurrentIndex(to);
  //   };

  //   const getBgImgUrl = ()=>{
  //     return topBanner[currentIndex].imageUrl+"?imageView&blur=40x20"
  //   }

  const bgImage =
    topBanner &&
    topBanner[currentIndex] &&
    topBanner[currentIndex].imageUrl + "?imageView&blur=40x20";

  return (
    <BannerWrapper bgImage={bgImage}>
      {/* bgImage={topBanner[currentIndex]} */}
      {/* {console.log(bgImage)} */}
      <div className="banner w980">
        <BannerLeft>
          <Carousel
            ref={carouselRef}
            effect="fade"
            // autoplay
            beforeChange={beforeChange}
          >

            {topBanner.map((item, index) => (
              <div key={item.url}>
                <h3>
                  <img src={item.imageUrl} alt={item.typeTitle}></img>
                </h3>
              </div>
            ))}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button
            className="btn"
            onClick={() => carouselRef.current.prev()}
          ></button>
          <button
            className="btn"
            onClick={() => carouselRef.current.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
});
