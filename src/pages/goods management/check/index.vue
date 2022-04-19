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
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page.currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="page.total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import axios from '../../../axios'
export default {
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
  },
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
          total:'',

      },

      currentPage2: 2,
      currentPage3: 3,
      currentPage4: 4,
       
    }
    
    ;
  },
  methods: {
    //条数选择
    handleSizeChange(val) {
      this.page.pageSize=val;
      this.page.currentPage=1;
      axios({
        url:'/dp/goods/query',
        method:"post",
        data:JSON.stringify(this.page)
      }).then(res=>{
        this.tableData=res.data.data;
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
         headers: {
          "Content-Type": "application/JSON",
        },
      }).then(res=>{
        this.tableData=res.data.data;
      }).catch(err=>{
         console.log(JSON.stringify(this.page));
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
        headers: {
          "Content-Type": "application/JSON",
        },

    }).then(res=>{
        
        this.tableData=res.data.data;
        console.log(this.tableData)
    }).catch(err=>{

    })
  },
};
</script>
<style lang="less" >
.check {
  padding-top: 50px;
  width: 1120px;
  margin: 0 auto;
  height: 700px;
  overflow: hidden;
  background-color: #f4ecec;
}
</style>