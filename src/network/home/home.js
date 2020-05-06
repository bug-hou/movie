import requert from "../request"

export function limit(config){
    return requert({
        url:"/limit.php",
        params:{
            page:config.page,
            count:config.count,
            type:config.type
        }
    });
}