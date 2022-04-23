<template>
<div class="check" style="background-color: #ffffff"> 
    <div class="search1">
        <div class="find">
            <form action="###" class="searchForm">
          <input
            type="text"
            placeholder="输入关键词"
            v-model="keywords"
          >
          <button
            class="btn"
            type="button"
            @click="goSearch"
          >
            搜索
          </button>
          <el-button @click="toggleSelection()" style="margin-left:10px">取消选择</el-button>
            <el-button @click="allRemove">删除</el-button>
            <el-button  type="info" style="float:right;margin-right:100px" @click="dialogFormVisible = true">新增员工</el-button>
          </form>
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
               <el-button type="primary" @click="addUser(form)">确 定</el-button>
           </div>
           </el-dialog>
        </div>
  <el-table
   ref="multipleTable"
    tooltip-effect="dark"
     @selection-change="handleSelectionChange"
      class="table2"
      :data="tableData"
      style="width: 100%"
      max-height="500"
    >
    <el-table-column
      type="selection"
      width="55">
      </el-table-column>
     <el-table-column fixed prop="id" label="员工Id" width="120">
        <template slot-scope="scope">
          <div v-if="scope.row.id==inputHandle.id">
            <span v-if="modifyFlag">{{scope.row.id}}</span>
            <el-input v-model="scope.row.id" v-else value="number"></el-input>
          </div>
          <span v-else>{{scope.row.id}}</span>
        </template> 
      </el-table-column>
      <el-table-column prop="user_name" label="员工姓名" width="120">
        <template slot-scope="scope">
          <div v-if="scope.row.id==inputHandle.id">
            <span v-if="modifyFlag">{{scope.row.user_name}}</span>
            <el-input v-model="scope.row.user_name" v-else value="text"></el-input>
          </div>
          <span v-else>{{scope.row.user_name}}</span>
        </template> 
      </el-table-column>
      <el-table-column prop="employee_position" label="员工职位/权限" width="120">
      <template slot-scope="scope">
          <div v-if="scope.row.id==inputHandle.id">
            <span v-if="modifyFlag">{{scope.row.employee_position}}</span>
            <el-input v-model="scope.row.employee_position" v-else value="text"></el-input>
          </div>
          <span v-else>{{scope.row.employee_position}}</span>
        </template> 
      </el-table-column>
      <el-table-column prop="employee_contact" label="联系方式" width="120">
        <template slot-scope="scope">
          <div v-if="scope.row.id==inputHandle.id">
            <span v-if="modifyFlag">{{scope.row.employee_contact}}</span>
            <el-input v-model="scope.row.employee_contact" v-else value="text"></el-input>
          </div>
          <span v-else>{{scope.row.employee_contact}}</span>
        </template> 
      </el-table-column>
       <el-table-column label="操作" width="120">
          <template slot-scope="scope">
            <template v-if="scope.row.id==inputHandle.id">
              <el-button
             @click="ModifyRow(scope.row)"
              v-if="modifyFlag"
              type="text"
              size="small"
        >
          修改
      </el-button> 
      <el-button
          @click="save(scope.row)"
          v-else
          type="text"
          size="small"
      >
          保存
      </el-button> 
        </template>
        
        <template v-else>
           <el-button
             @click="ModifyRow(scope.row)"
              type="text"
              size="small">
             修改
          </el-button> 
        </template>
        <el-button
          @click="RemoveRow(scope.row)"
          type="text"
          size="small"
      >
         删除
      </el-button>
      </template>
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
</div>
</template>

<script>
import axios from '../../../axios'
export default {
  data() {
  
    return {
        tableData:[{}],
        keywords:'',
        modifyFlag:true,
      inputHandle:{ },
      dialogFormVisible: false,
        form: {
         id:'',
         user_name: '',
          employee_position:'',
         eemployee_contact:'',
          delivery: false,
          type: [],
        },
        formLabelWidth: '120px',
        multipleSelection: [],
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
      //新增功能
        addUser(form){
            console.log(form);
         this.dialogFormVisible = false

    },
    //搜索
    goSearch(){

    },
    // 修改和保存
     save(row){
      //保存的修改
      console.log(row);
      this.$message.success('保存成功'),
       this.modifyFlag=!this.modifyFlag
    },
    ModifyRow(row) {
      this.modifyFlag=!this.modifyFlag,
      this.inputHandle = row
    },
//删除功能 单行删除
    RemovRow(rows) {
        rows.splice(index, 1);
      },
    //   多行删除
    allRemove(){

    },
    toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
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
  margin: 0px auto;
  height: 700px;
  overflow: hidden;
  background-color: #f4ecec;
   .search1 {
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

        .btn {
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
        }}}
      
  
 
   

    /* .searchArea{
        
        display: flex;
        justify-content: center;
        align-items: center;

        width: 1120px;
        height: 100px;
        background-color: pink;
        .search{
           
        left: 0;
            width: 699px;
            height: 50px;
            background-color: blue;
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
        .selection{
           flex: 1;
            width: 300px;
            height: 50px;
            background-color: skyblue;
        } 
        
        .add {
              
      width: 300px;
            background-color: purple;
        }
    } */
    .table2{
           width: 700px!important;
       }
       
     
       
 
 }

</style>