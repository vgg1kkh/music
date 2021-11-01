export const getImageSize=(url,x,y=x)=>{
    log
    return url+`?param=${x}y${y}`
}

export const getCount= (num)=>{
    if(num<1000) return num
    if(num<1000000){
        return Math.floor(num/1000)+" K"
    }else{
        return Math.floor(num/1000000)+" M"
    }
}

export function getPlayUrl(id) {
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
  }