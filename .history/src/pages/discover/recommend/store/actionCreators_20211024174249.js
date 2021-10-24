import instance from "../../../../services/request";
import { CHANGE_TOP_BANNERS } from "./constants";
import get

const getTopBannerAction = () => {
  const changeBannerAction = (banners) => ({
    type: CHANGE_TOP_BANNERS,
    payload: banners,
  });
  return (dispatch) => {
    instance
      .get({
        url: "/banner",
      })
      .then((res) => {
        dispatch(changeBannerAction(res.banners));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};

export default getTopBannerAction