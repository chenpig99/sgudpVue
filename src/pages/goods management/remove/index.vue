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
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
          >
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page=yhis.page.currentPage
        :page-sizes="[100, 200, 300, 400]"
        :page-size=this.page.pageSize
        layout="total, sizes, prev, pager, next, jumper"
        :total=this.page.total
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
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
  created() {
    axios({
      url:'/dp/goods/query',
      method:"post",
      data:JSON.stringify(this.page),
    }).then(res=>{
       this.tableData=res.data.data.records; 
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