import { CHANGE_TOP_BANNERS } from "./constants";
import getTopBanners from "../../../../services/recommend";
import instance from "../../../../services/request";

const getTopBannerAction = () => {
//   const changeBannerAction = (banners) => ({
//     type: CHANGE_TOP_BANNERS,
//     payload: banners,
//   });
  return ((dispatch) => {
   getTopBanners().then(res=>console.log(res))
  
//    instance({
//     url:'/banner'
//   }).then(res=>console.log(res))
//   };
});

export default getTopBanners