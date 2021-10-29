import {
  CHANGE_HOT_RECOMMEND,
  CHANGE_TOP_BANNERS,
  CHANGE_NEW_ALBUM,
  CHANGE_UP_RANKING,
  CHANGE_ORIGIN_RANKING,
  CHANGE_NEW_RANKING
} from "./constants";
import { getTopBanners, getHotRecommend,getSettleSinger } from "@/services/recommend";
import { getNewAlbums } from "../../../../../services/recommend";
import { getTopListDetail } from "../../../../../services/toplist";

const changeBannerAction = (banners) => ({
  type: CHANGE_TOP_BANNERS,
  payload: banners,
});

export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      // console.log(res.data);
      dispatch(changeBannerAction(res.data.banners));
    });
  };
};

const changeHotRecommendAction = (data) => {
  return {
    type: CHANGE_HOT_RECOMMEND,
    payload: data,
  };
};

export const getHotRecommendAction = (limit) => {
  return (dispatch) => {
    getHotRecommend(limit).then((res) => {
      dispatch(changeHotRecommendAction(res.data.result));
    });
  };
};

const changeNewAlbumAction = (data) => {
  return {
    type: CHANGE_NEW_ALBUM,
    payload: data,
  };
};

export const getNewAlbumAction = (limit) => {
  return (dispatch) => {
    getNewAlbums(limit).then((res) => {
      dispatch(changeNewAlbumAction(res.data.albums.slice(0, 10)));
    });
  };
};

const changeTopListAction = (id,data)=>{
  
   switch(id){
       case 19723756: 
       return {
       type: CHANGE_UP_RANKING,
       payload: data
     }
     case 3779629: return {
      type: CHANGE_NEW_RANKING,
      payload: data
    }
    case 2884035: return {
      type: CHANGE_ORIGIN_RANKING,
      payload: data
    }
    default:break;
   }
}

export const getTopListAction = (id) => {
  return (dispatch) => {
    getTopListDetail(id).then((res) => {
      dispatch(changeTopListAction(id,res.data.playlist))
      // console.log(res.data.playlist) 
    })    
  };
};
const getSettleSinger = ()=>{

}

export const getSettleSingerAction = (limit,area)=>{
  return dispatch => {
    (getSettleSinger(limit,area).
  }
}


