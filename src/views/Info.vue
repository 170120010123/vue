<template>
  <div> 
    <img :src="imgSrc"      alt="" class="picture" />
    <div class="loginPart">
    <el-form :rules="rules" ref="loginForm" :model="loginForm" class="loginContainer">
            <h3 class="loginTitle">
            用户注册
            </h3>
            <el-form-item prop="username">
                <el-input type="text" v-model="loginForm.username" placeholder="请输入用户名" >
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="loginForm.password" placeholder="请输入密码" >
                </el-input>
            </el-form-item>
            
           
            <el-button type="primary" style="width:100%" @click="submitLogin">注册</el-button>
        </el-form>
      </div>
   </div> 
</template>

<script>
import {ins} from "@/api/User.js"
export default {
 
    data(){
      return{  
          loginForm:{
            
          },
          
          rules:{
              username:[{required:true,message:"请输入用户名",trigger:"blur"},{ min: 5, max: 14, message: '长度在 5 到 14 个字符', trigger: 'blur' }
              ],
              password:[{required:true,message:"请输入密码",trigger:"blur"},,{ min: 6,  message: '密码长度要大于6', trigger: 'blur' }],
              code:[{required:true,message:"请输入验证码",trigger:"blur"}],
          }
          ,
          imgSrc: require('../assets/aa.png'),

      }
  },
    methods:{
      submitLogin(){
          this.$refs.loginForm.validate((valid) => {
              if (valid) {
                ins(this.loginForm).then(response=>{    
          
           
          if(response.data.code==="0000"){
            this.$message({
          type: 'success',
          message: '注册成功'
        }); 
            this.$router.push("/");
          
          } 
          else{

            this.$message({
          type: 'warn',
          message: '注册失败'
        }); 
          }
        });
     
        
        
        
        
        } else {
                  this.$message.error('注册失败');
                  return false;
              }
          });
      }
    }
};
</script>

<style>.loginPart{
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
   
    .loginTitle{
        margin: 0px auto 48px auto;
        text-align: center;
        font-size: 40px;
    }
    .loginRemember{
        text-align: left;
        margin: 0px 0px 15px 0px;
    }
    .body{
        width: 100vw;
        height: 100vh;
        background-image: url("../assets/aa.png") ;
        background-size:100%;
       overflow: hidden;
    }.picture{
    width:100%;
 height: 691px;
 
  image-rendering: -webkit-optimize-contrast;
 

 


}
</style>
 