import { getCurrentSongDetails } from "../../../services/player";
import {
  CHANGE_CURRENT_SONG_DETAILS,
  CHANGE_LYRIC_LIST,
  CHANGE_PLAY_LIST,
  CHANGE_CURRENT_SONG_INDEX,
  CHANGE_PLAY_SEQUENCE,
} from "./constants";
import { getRandomNumber } from "@/utils/math-utils";

const changeCurrentSongDetails = (data) => ({
  type: CHANGE_CURRENT_SONG_DETAILS,
  payload: data,
});

export const createSongDetailsAction = (ids) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(["player", "playList"]);
    const index = playList.findIndex((item) => item.id === ids);

    if (index !== -1) {
      dispatch(changeCurrentSongIndexAction(index));
      dispatch(changeCurrentSongDetails(playList[index]));
    } else {
      getCurrentSongDetails(ids).then((res) => {
        console.log("new Song=", res);
        const song = res.songs && res.songs[0];
        if (!song) return;
        const newPlayList = [...playList];
        newPlayList.push(song);
        dispatch(changePlayListAction(newPlayList));
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
        dispatch(changeCurrentSongDetails(song));
      });
    }
  };
};


export const changePlayListAction = (list) => ({
  type: CHANGE_PLAY_LIST,
  payload: list,
});

export const changeCurrentSongIndexAction = (id) => ({
  type: CHANGE_CURRENT_SONG_INDEX,
  payload: id,
});

export const changeSequenceAction = (sequence) => ({
  type: CHANGE_PLAY_SEQUENCE,
  payload: sequence,
});

export const changeCurrentSongAction = (tag) => {
  return (dispatch, getState) => {
    const sequence = getState().getIn(["player", "sequence"]);
    const currentSongIndex = getState().getIn(["player", "currentSongIndex"]);
    const playList = getState().getIn(["player", "playList"]);
    console.log("inChangeCurretSongAction",playList.length)
    
    let nextSongIndex
    switch (sequence) {
      case 0: //random
        nextSongIndex = -999;
        do {
          nextSongIndex = getRandomNumber(playList.length);
          console.log("nextSongIndex=",nextSongIndex);
        } while(nextSongIndex === currentSongIndex)
        break;
      default:
        //sequence & single
        nextSongIndex = currentSongIndex + tag;
        if (nextSongIndex >= playList.length) {
          nextSongIndex = 0;
        } else if (nextSongIndex < 0) {
          nextSongIndex = playList.length - 1;
        }
    }
    const nextSong = playList[nextSongIndex]
    dispatch(changeCurrentSongIndexAction(nextSongIndex))
    dispatch(changeCurrentSongDetails(nextSong))
  };

  //
};

export const getLyricAction = id => {
  return (dispatch) =>{
    
  }
}
