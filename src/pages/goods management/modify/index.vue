<template>
  <div class="check" style="background-color: #ffffff">
    <el-table
      :data="tableData"
      style="width: 100%"
      max-height="500"
    >
      <el-table-column fixed prop="id" label="货物Id" width="120">
      </el-table-column>

      <el-table-column prop="name" label="货物名称" width="120">
        <template slot-scope="scope">
          <div v-if="scope.row.id==inputHandle.id">
            <span v-if="modifyFlag">{{scope.row.name}}</span>
            <el-input v-model="scope.row.name" v-else value="text"></el-input>
          </div>
          <span v-else>{{scope.row.name}}</span>
        </template> 
      </el-table-column>
      <el-table-column prop="number" label="货物数量" width="120">
        <template slot-scope="scope">
          <div v-if="scope.row.id==inputHandle.id">
            <span v-if="modifyFlag">{{scope.row.number}}</span>
            <el-input v-model="scope.row.number" v-else value="number"></el-input>
          </div>
          <span v-else>{{scope.row.number}}</span>
        </template> 
      </el-table-column>
      <el-table-column prop="locationId" label="库区" width="120">
      </el-table-column>
      <el-table-column prop="warehouseEntryTime" label="入库时间" width="120">
      </el-table-column>
      <el-table-column prop="deadlineTime" label="存放截止时间" width="160">
        <!-- 当选择的id和表格的当前行的id匹配则显示input -->
        <template slot-scope="scope">
          <div v-if="scope.row.deadlineTime==inputHandle.deadlineTime&&scope.row.id==inputHandle.id">
            <span  v-if="modifyFlag">{{scope.row.deadlineTime}}</span>
               <el-date-picker
                 v-model="scope.row.deadlineTime"
                  type="datetime"
                  value-format="yyyy-MM-dd hh:mm:ss" 
                  placeholder="scope.row.deadlineTime"  v-else>
    </el-date-picker>
         
          </div>
          <span v-else>{{scope.row.deadlineTime}}</span>
        </template> 
      </el-table-column>
      <el-table-column prop="warningTime" label="距过期时间" width="120">
      </el-table-column>
      <el-table-column prop="status" label="货物状态" width="120">
        <template slot-scope="scope">
          <div v-if="scope.row.id==inputHandle.id">
            <span v-if="modifyFlag">{{scope.row.status}}</span>
            <el-input v-model="scope.row.status" v-else></el-input>
          </div>
          <span v-else>{{scope.row.status}}</span>
        </template> 
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="80">
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
      modifyFlag:true,
      inputHandle:{ },

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
  padding-top: 50px;
  width: 1120px;
  margin: 0 auto;
  height: 700px;
  overflow: hidden;
  background-color: #f4ecec;
}
</style>