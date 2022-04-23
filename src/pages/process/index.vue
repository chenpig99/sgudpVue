
  <template>
  <div class="check" style="background-color: #ffffff">
    <div style="margin-top: 20px;margin-right:300px;">
    <el-button @click="toggleSelection()">取消选择</el-button>
    <el-button @click="allRemove">删除</el-button>
  </div>
    <el-table
    class="table4"
      :data="tableData"
      style="width: 100%"
      max-height="500"
    >
        <el-table-column
      type="selection"
      width="55">
      </el-table-column>
      <el-table-column fixed prop="warehouse_id" label="仓库名" width="120">
        <template slot-scope="scope">
          <div v-if="scope.row.id==inputHandle.id">
            <span v-if="modifyFlag">{{scope.row.warehouse_id}}</span>
            <el-input v-model="scope.row.warehouse_id" v-else value="number"></el-input>
          </div>
          <span v-else>{{scope.row.warehouse_id}}</span>
        </template> 
      </el-table-column>
      <el-table-column prop="warehouse_tem" label="仓库温度(℃)" width="120">
        <template slot-scope="scope">
          <div v-if="scope.row.id==inputHandle.id">
            <span v-if="modifyFlag">{{scope.row.warehouse_tem}}</span>
            <el-input v-model="scope.row.warehouse_tem" v-else value="number"></el-input>
          </div>
          <span v-else>{{scope.row.warehouse_tem}}</span>
        </template> 
      </el-table-column>
      <el-table-column prop="warehouse_all" label="总存量" width="120">
      <template slot-scope="scope">
          <div v-if="scope.row.id==inputHandle.id">
            <span v-if="modifyFlag">{{scope.row.warehouse_all}}</span>
            <el-input v-model="scope.row.warehouse_all" v-else value="number"></el-input>
          </div>
          <span v-else>{{scope.row.warehouse_all}}</span>
        </template> 
      </el-table-column>
      <el-table-column prop="warehouse_already" label="已存量" width="120">
        <template slot-scope="scope">
          <div v-if="scope.row.id==inputHandle.id">
            <span v-if="modifyFlag">{{scope.row.warehouse_already}}</span>
            <el-input v-model="scope.row.warehouse_already" v-else value="number"></el-input>
          </div>
          <span v-else>{{scope.row.warehouse_already}}</span>
        </template> 
      </el-table-column>
      <el-table-column prop="warehouse_can" label="可存量" width="120">
        <template slot-scope="scope">
          <div v-if="scope.row.id==inputHandle.id">
            <span v-if="modifyFlag">{{scope.row.warehouse_can}}</span>
            <el-input v-model="scope.row.warehouse_can" v-else value="number"></el-input>
          </div>
          <span v-else>{{scope.row.warehouse_can}}</span>
        </template> 
      </el-table-column>
      <el-table-column label="操作" width="120">
      <template slot-scope="scope">\
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
    <div class="block" >
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
import axios from '../../axios'
export default {
  
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
    name:'process',
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
    //条数选择
    allRemove(){

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
  padding-top: 50px;
  width: 1120px;
  margin: 0 auto;
  height: 700px;
  overflow: hidden;
  background-color: #f4ecec;
  .table4{
     width: 650px!important;
  }
}
</style>