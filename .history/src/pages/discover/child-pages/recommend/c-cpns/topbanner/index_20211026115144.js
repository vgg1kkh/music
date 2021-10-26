import React, { memo, useState,useEffect, shallowEqual,useRef,useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Carousel } from "antd4";

import getTopBannerAction from "../../store/actionCreators";

import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./style";

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
    
  const carouselRef = useRef()
//   console.log(topBanner);
  //keep track of the active carousel index
  const [currentIndex, setCurrentIndex] = useState()
  
  // method for the carousel
  const beforeChange= (from, to)=>{
      console.log(from,to);
      setCurrentIndex(to)
  }

//   const getBgImgUrl = ()=>{
//     return topBanner[currentIndex].imageUrl+"?imageView&blur=40x20"
//   }

  const bgImage =
    topBanner &&
    topBanner[currentIndex] &&
    topBanner[currentIndex].imageUrl + '?imageView&blur=40x20'



  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  

  return (
      
    <BannerWrapper bgImage={bgImage}>
        {/* bgImage={topBanner[currentIndex]} */}
        {console.log(bgImage)}
      <div className="banner w980">
        <BannerLeft>
          <Carousel ref={carouselRef} 
          effect="fade" 
          autoplay
          beforeChange={beforeChange}>
            {/* <div>
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
            </div> */}
            {topBanner.map((item,index)=>(
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
            <button className="btn"onClick={()=>carouselRef.current.prev()}></button>
            <button className="btn"onClick={()=>carouselRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
});
