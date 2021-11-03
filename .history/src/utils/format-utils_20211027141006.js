export const getImageSize=(url,size)=>{
    return url+$`?param=${y140`
}

export const getCount= (num)=>{
    if(num<1000) return num
    if(num<1000000){
        return Math.floor(num/1000)+"K"
    }else{
        return Math.floor(num/1000000)+"M"
    }
}