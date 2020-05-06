import Axios from 'axios';

export default function(config){
    const install = Axios.create({
        baseURL:"http://www.bug.cn",
        timeout:5000
    })
    return install(config);
}