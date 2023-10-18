<template>
  <div>
    <el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName" v-if="shows">
    <el-table-column
      prop="department"
      label="科室">
    </el-table-column>
    <el-table-column
      prop="time"
      label="时间">
    </el-table-column>
    <el-table-column
      prop="doctor"
      label="医生">
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
          type="success">缴费</el-button>
      
      </template>
    </el-table-column>
  
  </el-table>
  <el-button type="primary" @click="charts()" v-if="ccha">生成图表</el-button>
  <div id="mychart" style="width: 600px;height:400px;" ></div>
  </div>
</template>

<script>
import {selectByName} from "@/api/Register.js" 
import ShareData from '@/utils/localStorage.js'
import {pay} from "@/api/Register.js" 
import {see} from "@/api/Register.js" 
export default {
    created(){

this.load();


},
 
    data(){

return {
  ccha:true,
  shows:true,
  tableData:[],
  us:"",
money:"",
reg:{},
msg:"",
mapss:[],
xx:[],
yy:[],
option : {
  xAxis: {
    type: 'category',
    data: []
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  ]
}
 }
}, methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      handleEdit(index,row){
 this.money=row.money
 this.reg.name=ShareData.getItem("admin")
 this.reg.time=row.time
 this.reg.doctor=row.doctor
console.log(this.reg)
        pay(this.reg,this.money).then((res) => {
          console.log(res.data) 
          this.msg=res.data.msg
    if (res.data.code === "0000") {
 
 if(this.msg=="缴费成功"){
      this.$message({
            type: 'success',
            message: this.msg
          });  
        }
    
                  
    }  else{
      this.$message({
            type: 'warn',
            message: this.msg
          }); 

     }
  });




      },    charts(){

this.shows=false
this.ccha=false

this.da=true
let myChart =this.$echarts.init(document.getElementById("mychart"))
  
myChart.setOption(this.option);

      },
      load(){

        this.us=ShareData.getItem("admin")
        selectByName(this.us).then((res) => {
    
    if (res.data.code === "0000") {
this.tableData=res.data.data;
 
 
                  
    }
  });
  
  see(this.us).then((res) => {
     
    if (res.data.code === "0000") {
this.mapss=res.data.data
 
 
 for (var i = 0; i < res.data.data.length; i++) {
 console.log(this.mapss[i].countss)
this.option.xAxis.data.push(this.mapss[i].department)
this.option.series[0].data.push(this.mapss[i].countss)
       }
       
    
    }
    
   
  });
      },
   
    }
}
</script>

<style>

</style>