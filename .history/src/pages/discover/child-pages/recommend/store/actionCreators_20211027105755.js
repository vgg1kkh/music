import { CHANGE_TOP_BANNERS } from "./constants";
import {getTopBanners} from "@/services/recommend";

const getTopBannerAction = () => {
    
  return (dispatch) => {
    getTopBanners().then((res) => {
      // console.log(res.data);
      dispatch(changeBannerAction(res.data.banners))
    });
  };
};

export default getTopBannerAction;
