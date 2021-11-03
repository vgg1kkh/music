import { CHANGE_HOT_RECOMMEND, CHANGE_TOP_BANNERS,CHANGE_NEW_ALBUM} from "./constants";
import {getTopBanners,getHotRecommend} from "@/services/recommend";
import { getNewAlbums } from "../../../../../services/recommend";

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

const changeHotRecommendAction = (data)=>{
  return {
    type: CHANGE_HOT_RECOMMEND,
    payload:data
  }
}

export const getHotRecommendAction = (limit) => {
  return (dispatch) => {
    getHotRecommend(limit).then(res=>{
      dispatch(changeHotRecommendAction(res.data.result))
    });
  };
}

const changeNewAlbumAction= (data)=>{
  return {
    type:CHANGE_NEW_ALBUM,
    payload: data
  }
}

export const getNewAlbumAction = (limit) => {
  return (dispatch) => {
    getNewAlbums(limit).then(res=>{
      console.log(res.data.)
      dispatch(changeNewAlbumAction(res.data.albums))
    })
  }
}


