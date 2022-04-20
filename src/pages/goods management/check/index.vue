<template>
  <div class="check" style="background-color: #ffffff">
    <el-table
      class="table"
      :data="tableData"
      style="width: 100%"
      max-height="500"
    >
      <el-table-column fixed prop="id" label="货物Id" width="120">
      </el-table-column>
      <el-table-column prop="name" label="货物名称" width="120">
      </el-table-column>
      <el-table-column prop="number" label="货物数量" width="120">
      </el-table-column>
      <el-table-column prop="locationId" label="库区" width="120">
      </el-table-column>
      <el-table-column prop="warehouseEntryTime" label="入库时间" width="120">
      </el-table-column>
      <el-table-column prop="deadlineTime" label="存放截止时间" width="120">
      </el-table-column>
      <el-table-column prop="warningTime" label="距过期时间" width="120">
      </el-table-column>
      <el-table-column prop="status" label="货物状态" width="120">
      </el-table-column>
      <el-table-column
      align="right" style="margin-left:0px;">
      <template slot="header" >
        <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="keyword"
          />
          <button
            class="sui-btn btn-xlarge btn-danger"
            type="button"
            @click="goSearch"
          >
            <i class="el-icon-search"></i>
          </button>
        </form>
      </div>
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
</template>

<script>
import axios from '../../../axios'
export default {
/*   methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
  }, */
  data() {
  
    return {
      tableData: [
        {
          //导入数据
        },
      ],
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
    goSearch(){

    },
    //条数选择
    handleSizeChange(val) {
      //设置每页条数
      this.page.pageSize=val;
      //选中后,默认显示第一页
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
         //后端需要post方式请求
         method:"post",
         //上传page参数,让后端进行分页,将对象转为json格式
         data:JSON.stringify(this.page),
      }).then(res=>{
        this.tableData=res.data.data.records; 
      }).catch(err=>{
        this.$alert(err.response.data.msg, '请联系管理员!', {
          confirmButtonText: '确定',
          callback: action => {   
          }
        });
      })
     },
  
  //创建之前,钩子函数,此时data已初始化,可以使用数据模型page
     created()  {
    console.log(this.page)
    axios({
        url:'/dp/goods/query',
        //后端需要post方式请求
        method:"post",
           //上传page参数,让后端进行分页,将对象转为json格式
         data:JSON.stringify(this.page),
    }).then(res=>{
        this.tableData=res.data.data.records;
        this.page.total=parseInt(res.data.data.total);
        console.log(this.page.total)
    })
     }
  }
}
</script>
<style lang="less" >
.check {
  padding-top: 50px;
  width: 1120px;
  margin: 0 auto;
  height: 700px;
  overflow: hidden;
  background-color: #f4ecec;
    .search {
      float:left;

      input{
        float:left;
      }
      .btn{
        float: right;
      }
    }
    .searchArea {
      float: right;
      margin-top: 0px;

      .searchForm {
        overflow: hidden;
        margin-right: 0px;

        input {
          box-sizing: border-box;
          width: 100px;
          height: 32px;
          
          border: 1px solid rgb(8, 138, 8);
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 32px;
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