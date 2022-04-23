<template>
<div class="box">
  <el-table
    :data="tableData"
    height="350"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="序号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="customer"
      label="客户"
      width="180">
    </el-table-column>
    <el-table-column
      prop="contact"
      label="联系方式">
      </el-table-column>
       <el-table-column
      prop="date"
      label="入库日期">
      </el-table-column>
       <el-table-column
      prop="inputer"
      label="入库员">
      </el-table-column>
      <el-table-column
      label="操作"
      width="100">
        <el-button type="text" size="small" @click="check">查看</el-button>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
  export default {
    name:'totalCheck',
     methods: {
          check(){
            this.$router.push("/inputCheck");
          }
    },
    data() {
      return {
        tableData: [{
         id:'1',
         customer:'李',
         contact:'19999990000',
         date:'2022-4-22',
         inputer:'黄',
        }, {
          id:'2',
         customer:'李',
         contact:'19999990000',
         date:'2022-4-22',
         inputer:'黄',
        },{
          id:'3',
         customer:'李',
         contact:'19999990000',
         date:'2022-4-22',
         inputer:'黄',
        }, {
           id:'4',
         customer:'李',
         contact:'19999990000',
         date:'2022-4-22',
         inputer:'黄',
        },
         {
           id:'4',
         customer:'李',
         contact:'19999990000',
         date:'2022-4-22',
         inputer:'黄',
        },
         {
           id:'4',
         customer:'李',
         contact:'19999990000',
         date:'2022-4-22',
         inputer:'黄',
        },
         {
           id:'4',
         customer:'李',
         contact:'19999990000',
         date:'2022-4-22',
         inputer:'黄',
        }, ],
        } 
      },
  }
</script>
<style scoped>
.box{
  width: 1120px;
  height: 350px;
  margin: 100px 100px ;
}
</style>