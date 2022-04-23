<template>
    <div class='box'>
         <h1>备份数据参数设置</h1>
        <el-form :model="dengmiQueryForm" ref="dengmiQueryForm" label-width="100px" class="demo-ruleForm" size="mini">
            <el-row>
                <div class="table">
               <el-col :span=20>
                    <el-form-item >
                        <span slot="label">
                            <span style="color:black; font-size:14px"><strong>导出数据名：</strong></span>
                        </span>
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item>
                         <span slot="label">
                            <span style="color:black; font-size:14px"><strong>导出位置：</strong></span>
                        </span>
                        <el-upload
                          class="upload-demo"
                          ref="upload"
                          action="https://jsonplaceholder.typicode.com/posts/"
                          :on-preview="handlePreview"
                          :on-remove="handleRemove"
                          :file-list="fileList"
                          :auto-upload="false">
                    <el-input slot="trigger" size="small" type="primary" value="选取文件"></el-input>
                    </el-upload>
                    </el-form-item>
                    <el-form-item >
                        <span slot="label">
                            <span style="color:black; font-size:14px"><strong>导出格式：</strong></span>
                        </span>
                        <el-input></el-input>
                    </el-form-item>
                      <el-form-item >
                        <span slot="label">
                            <span style="color:black; font-size:14px"><strong>导出文件名：</strong></span>
                        </span>
                        <el-input></el-input>
                    </el-form-item>
                </el-col>
                </div>    
                <div class="btn">
                <el-col>
                <el-popover
                    placement="top"
                    width="200"
                    height="100"
                    v-model="visible">
                    <p>你确定要取消吗？取消后不会保存</p>
                <div style="text-align: right; margin: 0">
                    <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                    <el-button type="primary" size="mini">确定</el-button>
              </div>
                    <el-button slot="reference" type="danger" class="el-icon-error" style="margin-right:200px">取消</el-button>
              </el-popover>
                    <el-button type="success"  class="el-icon-success" style="margin-right:0px">导出</el-button>
                </el-col>
                </div>
            </el-row>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "backup",
        data() {
            return {
                dengmiQueryForm: {
                    mimian:'',
                    mimu:'',
                    visible: false,
                },
            }  
        },
        };
</script>

<style scoped>
.box{
    margin: 10px 400px;
    width: 500px;
    height: 380px;
   
}
h1{
     text-align: left;
    border-bottom: 2px solid black;
}
.btn{
    margin-top: 20px ;
    height: 50px;
    width: 500px;
}
</style>