import { CHANGE_TOP_BANNERS } from "./constants";
import {getTopBanners,getHotRecommend} from "@/services/recommend";

const changeBannerAction = (banners) => ({
  type: CHANGE_TOP_BANNERS,
  payload: banners,
});

export const getTopBannerAction = () => {
    return (dispatch) => {
    getTopBanners().then((res) => {
      // console.log(res.data);
      dispatch(changeBannerAction(res.data.banners))
    });
  };
};



export const getHotRecommendAction = () => {
  return (dispatch) => {

  }
}


