<template>
  <div>
    <!-- <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio-group v-model="form.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form> -->
    <el-form class="form" ref="form" :model="form" label-width="80px">
      <el-form-item :label="item.label" v-for="(item,index) in formLabel" :key="index">
        <el-input v-model="form[item.key]" v-if="item.type === 'input'"></el-input>
        <el-select v-model="form[item.key]" placeholder="选择活动区域" v-if="item.type === 'select'">
          <el-option v-for="(subitem,index) in item.options" :key="index" :label="subitem.label" :value="subitem.value"></el-option>
        </el-select>
        <el-checkbox-group v-model="form[item.key]" v-if="item.type === 'multi'">
          <el-checkbox-button v-for="(subitem,index) in item.options" :key="index" :label="subitem.label" :value="subitem.value"></el-checkbox-button>
        </el-checkbox-group>
        <el-date-picker v-if="item.type === 'date-picker'" type="date" placeholder="选择日期" v-model="form[item.key]" style="width:100%"></el-date-picker>
      </el-form-item>
      <el-divider></el-divider>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          store: [],
          resource: '',
          desc: ''
        },
        formLabel: [
          // {
          //   label: '活动名称',
          //   key: 'name',
          //   type: 'input'
          // },
          {
            label: '选择业态',
            key: 'region',
            type: 'select',
            options: [
              {
                label: '综超',
                value: '51'
              },
              {
                label: '高超',
                value: '11'
              },
              {
                label: '合肥',
                value: '52'
              }
            ]
          },
          {
            label: '选择门店',
            key: 'store',
            type: 'multi',
            options: [
              {
                label: '紫金',
                value: '10'
              },
              {
                label: '大厂',
                value: '16'
              },{
                label: '东方红郡',
                value: '89'
              }
            ]
          },
          {
            label: '活动时间',
            key: 'date1',
            type: 'date-picker'
          }
        ]
      }
    },
    methods: {
      onSubmit() {
        console.log('Submit!');
      }
    }
  }
</script>

<style scoped>
  .form{
    width: 800px;
    background: #ecf0f1;
    padding: 20px;
  }
</style>