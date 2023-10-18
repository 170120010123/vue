<template>
  <div>
    <el-form :model="form" class="s">
    <el-form-item label="姓名" :label-width="formLabelWidth">
      <el-input v-model="form.username" autocomplete="off"  ></el-input>
    </el-form-item>
    <el-form-item label="性别" :label-width="formLabelWidth">
      <el-input v-model="form.sex" autocomplete="off"    ></el-input>
    </el-form-item>
    <el-form-item label="年龄" :label-width="formLabelWidth">
      <el-input v-model="form.age" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="手机号" :label-width="formLabelWidth">
      <el-input v-model="form.phone" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="银行卡" :label-width="formLabelWidth">
      <el-input v-model="form.idcard" autocomplete="off"></el-input>
    </el-form-item>
    
  </el-form> 
  <el-image :src="src"  ></el-image>
  个人照片
  <el-upload
  class="upload-demo"
  action="#"
  :on-change="handleChange"
  
  
  :http-request="UploadImage"
  >
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
  <el-button type="primary" @click="xiugai()">确 定</el-button>

  </div>
</template>

<script> 
import {selectByName1} from "@/api/User.js" 
import {selectpic} from "@/api/User.js" 
import {update1} from "@/api/User.js" 
import {sss} from "@/api/User.js" 
import ShareData from '@/utils/localStorage.js'
export default {

    created(){

this.load();


},
    data(){

return {
 
    form:{},
   
    formLabelWidth: '120px',
    us:"",
    src:"",
  
 
}},
methods:{
    UploadImage(param){
      console.log(param);
      const formData = new FormData()
      formData.append('file', param.file)
 
 console.log(formData)
      sss(formData).then((res) => {
    
    if (res.data.code === "0000") {
 console.log("ok")

 
                  
    }
  });},
load(){
this.us=ShareData.getItem("admin")
    selectByName1(this.us).then((res) => {
    
    if (res.data.code === "0000") {
 this.form=res.data.data
     
    }
  });
  selectpic(this.us).then((res) => {
 
    if (res.data.code === "0000") {
 console.log(res.data)
     this.src= res.data.msg
    
     console.log( this.src)
    }
  });
},handleChange(){},
xiugai(){
    update1(this.form).then((res) => {
    
    if (res.data.code === "0000") { 
        this.$message({
          type: 'success',
          message: '修改成功'
        }); 
     
    }
  });

},

    
}
}
</script>

<style>
.s{
margin: auto;
    width: 560px;
}
</style>