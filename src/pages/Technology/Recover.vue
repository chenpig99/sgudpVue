<template>
  <div class="box">
    <h1>数据恢复</h1>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="name"
      label="恢复点名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="date"
      label="恢复点时间"
      width="180">
    </el-table-column>
    <el-table-column
      prop="type"
      label="恢复点类型">
    </el-table-column>
    <el-table-column
      prop="situation"
      label="恢复点状态">
    </el-table-column> 
    <el-table-column
      label="操作"
      width="100">
        <el-button type="text" size="small" @click="check">恢复</el-button>
    </el-table-column>
  </el-table>
  
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          name: '2016-05-02',
          date: '王小虎',
          type: '上海市普陀区金沙江路 1518 弄',
          situation:'成功'
        },{
          name: '2016-05-02',
          date: '王小虎',
          type: '上海市普陀区金沙江路 1518 弄',
          situation:'成功'
        }, 
        {
          name: '2016-05-02',
          date: '王小虎',
          type: '上海市普陀区金沙江路 1518 弄',
          situation:'成功'
        }, 
        {
          name: '2016-05-02',
          date: '王小虎',
          type: '上海市普陀区金沙江路 1518 弄',
          situation:'成功'
        }, ]
      }
    }
  }
</script>
<style scoped>
.box{
  width: 1120px;
  height: 350px;
  margin: 50px 100px ;
}
h1{
   text-align: left;
    border-bottom: 2px solid black;
}
</style>