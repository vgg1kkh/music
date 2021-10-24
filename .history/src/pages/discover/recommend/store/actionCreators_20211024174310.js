import { CHANGE_TOP_BANNERS } from "./constants";
import getTopBanners from "../../../../services/recommend";

const getTopBannerAction = () => {
  const changeBannerAction = (banners) => ({
    type: CHANGE_TOP_BANNERS,
    payload: banners,
  });
  return (dispatch) => {
   
      .then((res) => {
        dispatch(changeBannerAction(res.banners));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};

export default getTopBannerAction