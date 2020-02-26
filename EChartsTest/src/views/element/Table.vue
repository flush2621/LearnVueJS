<template>
<div>
    <el-table id="tab" v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading"
     element-loading-background="rgba(0,0,0,0.5)" :data="tableData" border height="600px" style="width: 100%">
    <el-table-column v-for="(item,key) in cols" :key="key" :prop="item.name" :label="item.name" width="180"></el-table-column>
    <!-- <el-table-column>
    <template slot-scope="scope">
      <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
      <el-button type="text" size="small">编辑</el-button>
    </template>
    </el-table-column> -->
  </el-table>
  <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入sql语句" v-model="textarea1"></el-input>
  <button @click="requestData">click me</button>
  <!-- <img src="../../assets/excel.png" width="40" height="50" alt=""> -->
  <el-button size="small" type="primary" icon="el-icon-download" circle @click="exportData" ></el-button>
</div>
</template>

<script>
export default {
  data() {
    return {
      cols: [],
      rows: [],
      tableData: [],
      loading: false,
      textarea1: '',
      sql: '',
    }
  },
  mounted () {
    
  },
  methods: {
    browseFolder() {
      // let path = windo
    },
    exportData(evt) {      
      let wb = XLSX.utils.table_to_book(document.getElementById('tab'))
      let wbout = XLSX.write(wb,{ bookType:'xlsx', type:'binary' })
      saveAs(new Blob([this.s2ab(wbout)],{ type: 'application/octet-stream' }),"sheetjs.xlsx")
    },
    s2ab(s){
      if(typeof ArrayBuffer !== 'undefined'){
        let buf = new ArrayBuffer(s.length)
        let view = new Uint8Array(buf)
        for(let i=0; i != s.length; ++i){
          view[i] = s.charCodeAt(i) & 0xFF
        }
        return buf
      }else{
        let buf = new Array(s.length)
        for(let i=0; i != s.length; ++i){
          view[i] = s.charCodeAt(i) & 0xFF
        }
        return buf
      }
    },
    requestData() {
      this.loading = true
      this.sql = this.textarea1==''?'select new_store_no "新店号", old_store_no "老店号", name "店名", '+
                'area_no "地区", ebs_store_no "财务编号", status "状态" from store_compare order by 3,1' : this.textarea1
      // console.log(sql)
      this.$http.get('http://61.132.57.82:8888/alloy/dbsearch.jsp?sqlstr='+this.sql).then((response) => {
        // console.log(response.data)
        this.cols = response.data.params.columns
        this.rows = response.data.params.data
        this.tableData = this.rows
        this.loading = false
      },(response) => {
        console.log('error')
      })
    },
    handleClick(row) {
      console.log(row);
    }
  }
}
</script>

<style scoped>

</style>