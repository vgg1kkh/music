import request from './'

export function getTopListDetail(id){
   return request({
    url: '/playlist/detail',
    params: {
      id
    }
   })
}