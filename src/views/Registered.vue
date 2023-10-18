<template>
  <div>
    
    <el-dialog title="挂号须知" :visible.sync="dialogFormVisible" :show-close="false"  >
      <div id="context">1、预约挂号只适用于已排班的专家、专病和专科门诊（根据门诊部要求，科室最少排2周门诊，对外开放14天号源，对社康开放15天号源）。</div>
      <div id="context">
2、预约挂号一律采用实名制，请预约时注册个人的真实姓名、身份证号、电话号码。</div>
<div id="context">
3、预约成功后，患者手机会收到预约短信通知。</div>

<div id="context">
4、如专家因故临时变更出诊时间，门诊办应及时在HIS系统上操作停诊，患者将会收到系统发送的停诊短信通知，如患者因故未能收到停诊短信并来到医院就诊，分诊护士则安排其他同等专业及水平的专家为其就诊，如患者不同意则由导医帮助预约下次该专家的出诊。</div>
<div id="context">
5、预约成功后，请于就诊当天在预约时间段前到挂号处出示预约短信并挂号，到相应科室候诊区等候叫号就诊。如果患者因故迟到未能在预约时间段到院挂号就诊，则按普通挂号候诊（迟到不计入黑名单）。</div>
<div id="context">
6、一个预约挂号凭证只能挂一个号。</div>
<div id="context">
7、如患者因故不能前来就诊，应在就诊前一天下午17：00(北京时间)以前通知患者服务中心或160上操作取消预约。未取消预约且不能前来就诊的患者，将作为失约处理，失约3次者，将会被系统拉入黑名单。</div>
<div id="context">
8、预约挂号就诊时间为上午 8:00—12：00，下午14:00—17:00。以30分钟为一个预约时间段。 </div>
 
<div class="clear"></div>

  <div slot="footer" class="dialog-footer" >
    <el-checkbox  v-model="checked"    id="check" >我已阅读并同意《挂号须知》</el-checkbox>
    <el-button type="primary" @click="subm" id="butt">确 定</el-button>
   
  
  </div>
</el-dialog>

<div class="pubc-box1"> 
 <ul class="clearfix">
<li> <a class="ellipsis"  href="/home/guahao" title="消化科" @click="ame1()" ref="a1"><i></i>消化科</a></li>
<li> <a class="ellipsis" href="/home/guahao" title="耳鼻喉科" ref="a2"    @click="ame2()"><i></i>耳鼻喉科</a></li>
<li> <a class="ellipsis" href="/home/guahao" title="眼科" ref="a3"    @click="ame3()"><i></i>眼科</a></li>
<li> <a class="ellipsis" href="/home/guahao" title="神经内科" ref="a4"    @click="ame4()"><i></i>神经内科</a></li>
<li> <a class="ellipsis" href="/home/guahao" title="皮肤科"  ref="a5"   @click="ame5()"><i></i>皮肤科</a></li>
<li> <a class="ellipsis" href="/home/guahao" title="内分泌科" ref="a6"    @click="ame6()"><i></i>内分泌科</a></li>
<li> <a class="ellipsis" href="/home/guahao" title="中医科" ref="a7"    @click="ame7()"><i></i>中医科</a></li>
<li> <a class="ellipsis" href="/home/guahao" title="心理医学科" ref="a8"    @click="ame8()"><i></i>心理医学科</a></li>
<li> <a class="ellipsis" href="/home/guahao" title="肾内科" ref="a9"   @click="ame9()"><i></i>肾内科</a></li>
<li> <a class="ellipsis" href="/home/guahao" title="骨科" ref="a10"  @click="ame10()"><i></i>骨科</a></li>

 </ul>


</div>






  </div>
</template>

<script>
import {insert} from "@/api/Register.js"
import ShareData from '@/utils/localStorage.js'
export default {

  
data(){

  return {
 
    dialogFormVisible:true,
    checked: false,
    achoose:"",
tit:""
  }
},
methods:{
 subm(){

if(this.checked===true)
{
  this.dialogFormVisible=false
}
  },
  ame1(){
this.tit=this.$refs.a1.title
ShareData.setItem("depart",this.tit)
console.log(this.tit)
  },
  ame2(){
this.tit=this.$refs.a2.title
ShareData.setItem("depart",this.tit)
  }

  ,
  ame3(){
this.tit=this.$refs.a3.title
ShareData.setItem("depart",this.tit)
  }

  ,
  ame4(){
this.tit=this.$refs.a4.title
ShareData.setItem("depart",this.tit)
  }
  ,
  ame5(){
this.tit=this.$refs.a5.title
ShareData.setItem("depart",this.tit)
  }
  ,
  ame6(){
this.tit=this.$refs.a6.title
ShareData.setItem("depart",this.tit)
  }
  ,
  ame7(){
this.tit=this.$refs.a7.title
ShareData.setItem("depart",this.tit)
  }
  ,
  ame8(){
this.tit=this.$refs.a8.title
ShareData.setItem("depart",this.tit)
  }
  ,
  ame9(){
this.tit=this.$refs.a9.title
ShareData.setItem("depart",this.tit)
  }
  ,
  ame10(){
this.tit=this.$refs.a10.title
ShareData.setItem("depart",this.tit)
  }

}
}
</script>

<style>
#context{

  float:left;
  margin:auto;
  text-align:left;

}
.clear{

  clear:both;


}
#check{
margin-right:600px ;


}
#butt{
position: relative;
bottom:30px;
right: 100px;
}
.caption {
    font-size: 20px;
    color: #474747;
}
li {
    text-align: -webkit-match-parent;
}
.pubc-box1 li {
    float: left;
    margin-left: 15px;
    cursor: pointer;
    border: 1px solid #cccccc;
    border-top-width: 1px;
    border-right-width: 1px;
    border-bottom-width: 1px;
    border-left-width: 1px;
    border-top-style: solid;
    border-right-style: solid;
    border-bottom-style: solid;
    border-left-style: solid;
    border-top-color: rgb(204, 204, 204);
    border-right-color: rgb(204, 204, 204);
    border-bottom-color: rgb(204, 204, 204);
    border-left-color: rgb(204, 204, 204);
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
    border-radius: 5px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
   
    width: 160px;
    height: 38px;
    line-height: 38px;
    font-size: 20px;
    margin-top: 20px;
    margin-left:60px ;
}
.pubc-box1 {
    margin-top: 2px;
    width: 102%;
    margin-left: -1%;
}

.pubc-box1 li a i {
    position: absolute;
    width: 14px;
    left: 0;
    top: 0;
    height: 100%;
    border-right: 1px solid #ccc;
    background: url(../assets/111.png) no-repeat center;
}
 
 
.ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
}
 

 
a{
  text-decoration:none
}
li:hover {
				background-color: #1491c2;
}
</style>
