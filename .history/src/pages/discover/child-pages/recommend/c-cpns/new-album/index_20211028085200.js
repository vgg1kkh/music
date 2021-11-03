import { memo, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewAlbumWrapper from "./style";
import ThemeHeaderRcm from "@/components/theme-header-rcm";
import { getNewAlbumAction } from "../../store/actionCreators";
import { NEW_ALBUM_LIMIT } from "../../../../../../common/constants";
import { Carousel } from "antd4";
import { getImageSize } from "../../../../../../utils/format-utils";

export default memo(function NewAlbum(props) {
  //redux-hooks
  const dispatch = useDispatch();
  const { newAlbums } = useSelector((state) => ({
    newAlbums: state.getIn(["recommend", "newAlbums"]),
  }));
  //local hooks
  const carouselRef = useRef();
  useEffect(() => {
    dispatch(getNewAlbumAction(NEW_ALBUM_LIMIT));
    //   getNewAlbums().then(res=>console.log(res.data.albums))
  }, [dispatch]);
  return (
    <NewAlbumWrapper>
      <ThemeHeaderRcm title="New Arrival" showIcon={true} right="more" />
      {console.log(newAlbums)}
      <div className="content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={() => carouselRef.current.prev()}
        ></button>
        <button
          className="arrow arrow-right sprite_02"
          onClick={() => carouselRef.current.next()}
        ></button>
        <div className="album">
          {/* <h2>123</h2> */}
          <Carousel ref={carouselRef} dots={false}>
            <ul className="carousel-list">
              {newAlbums.slice(0, 5).map((item) => (
                <li key={item.id} className="carousel-item">
                  <img src={getImageSize(item.blurPicUrl, 120)} alt="pic"></img>
                  <p className="text-nowrap">{item.name}</p>
                  <p className="text-nowrap">{item.artist.name}</p>
                </li>
              ))}
            </ul>
            <ul className="carousel-list">
              {newAlbums.slice(5, 10).map((item) => (
                <li key={item.id} className="carousel-item">
                  <img
                    src={getImageSize(item.blurPicUrl, 120, 100)}
                    alt="pic"
                  ></img>
                  <p className="text-nowrap">{item.name}</p>
                  <p className="text-nowrap">{item.artist.name}</p>
                </li>
              ))}
            </ul>
          </Carousel>
        </div>
      </div>
    </NewAlbumWrapper>
  );
});
