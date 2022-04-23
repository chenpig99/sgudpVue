<template>
<div class="check" style="background-color: #ffffff"> 
    <el-table
      class="table3"
      :data="tableData"
      style="width: 100%"
      max-height="500"
    >
      <el-table-column fixed prop="warehouse_id" label="仓库名" width="120">
        <template slot-scope="scope">
          <div v-if="scope.row.id==inputHandle.id">
            <span v-if="modifyFlag">{{scope.row.warehouse_id}}</span>
            <el-input v-model="scope.warehouse_id" v-else value="number"></el-input>
          </div>
          <span v-else>{{scope.row.warehouse_id}}</span>
        </template> 
      </el-table-column>
      <el-table-column prop="warehouse_tem" label="温度(℃)" width="120">
        <template slot-scope="scope">
          <div v-if="scope.row.id==inputHandle.id">
            <span v-if="modifyFlag">{{scope.row.warehouse_tem}}</span>
            <el-input v-model="scope.row.warehouse_tem" v-else value="number"></el-input>
          </div>
          <span v-else>{{scope.row.warehouse_tem}}</span>
        </template> 
      </el-table-column>
      <el-table-column prop="warehouse_gas" label="二氧化碳浓度(%)" width="120">
      <template slot-scope="scope">
          <div v-if="scope.row.id==inputHandle.id">
            <span v-if="modifyFlag">{{scope.row.warehouse_gas}}</span>
            <el-input v-model="scope.row.warehouse_gas" v-else value="number"></el-input>
          </div>
          <span v-else>{{scope.row.warehouse_gas}}</span>
        </template> 
      </el-table-column>
      <el-table-column prop="warehouse_sanitation" label="卫生情况" width="120">
        <template slot-scope="scope">
          <div v-if="scope.row.id==inputHandle.id">
            <span v-if="modifyFlag">{{scope.row.warehouse_sanitation}}</span>
            <el-input v-model="scope.row.warehouse_sanitation" v-else value="text"></el-input>
          </div>
          <span v-else>{{scope.row.warehouse_sanitation}}</span>
        </template> 
      </el-table-column>
      <el-table-column prop="warehouse_devicde" label="设备情况" width="120">
        <template slot-scope="scope">
          <div v-if="scope.row.id==inputHandle.id">
            <span v-if="modifyFlag">{{scope.row.warehouse_devicde}}</span>
            <el-input v-model="scope.row.warehouse_devicde" v-else value="text"></el-input>
          </div>
          <span v-else>{{scope.row.warehouse_devicde}}</span>
        </template> 
      </el-table-column>
      <el-table-column label="操作" width="120">
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
    <div class="block" >
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
import axios from '../../axios'
export default {
  data() {
  
    return {
      tableData:[
      ],
      modifyFlag:true,
      inputHandle:{ },
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
    name:'vegetable',
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
  padding-top: 100px;
  width: 1120px;
  margin: 100px auto;
  height: 700px;
  overflow: hidden;
  background-color: #f4ecec;
    
    .searchArea {
      float: left;
      margin-top: 30px;

      .searchForm {
        overflow: hidden;
        margin-right: 0px;

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
   .table3{
     width: 650px!important;
  }
    
       
 }

</style>