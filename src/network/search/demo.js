import request from "../request"

export function data(config){
    return request({
    url:"/limit.php",
    params:{
        page:config.page,
        count:config.count
        }
    });
}