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

export function getNewAlbum(limit) {
    return instance({
      url: "/personalized",
      params: {
        limit,
      },
    });
  }
