import { memo, useEffect } from "react";
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
          {/* <h2>123</h2> */}
          <Carousel
            style={{ backgroundColor: "pink", width: "640px", height: "169px" }}
          >
            <ul className="carousel-list">
              {newAlbums.slice(0,5).map(item=>(
                 <li key={item.id} className="carousel-item">
                     <img src={getImageSize(item.blurPicUrl,240)} alt="pic"></img>
                 </li>
                        
))}
           
            </ul>
            <div>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
            </div>
          </Carousel>
        </div>
      </div>
    </NewAlbumWrapper>
  );
});
