<template> 
  <div>
 <div  id="as"> 
  <el-form :inline="true" :model="guahao" class="demo-form-inline">
  <el-form-item label="医生姓名">
    <el-input v-model="guahao.doname" placeholder="请填写医生姓名"></el-input>
  </el-form-item>
  <el-form-item label="日期"> 
  <el-date-picker
      v-model="value"
      type="datetimerange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    value-format="yyyy-MM-dd HH:mm:ss" >
    </el-date-picker>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="ons">查询</el-button>
  </el-form-item>
</el-form>
</div>
<el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="doname"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="sex"
      label="性别"
      width="180">
    </el-table-column>
    <el-table-column
      prop="age"
      label="年龄">
    </el-table-column>
    <el-table-column
      prop="posts"
      label="职位">
    </el-table-column>

    <el-table-column
      prop="department.dpname"
      label="科室">
    </el-table-column>
    <el-table-column
      prop="begintime"
      label="起始时间">
    </el-table-column>
    <el-table-column
      prop="endtime"
      label="终止时间">
    </el-table-column>
    <el-table-column
      prop="money"
      label="金额">
    </el-table-column>
    <el-table-column label="操作"  >
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)"
          type="success">预约挂号</el-button>
      
      </template>
    </el-table-column>
  
  </el-table>
 <div class="aaa"> 
  <el-dialog title="挂号信息" :visible.sync="dialogFormVisible" style="margin: auto; ">
  <el-form :model="form">
    <el-form-item label="挂号科室" :label-width="formLabelWidth">
      <el-input v-model="form.dpname" autocomplete="off" :disabled="true" ></el-input>
    </el-form-item>
    <el-form-item label="科室区域" :label-width="formLabelWidth">
      <el-input v-model="form.floor" autocomplete="off"    :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="挂号医生" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="就诊日期" :label-width="formLabelWidth">
      <el-input v-model="form.time" autocomplete="off" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="医事服务费" :label-width="formLabelWidth">
      <el-input v-model="form.money" autocomplete="off" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="就诊人" :label-width="formLabelWidth">
      <el-input v-model="form.usname" autocomplete="off" :disabled="true"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="guahao1()">确 定</el-button>
  </div>
</el-dialog>
</div>


</div>

</template>
 
<script>
import ShareData from '@/utils/localStorage.js'
import {selectByTime} from "@/api/Doctor.js" 
import {selectByDp} from "@/api/Doctor.js" 
import {selectByName} from "@/api/Department.js" 
import {insert} from "@/api/Register.js" 
import {selectByName1} from "@/api/User.js" 
export default {
created(){

this.load();


},

  
data(){

return {
  guahao:{},
  tableData:[],
value:"",
form:{},
dialogFormVisible:false,
formLabelWidth: '120px',
 ti:"",
 abc:"",
 reg:{}
}
},
methods:{
load(){
  this.guahao.department =ShareData.getItem("depart"),
  this.ti=ShareData.getItem("depart"),
  
 selectByDp( this.guahao.department ).then((res) => {
    
    if (res.data.code === "0000") {

this.tableData=res.data.data;
 
                  
                  
    }
  });
 
  selectByName(this.ti).then((res) => {
    
    if (res.data.code === "0000") {
   this.abc=   res.data.data.floor
   console.log(this.abc)

   this.form.floor=this.abc
   console.log(this.form.floor)
              console.log(res.data.data)
    }
  });
}
,
ons(){
this.guahao.btime=this.value[0],
this.guahao.etime=this.value[1],
  selectByTime(this.guahao).then((res) => {
    
    if (res.data.code === "0000") {
this.tableData=res.data.data;
 
                  
                  
    }
  });

}
,
handleEdit(index,row){

this.dialogFormVisible=true
this.form.dpname=ShareData.getItem("depart")
this.form.money=row.money
this.form.name=row.doname
this.form.time=row.begintime
this.form.usname=ShareData.getItem("admin")
selectByName1(this.form.usname).then((res) => {
    
    if (res.data.code === "0000") {
 console.log(res.data.data)
      this.reg.age=res.data.data.age
      this.reg.sex=res.data.data.sex
    }
  });

},

guahao1(){

  this.dialogFormVisible=false
 this.reg.name=ShareData.getItem("admin"),
 
 
  this.reg.department=this.form.dpname
  this.reg.time=this.form.time
  this.reg.doctor=this.form.name
  this.reg.money=this.form.money
  insert(this.reg).then((res) => {
    
    if (res.data.code === "0000") {
console.log(this.reg)
      this.$message({
            type: 'success',
            message: '挂号成功'
          });  
                  
          this.$router.push("/home/pay");   
    }
  });





},
tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      
      

}

}
</script>

<style>
 #as{
 position: relative;
right:200px;

 }

.aaa  input{
  position:absolute;
    /*定位方式绝对定位absolute*/
    top:50%;
    left:50%;
    /*顶和高同时设置50%实现的是同时水平垂直居中效果*/
    transform:translate(-50%,-50%);
    /*实现块元素百分比下居中*/
    width:400px;
    height: 50px;
    padding:50px;
    background: rgba(193, 210, 240,.1);

    
    /*背景颜色为黑色，透明度为0.8*/
    
    box-sizing:border-box;
    /*box-sizing设置盒子模型的解析模式为怪异盒模型，
    将border和padding划归到width范围内*/ 
    box-shadow: 0px 15px 25px rgba(1, 1, 16, 0.3);
    /*边框阴影  水平阴影0 垂直阴影15px 模糊25px 颜色黑色透明度0.5*/
    border-radius:15px;
    /*边框圆角，四个角均为15px*/
 
 } .aaa h2{
    margin:0 0 30px;
    padding:0;
    color: #030000;
    text-align:center;
  
    /*文字居中*/
  }
  .aaa .inputbox{
    position:relative;
  }
  .aaa  input{
    width: 100%;
    padding:10px 0;
    font-size:16px;
    color:#0d0101;
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
  .aaa  input::-webkit-input-placeholder {
    color: black;
  }
</style>