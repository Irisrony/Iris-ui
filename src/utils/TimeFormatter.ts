const padLeftZero = (str: string) : string => {
    return ('00' + str).substring(str.length)
}

export const formatDate = (time: Date,format: string) : string => {
    if(/y+/.exec(format)){
        const ret = /y+/.exec(format)!
        format = format.replace(ret[1],(time.getFullYear + '').substring(4-ret[1].length))
    }
    const o : {[key: string]: number} = {
        'm+': time.getMonth() + 1,
        'd+': time.getDate(),
        'h+': time.getHours(),
        'i+': time.getMinutes(),
        's+': time.getSeconds()
    }
    for(const k in o){
        const ret = new RegExp(`(${k})`).exec(format)
        if(ret){
            const str = o[k] + ''
            format = format.replace(ret[1],ret[1].length === 1 ? str : padLeftZero(str))
        }
    }
    return format
}