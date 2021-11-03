import request from './request'

export function getTopListDetail(id){
   return request({
    url: '/playlist/detail',
    params: {
      id
    }
   })
}