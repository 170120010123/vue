
import request from '@/utils/request'





export function selectAll(fax) {
    return request({ url: "/doctor/selectAll", method: "get",params:fax });
} 
 
export function selectByTwo(two) {
    return request({ url: "/doctor/selectByTwo", method: "get",params:two });
} 
 
 
export function selectByTime(guahao) {
    return request({ url: "/doctor/selectByTime", method: "get",params:guahao });
} 
export function selectByDp(department) {
    return request({ url: "/doctor/selectByDp/"+department, method: "get" });
} 
 