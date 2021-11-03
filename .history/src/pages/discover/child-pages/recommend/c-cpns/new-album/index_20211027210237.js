import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewAlbumWrapper from "./style";
import ThemeHeaderRcm from "@/components/theme-header-rcm";
import { getNewAlbumAction } from "../../store/actionCreators";
import { NEW_ALBUM_LIMIT } from "../../../../../../common/constants";
import { Carousel } from "antd4";

export default memo(function NewAlbum(props) {
  //redux-hooks
  const dispatch = useDispatch();
  const { newAlbums } = useSelector((state) => ({
    newAlbums: state.getIn(["recommend", "newAlbums"]),
  }));

  useEffect(() => {
    dispatch(getNewAlbumAction(NEW_ALBUM_LIMIT));
    //   getNewAlbums().then(res=>console.log(res.data.albums))
  }, [dispatch]);
  return (
    <NewAlbumWrapper>
      <ThemeHeaderRcm title="New Arrival" showIcon={true} right="more" />
      {console.log(newAlbums)}
      <div className="content">
          <button className="arrow arrow-left sprite_02"></button>
          <button className="arrow arrow-right sprite_02"></button>
          <div className="album">
              <Carousel>
                <h3 style={{color:'#000}}>1</h3>
                <h3>2</h3>
              </Carousel >
          </div>

      </div>
    </NewAlbumWrapper>
  );
});
