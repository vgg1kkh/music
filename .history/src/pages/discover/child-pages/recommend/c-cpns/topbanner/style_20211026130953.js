const { default: styled } = require("styled-components");

export const BannerWrapper = styled.div`
  background: url("${(props) => props.bgImage}") center center/cover;
  width: 100%;
  height: 270px;

  .banner {
    position: relative;
    display: flex;
    height: 100%;
    justify-content: space-between;
  }
`;

export const BannerLeft = styled.div`
  width: 730px;
  background-color: #r;
  img {
    width: 100%;
  }

  .ant-carousel .slick-dots {
    margin-bottom: 10px;
    li button {
      height: 14px;
      width: 14px;
      border-radius: 7px;
    }
    li {
        width: 14px;
    }
    li.slick-active {
      width: 14px;
    }
  }
`;

export const BannerRight = styled.a.attrs({
  // href: 'https://music.163.com/#/download',
  href: "https://d1.music.126.net/dmusic/cloudmusicsetup2.8.0.198822.exe",
  target: "_blank",
})`
  width: 250px;
  /* background-color: purple; */
  background: url(${require("@/assets/img/download.png").default});
`;

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  /* background: purple; */
  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require("@/assets/img/banner_sprite.png").default});
    /* background-color: pink; */
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0);

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
    &:nth-child(1) {
      left: -68px;
      background-position: 0 -360px;
    }
    &:nth-child(2) {
      right: -68px;
      background-position: 0 -508px;
    }
  }
`;
