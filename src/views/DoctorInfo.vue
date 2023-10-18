<template>
  
  <div>
 <div  id="as"> 
  <el-form :inline="true" :model="doctors" class="demo-form-inline">
  <el-form-item label="医生姓名">
    <el-input v-model="doctors.doname" placeholder="请填写医生姓名"></el-input>
  </el-form-item>
  <el-form-item label="科室">
    <el-select v-model="doctors.department" placeholder="选择科室" @focus="fouc()" >
      <el-option v-for="item in departments" :key="item.id" :label="item.dpname" :value="item.id">
             </el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
  </el-form-item>
</el-form>
</div>
 
 <div> 

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
      prop="money"
      label="金额">
    </el-table-column>
    <el-table-column label="操作"  >
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)"
          
          
          >详细信息</el-button>
      
      </template>
    </el-table-column>
  
  </el-table>
  
  <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pagination.currentPage"
            :page-sizes="[3,5,8]"
            :page-size="pagination.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            >
    </el-pagination>
</div>
  </div>
</template>
 
<script>
import {selectAll} from "@/api/Doctor.js"
import {select} from "@/api/Department.js"
import {selectByTwo} from "@/api/Doctor.js"
export default {
created(){
this.load();

},




  methods: { load(){ 
  selectAll(this.pagination).then((res) => {
    
        if (res.data.code === "0000") {
    this.tableData=res.data.data.list;
   console.log(res.data.data)
  
                        //总条数
                        this.total = res.data.data.total;
                      
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
      },   handleSizeChange(pageSize) {
        this.pagination.pageSize = pageSize;
       
                //重新执行查询
                this.load(); 
      },
      handleCurrentChange(pageNum) {
    this.pagination.currentPage = pageNum;
                //重新执行查询
               
              
                this.load() ;

      },
      handleEdit(index,row){
 console.log(row)
      },
   
 
   
      onSubmit(){
      

        selectByTwo(this.doctors).then((res) => {
    
    if (res.data.code === "0000") {
this.tableData=res.data.data;

console.log("two")
                  
    }
  });




      },
      
      fouc(){
        select().then((res) => {
   
        if (res.data.code === "0000") {
 console.log(res.data.data)
        this.departments=res.data.data 
       
         
        }
      });

      },





    },


    

    data(){ return {
    tableData: [ 


     ],
    doctors:{
name:"", department:""  },
     departments:[],
                total: 0   ,
 
                pagination :{currentPage:1,
               pageSize: 3  ,
             
          }, 
           
          }
  },
 

}

</script>

<style>
 #as{
 position: relative;
right:300px;

 }
 #page{

  margin-top: 100px;
left: 200px;
 }
 .el-form-item{
    margin-left: 50px;
}
</style>