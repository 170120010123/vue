<template>
 <div>
 
    <el-container style="height: 600px; border: 1px solid #eee">
  <el-header style="text-align: right; font-size: 12px;  height:40px;  "   >
    
    <el-dropdown  >
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown"  >
          <el-dropdown-item   @click.native="core">个人信息</el-dropdown-item>
          <el-dropdown-item @click.native="logoutFn">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>{{ username }}</span>
  
  </el-header>
  <el-container>
    <el-aside width="200px">
      <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :router="true">

      <el-menu-item index="1"  route="/home/registered"   >
        <i class="el-icon-s-platform"  ></i>
        <span slot="title" >预约挂号</span>
      </el-menu-item>
      <el-menu-item index="2"    >
        <i class="el-icon-s-platform"  ></i>
        <span slot="title" >特色医疗</span>
      </el-menu-item>
    
      <el-menu-item index="3"   >
        <i class="el-icon-s-platform"  ></i>
        <span slot="title" >就医指南</span>
      </el-menu-item>
     
     
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>信息查询</span>
        </template>

        <el-menu-item index="1-1" route="/home/doctorinfo">医生信息   </el-menu-item>
          <el-menu-item index="1-2">科室导航   </el-menu-item>
          <el-menu-item index="1-3"  route="/info">出诊信息查询   </el-menu-item>
      </el-submenu>
      <el-menu-item index="5"    >
        <i class="el-icon-s-platform"  ></i>
        <span slot="title" >健康科普</span>
      </el-menu-item>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>个人中心</span>
        </template>

        <el-menu-item index="1-1">报告查询   </el-menu-item>
          <el-menu-item index="1-2" route="/home/pay">我的预约   </el-menu-item>
          <el-menu-item index="1-3" route="/home/infotwo">个人信息   </el-menu-item>
      </el-submenu>
    </el-menu>


    </el-aside>
    <el-main>
      
    

<router-view></router-view>
    </el-main>
  </el-container>
</el-container>


 </div>
</template>

<style>
 .el-header {
    background-color: #879fc5;
    color: #dfdeeb;
    line-height: 40px;

 
  }
  


 
  .el-menu-item.is-active {
   background-color: rgb(231, 235, 240) !important;
}
</style>

<script>
import ShareData from '@/utils/localStorage.js'

  export default {
data(){return {
username:"",
}

},
    created(){
    this.load();
    },
    methods: {
load(){
this.username=ShareData.getItem("admin")

},

handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
 
      logoutFn(){
ShareData.clearToken();
this.$message({
            type: 'success',
            message: '注销成功'
          });          
          this.$router.push("/login");
}

},

 
   
    }
  
</script>