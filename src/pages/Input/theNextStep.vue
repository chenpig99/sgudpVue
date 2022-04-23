<template>
    <div class='box'>
        <el-form :model="dengmiQueryForm" ref="dengmiQueryForm" label-width="100px" class="demo-ruleForm" size="mini">
            <div class="info">
            <el-row>
                <el-col :span=8>
                    <el-form-item label="货物名称:">
                        <el-input v-model="dengmiQueryForm.mimian"></el-input> 
                    </el-form-item>
                </el-col>
                <el-col :span=8>
                     <el-form-item label="货物种类:">
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
               <el-col :span=5>
                    <el-form-item label="货物数量:">
                        <el-input v-model="dengmiQueryForm.mige"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span=8>
                    <el-form-item label="入库时间:">
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
                    <el-form-item label="租借天数:">
                        <el-input v-model="dengmiQueryForm.zuozhe"></el-input>
                    </el-form-item>
                </el-col>
               <el-col :span=5>
                    <el-form-item label="入库温度:">
                        <el-input v-model="dengmiQueryForm.midiLength"></el-input>
                    </el-form-item>
                </el-col>
              
               <el-col :span=8>
                    <el-form-item label="生产日期:">
                        <div class="block">
                             <el-date-picker
                                v-model="value1"
                                 type="date"
                                  placeholder="选择日期:">
                             </el-date-picker>
                        </div>
                    </el-form-item>
                </el-col>
                <el-col :span=8>
                    <el-form-item label="截至日期:">
                        <div class="block">
                             <el-date-picker
                                v-model="value2"
                                 type="date"
                                  placeholder="选择日期:">
                             </el-date-picker>
                        </div>
                    </el-form-item>
                </el-col>
                <div class='warehouse'> 
                <el-col :span=5 style="float:left;">
                    <el-form-item label="库区:" style="float:left;">
                        <div style="width:300px;heigth:50;">
                        <el-input v-model="dengmiQueryForm.midiLength" style="float:left;margin-left:0px; width:150px;"></el-input>
                         <el-button type="primary" round style="float:right; width:100px;">自动生成</el-button>
                        </div>
                    </el-form-item>
                </el-col>
                </div>
               
            </el-row>
             <div class="checker">
               <el-col :span="25">
                    <el-form-item>
                         <span slot="label" >
                            <span style="color:black; font-size:16px"><strong> 入库员：</strong></span>
                        </span>
                        <el-input></el-input>
                    </el-form-item>
              </el-col>
              </div>
            </div>
            <div class="btn">
            <el-row :gutter="20">
                <el-col>
                    <el-popover
                      placement="top"
                      width="200"
                      v-model="visible" >
                      <p>确认取消吗？取消后不会保存</p>
                      <div class="cancel">
                         <el-button size="mini" type="text"  @click="visible = false">取消</el-button>
                         <el-button size="mini" type="text" @click="back">确认</el-button>     
                    </div>
                    <el-button slot="reference" class='el-icon-error' style="margin-right:100px;" type="info">上一步</el-button>
                 </el-popover> 
                   <el-button type="success" @click="dialogVisible = true" class="el-icon-success">下一步</el-button>
                         <el-dialog
                            title="提示"
                            :visible.sync="dialogVisible"
                            width="30%"
                            :before-close="handleClose">
                            <span>您已成功提交入库核验员核验！</span>
                            <span slot="footer" class="dialog-footer">
                       <el-button type="primary" @click="dialogVisible = false">OK</el-button>
                      </span>
                      </el-dialog>
                </el-col>
            </el-row>  
            </div>
        </el-form>
       <div class="step">
            <el-col>
                <el-steps :active="2" align-center>
                <el-step title="步骤 1" description="填写客户信息"></el-step>
                <el-step title="步骤 2" description="填写货物信息"></el-step>
                </el-steps>
            </el-col>
        </div>
    </div> 
</template>

<script>
    export default {
        name: "nextInput",
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
        visible: false,
        dialogVisible: false,
         value1: '',
         value2: '',
         value3:'',
            }; 
            },
    methods: {
        back(){
            this.$router.push("/firstInput");
        }              
  },
};
</script>

<style scoped>
div .box{
    margin: 0px 20px;  
}
.info{
    margin: 80px 50px;
    width: 1100px;
    height: 150px;
   
}
.btn{
    margin: 20px 500px;
    width: 500px;
}
.step{
    margin-left: 700px;
    width: 500px;
    height: 100px; 
}
.checker{
    margin-left: 400px;
}
.atu{
    height: 50px;
    margin-left:150px ;
}

</style>