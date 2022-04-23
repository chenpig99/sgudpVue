<template>
    <div class='box'>
        <el-form :model="dengmiQueryForm" ref="dengmiQueryForm" label-width="100px" class="demo-ruleForm" size="mini">
            <div class="info">
            <el-row>
                <el-col :span=8>
                    <el-form-item label="货物名称：">
                        <el-input v-model="dengmiQueryForm.mimian"></el-input> 
                    </el-form-item>
                </el-col>
                <el-col :span=8>
                     <el-form-item label="货物种类：">
                      <el-select v-model="value" placeholder="请选择">
                       <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                       </el-option>
                    </el-select>
                    </el-form-item>
                </el-col>
               <el-col :span=8>
                    <el-form-item label="货物数量：">
                        <el-input v-model="dengmiQueryForm.mige"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span=8>
                    <el-form-item label="客户：">
                        <el-input v-model="dengmiQueryForm.midi"></el-input>
                    </el-form-item>
                </el-col>
               <el-col :span=8>
                    <el-form-item label="联系方式：">
                        <el-input v-model="dengmiQueryForm.zuozhe"></el-input>
                    </el-form-item>
                </el-col>
               <el-col :span=8>
                    <el-form-item label="库区：">
                        <el-input v-model="dengmiQueryForm.midiLength"></el-input>
                    </el-form-item>
                </el-col>
               <el-col :span=8>
                    <el-form-item label="出库时间：">
                          <div class="block">
                        <el-date-picker
                          v-model="value3"
                          type="datetime"
                          placeholder="选择日期时间">
                        </el-date-picker>
                        </div>
                    </el-form-item>
                </el-col>
              
                <el-col :span=8>
                       <el-form-item label="截至时间：">
                         <div class="block">
                             <el-date-picker
                                v-model="value2"
                                 type="date"
                                  placeholder="选择日期">
                             </el-date-picker>
                        </div>
                    </el-form-item>
                </el-col>
                 <el-col :span=8>
                    <el-form-item >
                        <span slot="label">
                            <span style="color:black; font-size:16px"><strong>出库员：</strong></span>
                        </span>
                        <el-input></el-input>
                    </el-form-item>
                </el-col>
                <div class="checker">
               <el-col :span="25">
                    <el-form-item>
                         <span slot="label" >
                            <span style="color:blue; font-size:14px"><strong>出库核验员：</strong></span>
                        </span>
                        <el-input></el-input>
                    </el-form-item>
              </el-col>
              </div>
            </el-row>
            </div>
               <div class="btn">
                <el-col>
                <el-popover
                    placement="top"
                    width="200"
                    height="100"
                    v-model="visible">
                    <p>你确定要驳回吗？驳回即删除数据。</p>
                <div style="text-align: right; margin: 0">
                    <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                    <el-button type="primary" size="mini" @click="back">确定</el-button>
              </div>
                    <el-button slot="reference" type="info" class="el-icon-error" style="margin-right:200px">驳回</el-button>
              </el-popover>
                    <el-button type="success"  @click="dialogVisible = true" class="el-icon-success" style="margin-right:0px">通过</el-button>
                      <el-dialog
                            title="提示"
                            :visible.sync="dialogVisible"
                            width="30%"
                            :before-close="handleClose">
                            <span>货物已成功出库！</span>
                            <span slot="footer" class="dialog-footer">
                       <el-button type="primary" @click="dialogVisible = false">OK</el-button>
                      </span>
                      </el-dialog>
                </el-col>
                </div>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "checkOutput",
        data() {
            return {
               dengmiQueryForm: {

                },
            options: [{
          value: '选项1',
          label: '肉类'
        }, {
          value: '选项2',
          label: '蔬菜类'
        }, ],
           value: '',
           visible: true,
           dialogVisible: false,
           value1: '',
         value2: '',
         value3:'',
            }; 
        },
            methods:{
                 back(){
            this.$router.push("/outputCheck");
        },
     }
};
</script>

<style scoped>
div .box{
    margin: 0px 20px;
    height: 300px;
     
}
.info{
    margin: 80px 50px;
    width: 1100px;
    height: 100px;
   
}
.checker{
    margin-left: 400px;
}
.btn{
    margin-top: 120px;
    margin-left: 400px;
    height: 50px;
    width: 500px;
   
}
</style>