<template>
<div class="check" style="background-color: #ffffff"> 
    <div class="searchArea">
        <form action="###" class="searchForm" >
          <input
            type="text"
            placeholder="输入关键词"
            v-model="keywords"
          />
          <button
            class="sui-btn btn-xlarge btn-danger"
            type="button"
            @click="goSearch"
          >
            搜索
          </button>
        </form>
    </div>
    <el-table
      class="table1"
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
        {
          //导入数据
        },
      ],
      keywords:'',
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
     if(this.keywords.trim()=='') return;
     console.log(this.keywords);
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
  margin: 100px auto;
  height: 700px;
  overflow: hidden;
  background-color: #f4ecec;
    
    .searchArea {
      float:left;
      margin-top: 30px;
      margin-right: 700px;

      .searchForm {
        overflow: hidden;
        

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
    .table1{
     width: 1000px!important;
   }
       
}

</style>