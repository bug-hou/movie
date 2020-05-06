import request from "../request"

export function add(config) {
    return request({
        url:"/add.php",
        params:{
          id:config.id,
          pwd:config.pwd,
          name:config.name
        }
    });
}