import {request} from "./request";

export function getHomeMultidata() {
    return request({
      url:'/home/multidata'
    })
}

export function getHomeGoods(type,pageIndex) {
  return request({
    url:'/home/data',
    params:{
      'new':type,
      'page':pageIndex
    }
  })
}
