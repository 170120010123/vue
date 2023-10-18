<template>
  <div class="login"> 
    <img :src="imgSrc"      alt="" class="picture" />
    <div class="loginPart">
    <el-form   :model="login"   ref="login1"  :rules="rules" >
    <div class="inputElement">
      <el-form-item label="用户名" prop="username" >
      <el-input   v-model="login.username" placeholder="请输入用户名 "></el-input>
      </el-form-item>
    </div>
    <div class="inputElement">
      <el-form-item label="密码" prop="password" >
      <el-input type="password" v-model="login.password" placeholder="请输入密码 " ></el-input>
      </el-form-item>

    </div>
    <div>
    <el-button type="primary"  @click="ousubmit">登录</el-button>
    </div>
    <div style="text-align: right;color: white;">
        <el-link type="warning" href="http://localhost:8081/info">没有账号？去注册</el-link>
    </div> 
  </el-form>
    </div>
  
  </div>

</template>

<script>
import {login} from "@/api/User.js"
import ShareData from '@/utils/localStorage.js'
export default {
data(){

return{
  login:{},
  rules: {
          username: [
            { required: true, message: '用户名不能为空', trigger: 'blur' },
         
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'change' }
          ],
        
        },
    imgSrc: require('../assets/login.png'),
}
},
methods :{
  ousubmit() {
    
      this.$refs["login1"].validate((valid) => {
        if (valid) {
          login(this.login).then(response=>{    
            console.log(response.data) 
           
            if(response.data.code==="0000"){
              ShareData.setToken(response.data.data.token);
              ShareData.setItem("admin",this.login.username)
    
              this.$router.push("/home");
            
            }else{
              this.$message.error('用户名密码错误！');
            }
          });
          // api调用
        } else {
          return false;
        }
      });
    },



}






}





</script>

<style>
.picture{
    width:100%;
 height: 691px;
 
  image-rendering: -webkit-optimize-contrast;
 

 


}
.loginPart{
    position:absolute;
    /*定位方式绝对定位absolute*/
    top:50%;
    left:50%;
    /*顶和高同时设置50%实现的是同时水平垂直居中效果*/
    transform:translate(-50%,-50%);
    /*实现块元素百分比下居中*/
    width:450px;
    padding:50px;
    background: rgba(193, 210, 240,.1);

    
    /*背景颜色为黑色，透明度为0.8*/
    
    box-sizing:border-box;
    /*box-sizing设置盒子模型的解析模式为怪异盒模型，
    将border和padding划归到width范围内*/
    box-shadow: 0px 15px 25px rgba(0, 0, 255,.3);
    /*边框阴影  水平阴影0 垂直阴影15px 模糊25px 颜色黑色透明度0.5*/
    border-radius:15px;
    /*边框圆角，四个角均为15px*/
  }
  .loginPart h2{
    margin:0 0 30px;
    padding:0;
    color: #fff;
    text-align:center;
    /*文字居中*/
  }
  .loginPart .inputbox{
    position:relative;
  }
  .loginPart .inputElement input{
    width: 100%;
    padding:10px 0;
    font-size:16px;
    color:#fff;
    letter-spacing: 1px;
    /*字符间的间距1px*/
    margin-bottom: 30px;
    border:none;
    border-bottom: 1px solid #fff;
    outline:none;
    /*outline用于绘制元素周围的线
    outline：none在这里用途是将输入框的边框的线条使其消失*/
    background: transparent;
    /*背景颜色为透明*/
  }
  .loginPart .inputElement input::-webkit-input-placeholder {
    color: black;
  }
  .login{
    width:100%;
    height:100%;
  }
</style>