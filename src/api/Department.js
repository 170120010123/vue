
import request from '@/utils/request'
export function select() {
    return request({ url: "/department/select", method: "get"});
} 
export function selectByName(dpname) {
    return request({ url: "/department/selectByName/"+dpname, method: "get"  });
} 
 