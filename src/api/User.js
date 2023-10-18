
import request from '@/utils/request'


/**
 * 登录函数
 * @param {} website 
 */
export function login(login) {
    return request({ url: "/index/login", method: "post", params: login });
}

export function selectAll() {
    return request({ url: "/user/selectall", method: "get" });
}
export function selectByName1(username) {
    return request({ url: "/user/selectByName1/"+username, method: "get"  });
}
export function sss(file) {
    return request({ url: "/product/pic/", method: "post" , data: file  });
}export function ins(user) {
    return request({ url: "/user/insert", method: "post" , data: user });
}export function update1(user) {
    return request({ url: "/user/update1", method: "put" , data: user });
}export function selectpic(username) {
    return request({ url: "/user/selectpic/"+username, method: "get" });
}