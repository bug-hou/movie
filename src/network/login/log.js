import request from '../request'

export function log(config){
    return request({
        url:"/user.php",
        params:{
            id:config.id,
            pwd:config.pwd
        }
    });
}