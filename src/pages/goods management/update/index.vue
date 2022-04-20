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
      <el-table-column prop="location_id" label="库区" width="120">
      </el-table-column>
      <el-table-column prop="warehouse entry time" label="入库时间" width="120">
      </el-table-column>
      <el-table-column prop="deadline_time" label="存放截止时间" width="120">
      </el-table-column>
      <el-table-column prop="warning_time" label="距过期时间" width="120">
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
            修改
          </el-button>
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
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
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

      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
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