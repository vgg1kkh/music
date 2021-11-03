export const getImageSize=(url,x,y=x)=>{
    return url+`?param=${x}y${size}`
}

export const getCount= (num)=>{
    if(num<1000) return num
    if(num<1000000){
        return Math.floor(num/1000)+" K"
    }else{
        return Math.floor(num/1000000)+" M"
    }
}