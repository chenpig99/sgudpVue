<template>
  <div class="check" style="background-color: #ffffff">
    <div style="margin-top: 20px;float:right;">
    <el-button @click="toggleSelection()">取消选择</el-button>
    <el-button @click="allRemove">删除</el-button>
  </div>
    <el-table
     ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    @selection-change="handleSelectionChange"
      style="width: 100%"
      max-height="500"
    >
     <el-table-column
      type="selection"
      width="35">
      </el-table-column>
      <el-table-column fixed prop="id" label="货物Id" width="100">
      </el-table-column>
      <el-table-column prop="name" label="货物名称" width="120">
      </el-table-column>
      <el-table-column prop="number" label="货物数量" width="100">
      </el-table-column>
      <el-table-column prop="locationId" label="库区" width="100">
      </el-table-column>
      <el-table-column prop="warehouseEntryTime" label="入库时间" width="120">
      </el-table-column>
      <el-table-column prop="deadlineTime" label="存放截止时间" width="160">
      </el-table-column>
      <el-table-column prop="warningTime" label="距过期时间" width="120">
      </el-table-column>
      <el-table-column prop="status" label="货物状态" width="120">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
      <template slot-scope="scope">
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
        :page-sizes="[10, 20, 30, 40]"
        :page-size="this.page.pageSize"
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
  name:'Modify',
  data() {
  
    return {
      tableData: [

      ],

      page:{
        //当前页码
          currentPage:1,
        //每页条数
          pageSize:10,
          total:'',
      },  
    }
  }, 
  methods: {
    //多选框删除
    allRemove(){

    },
    //单行删除
    RemovRow(index, rows) {
        rows.splice(index, 1);
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
    handleSizeChange(val) {
      //条数选择
      this.page.pageSize=val;
      this.page.currentPage=1;
      axios({
        url:'/dp/goods/query',
        method:"post",
        data:JSON.stringify(this.page)
      }).then(res=>{
        this.tableData=res.data.data.records;
        this.page.total=parseInt(res.data.data.total);
      }).catch(err=>{
            this.$alert(err.response.data.msg, "请联系管理员", {
              confirmButtonText: "确定",
              callback: action => {
                
              }
            });
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
  margin: 0 auto;
  height: 700px;
  overflow: hidden;
  background-color: #f4ecec;
}
</style>