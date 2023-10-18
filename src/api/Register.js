import request from '@/utils/request'



export function selectAll(page) {
    return request({ url: "/register/selectall", method: "get" ,params:page});
}export function insert(register) {
    return request({ url: "/register/insert", method: "post" ,data:register});
}export function selectByName(name) {
    return request({ url: "/register/selectByName/"+name, method: "get"});
}
export function pay(register,money) {
    return request({ url: "/register/pay/"+money, method: "post",data:register});
}export function see(name) {
    return request({ url: "/register/see/"+name, method: "get"});
}