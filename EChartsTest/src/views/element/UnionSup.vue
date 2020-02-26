<template>
  <div class="pages">
    <el-form class="info-form" ref="info-form" :model="form" label-width="100px">
      <el-form-item label="选择业态:">
        <el-select v-model="form.region" placeholder="请选择业态" @change="selectStore">
          <el-option label="综超" value="51"></el-option>
          <el-option label="高超" value="11"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item :label="storeInfo.name+':'">
        <el-checkbox-group v-model="form[storeInfo.key]" size="small">
          <el-checkbox-button v-for="(subitem,index) in storeInfo.options" :key="index" :label="subitem.value">{{subitem.label}}</el-checkbox-button>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="选择年度:">
        <el-select v-model="form.annual" placeholder="请选择年度">
          <el-option v-for="(item,index) in annualInfo" :label="item.value" :value="item.value" :key="index"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="供编号:" style="width:200px;">
        <el-tooltip effect="dark" :content="tooltips" placement="top">
          <el-badge :value="this.supplName" type='primary'>
          <el-input v-model="form.suppl" size="small" @change="searchSup"></el-input>
          </el-badge>
        </el-tooltip>
      </el-form-item>
      <el-divider></el-divider>
      <el-form-item label="考核类型:">
        <el-select v-model="form.type" placeholder="请选择" @change="selectType">
          <el-option v-for="(item,index) in types" :label="item.label" :value="item.value" :key="index"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item :label="item.label" v-for="(item,index) in typeInd" :key="index">
        <el-col :span="10">
          <el-form-item label="销售">
            <el-input v-model="form.sales[index]" placeholder="0"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="毛利">
            <el-input v-model="form.profits[index]" placeholder="0"></el-input>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-divider class="lines"></el-divider>
      <el-col align="center" class="btn">
        <el-button style="width:100px" type="primary" @click="onSubmit">立即创建</el-button>
        <el-button style="width:100px">取  消</el-button>
      </el-col>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form:{
          store: [],
          region: '',
          annual: '',
          suppl: '',
          type: '',
          sales: ['','','',''],
          profits: ['','','',''],
        },
        storeInfo: {
          name: '选择门店',
          key: 'store',
          options: []
        },
        annualInfo: [],
        typeInd: [],
        tooltips: '请输入二级供编',
        types: [
          {
            label: '季度期',
            value: 1
          },
          {
            label: '半年期',
            value: 2
          },
          {
            label: '一年期',
            value: 3
          }
        ],
        supplName: '',
      }
    },
    mounted() {
      let myDate = new Date
      let y = myDate.getFullYear()
      console.log(y)
      this.annualInfo = [{label: y, value: y},{label: y+1 ,value: y+1}]
      this.form.type = '季度期'
      this.typeInd = [{label:'一季度'},{label:'二季度'},{label:'三季度'},{label:'四季度'}]
    },
    methods: {
      selectStore() {
        console.log(this.form.region)
        if(this.form.region == '51'){
          this.storeInfo.options = [
            {label:'紫金店',	value:'10'}	,
            {label:'大厂店',	value:'16'}	,
            {label:'紫荆广场店',	value:'05'}	,
            {label:'百家湖店',	value:'68'}	,
            {label:'女人街店',	value:'84'}	,
            {label:'东方红郡',	value:'89'}	
          ]
        }
        else if(this.form.region == '11'){
          this.storeInfo.options = [
            {label:'苏州星海店',	value:'21'},
            {label:'德基店',	value:'30'},
            {label:'五彩世界店',	value:'51'},
            {label:'森林摩尔店',	value:'7'},
            {label:'水游城店',	value:'71'},
            {label:'镇江苏宁店',	value:'88'}
          ]
        }
      },
      onSubmit() {
        console.log(this.form)
      },
      selectType() {
        if(this.form.type == '1'){
          this.typeInd = [{label:'一季度'},{label:'二季度'},{label:'三季度'},{label:'四季度'}]
        }
        else if(this.form.type == '2'){
          this.typeInd = [{label:'上半年'},{label:'下半年'}]
        }
        else if(this.form.type == '3'){
          this.typeInd = [{label:'全年'}]
        }
        else{
          this.typeInd = []
        }
        this.form.sales = ['','','','']
        this.form.profits = ['','','','']
      },
      searchSup() {
        let region = this.form.region
        let suppl = this.form.suppl
        let sql = `select SECOND_SUPP_NAME name
          from erp_supplier_loc
          where location in (select new_store_no name from store_compare where status=1 and area_no=`+region+
          `) and second_supp=`+suppl
        this.$http.get('http://61.132.57.82:8888/alloy/dbsearch.jsp?sqlstr='+sql).then((response) => {
          let rows = response.data.params.data
          this.supplName = rows[0].NAME
        }).catch(function(response){
          this.supplName = '请确认供编'
        })
      }
    }
  }
</script>

<style scoped>
.pages {
  position: absolute;
  padding: 20px;
  width: 650px;
  height: 700px;
  background: #ecf0f1;
  transform: translate(-50%,-50%);
  top: 50%;
  left: 50%;
}
.lines{
  position: absolute;
  width: 650px;
  bottom: 80px;
}
.btn{
  position: absolute;
  bottom: 50px;
}
/* .info-form>>>.el-form-item label:after {
  content: " ";
  display: inline-block;
  width: 100%;
}
.info-form>>>.el-form-item__label {
  text-align: justify;
}
.info-form>>>.el-form-item.is-required .el-form-item__label::before {
  content: none !important;
} */
</style>