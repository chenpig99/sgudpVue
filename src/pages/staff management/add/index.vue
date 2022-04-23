<template>
<div class="check" style="background-color: #ffffff"> 
  <el-button  type="info" style="float:right" @click="dialogFormVisible = true">新增员工</el-button>
       <el-dialog title="新增员工信息" :visible.sync="dialogFormVisible">
          <el-form :model="form">
              <el-form-item label="员工Id" :label-width="formLabelWidth">
                 <el-input v-model="form.id" autocomplete="off" style="width:217px" value="Number"></el-input>
              </el-form-item>
              <el-form-item label="员工姓名" :label-width="formLabelWidth">
                 <el-input v-model="form.user_name" autocomplete="off" style="width:217px" value="text"></el-input>
              </el-form-item>
              <el-form-item label="员工职位/权限" :label-width="formLabelWidth">
                 <el-input v-model="form.employee_position" autocomplete="off" style="width:217px" value="text"></el-input>
              </el-form-item>
              <el-form-item label="联系方式" :label-width="formLabelWidth">
                 <el-input v-model="form.eemployee_contact" autocomplete="off" style="width:217px" value="number"></el-input>
              </el-form-item>
           </el-form>
          <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
               <el-button type="primary" @click="addUser">确 定</el-button>
           </div>
       </el-dialog>
    <el-table
      class="table"
      :data="tableData"
      style="width: 100%"
      max-height="500"
    >
    
      <el-table-column fixed prop="id" label="员工Id" width="120">
      </el-table-column>
      <el-table-column prop="user_name" label="员工姓名" width="120">
      </el-table-column>
      <el-table-column prop="employee_position" label="员工职位/权限" width="120">
      </el-table-column>
      <el-table-column prop="employee_contact" label="联系方式" width="120">
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page.currentPage"
        :page-sizes="[10, 20, 30, 40,50]"
        
        :page-size=this.page.pageSize
        layout="total, sizes, prev, pager, next, jumper"
        :total="this.page.total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import axios from '../../../axios'
export default {
  data() {
    return {
       tableData: [
        
      ],
       dialogFormVisible: false,
       form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
      page:{
        //当前页码
          currentPage:1,
        //每页条数
          pageSize:10,
        //数据总条数
          total:'',
      },
    }
    
    ;
  },
  methods: {
    //新增员工
    addUser(){
      
      if(this.from.id&&this.form.user_name&&this.form.employee_position&&this.form.employee_contact==''){ 
     alert('输入框不能为空！')
      }else{
         this.dialogFormVisible = false
      }
    },
    //条数选择
    handleSizeChange(val) {
      this.page.pageSize=val;
      this.page.currentPage=1;
      axios({
        url:'/dp/goods/query',
        method:"post",
        //上传page参数,让后端进行分页
        data:JSON.stringify(this.page)
      }).then(res=>{
        //拿到后端分页数据
        this.tableData=res.data.data.records;
        //拿到后端数据总条数
        this.page.total=parseInt(res.data.data.total);
      })
    },
     handleCurrentChange(val) {
      this.page.currentPage=val;
      console.log(`当前页: ${val}`);
      axios({
         url:'/dp/goods/query',
         method:"post",
         //需要想办法传入page对象
         data:JSON.stringify(this.page),
      }).then(res=>{
        this.tableData=res.data.data.records; 
      }).catch(err=>{
         this.$alert(err.response.data.msg, "请联系管理员", {
           confirmButtonText: "确定",
           callback: action => {
             
           }
         }); 
      })
    },
  },
  created()  {
    console.log(this.page)
    axios({
        url:'/dp/goods/query',
        method:"post",
            //需要想办法传入page对象
         data:JSON.stringify(this.page),
    }).then(res=>{
        this.tableData=res.data.data.records;
        this.page.total=parseInt(res.data.data.total);
        console.log(this.page.total)
    }).catch(err=>{
      console.log(err.response)
        this.$alert(err.response.data.msg, "请联系管理员", {
          confirmButtonText: '确定',
          callback: action => {
            
          }
        });
    }) 
  },
};
</script>
<style lang="less" >
 
.check {
  width: 1120px;
  margin:0 auto;
  height: 700px;
  overflow: hidden;
  background-color: #f4ecec;
    
    .searchArea {
      float: left;
      margin-top: 30px;

      .searchForm {
        overflow: hidden;
        margin-right: 0px;

        input {
          box-sizing: border-box;
          width: 300px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid rgb(8, 138, 8);
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #0f778a;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
   
    }
       
 }

</style>