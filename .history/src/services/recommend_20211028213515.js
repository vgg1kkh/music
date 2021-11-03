import instance from "./request";

export function getTopBanners() {
  return instance({
    url: "/banner",
  });
}

export function getHotRecommend(limit) {
  return instance({
    url: "/personalized",
    params: {
      limit,
    },
  });
}

export function getNewAlbums(limit=10,offset=0) {
    return instance({
      url: "/album/newest",
      params: {
        limit,offset
      },
    });
  }

  export function getArtistList(limit, cat) {
    return request({
      url: "/artist/list",
      params: {
        cat,
        limit
      }
    })
  }
