<template>
    <div class='box'>
        <el-form :model="dengmiQueryForm" ref="dengmiQueryForm" label-width="100px" class="demo-ruleForm" size="mini">
            <el-row>
                <div class="table">
               <el-col :span=15>
                    <el-form-item >
                        <span slot="label">
                            <span style="color:black; font-size:16px"><strong>客户：</strong></span>
                        </span>
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item>
                         <span slot="label">
                            <span style="color:black; font-size:16px"><strong>联系方式：</strong></span>
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
                    <el-button type="primary" size="mini" @click="back">确定</el-button>
              </div>
                    <el-button slot="reference" type="info" class="el-icon-error" style="margin-right:200px">取消</el-button>
              </el-popover>
                    <el-button type="success" @click="next" class="el-icon-success" style="margin-right:0px">下一步</el-button>
                </el-col>
                </div>
                <div class="step">
                <el-col>
                   <el-steps :active="1" align-center>
                     <el-step title="步骤 1" description="填写客户信息"></el-step>
                     <el-step title="步骤 2" description="填写货物信息"></el-step>
                   </el-steps>
                </el-col>
                </div>
            </el-row>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "firstInput",
        data() {
            return {
                dengmiQueryForm: {
                    mimian:'',
                    mimu:'',
                    visible: false,
                },
            }  
        },
          methods: {
        next(){
            this.$router.push("/nextInput");
        },  
        back(){
            this.$router.push("/home");
        }  
            },  
        };
</script>

<style scoped>
.box{
    margin: 70px 300px;
    width: 500px;
    height: 300px;
   
}
 .table{
     margin-top:80px;
    margin-left: 100px;
    height: 120px;
    width: 800px;
   
}
.btn{
    margin-left: 150px;
    height: 50px;
    width: 500px;
   
}
.step{
    margin-top: 30px;
    margin-left: 500px;
    width: 500px;
    height: 100px; 
}
.label-style{
   color: red;
    font-size: 50px;
}
</style>