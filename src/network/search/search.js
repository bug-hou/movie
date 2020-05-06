import request from "../request"

export function search(config){
    return request({
        url:"/search.php",
        params:{
            text:config
        }
    })
}