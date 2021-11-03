import { CHANGE_TOP_BANNERS } from "./constants";
import getTopBanners from "../../../../services/recommend";

const getTopBannerAction = () => {
  const changeBannerAction = (banners) => ({
    type: CHANGE_TOP_BANNERS,
    payload: banners,
  });
  return (dispatch) => {
//    getTopBanners().then(res=>console.log(res))
  };
};

export default getTopBannerAction