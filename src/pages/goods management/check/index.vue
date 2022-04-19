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
        :current-page="currentPage1"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
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

      },
      currentPage1: 1,
      currentPage2: 2,
      currentPage3: 3,
      currentPage4: 4,
       
    }
    
    ;
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      const pagek=this.page;
      console.log(`当前页: ${val}`);
      console.log(this.currentPage5),
      axios({
         url:'/dp/goods/query',
         methos:"GET",
         //需要想办法传入page对象
         data:JSON.stringify(),
      }).then(res=>{
        this.tableData=res.data.data;
      })
    },
  },
  beforeCreate()  {
    axios({
        url:'/dp/goods/query',
        method:"GET",
            //需要想办法传入page对象
        data:1,

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