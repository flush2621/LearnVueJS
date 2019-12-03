<template>
  <div class="q-pa-none">
    <q-table
      class="my-sticky-header-table"
      title="Treats"
      :columns="columns"
      :data="tabledata"
      :filter="filter"
      row-key="name"
      separator="cell"
      loading-label="Data is loading"
      :pagination.sync="pagination"
    >
    <template v-slot:top="props">
      <q-btn flat round color="primary" icon="autorenew" @click="loadingData" />
      <q-btn flat round dense color="primary"
        :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
        @click="props.toggleFullscreen" />
      <q-space />
      <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
      </template>
    </q-table>
  </div>
</template>

<script>
import axios from 'axios'
import { QSpinnerGears } from 'quasar'
export default {
  name: 'Report',
  data () {
    return {
      filter: '',
      pagination: { rowsPerPage: 12 },
      columns: [],
      tabledata: [],
      slogan: ''
    }
  },
  created () {
    this.loadingData()
  },
  methods: {
    loadingData () {
      /* This is for Codepen (using UMD) to work */
      const spinner = typeof QSpinnerGears !== 'undefined'
        ? QSpinnerGears
        : Quasar.components.QSpinnerGears // eslint-disable-line
      /* End of Codepen workaround */
      this.$q.loading.show({
        spinner,
        spinnerColor: 'primary',
        backgroundColor: 'gray',
        message: 'Updated dbset'
      })
      this.columns = []
      this.tabledata = []
      // hiding in 3s
      this.timer = setTimeout(() => {
        //var sqlstr = 'select store_no 门店, retail 销售, visit 来客, kd 客单, to_char(tran_date,\'HH24:MI:SS\') 时点 from erp_real_hf order by store_no'
        var sqlstr='select distinct area_no 区域, t2.group_no 采购, t1.item 货号, t2.descr 描述, exec_time 导入时间 from erp_weekend_item t1, erp_item_loc t2 where t1.item=t2.item order by 1,2';
        axios.get('http://61.132.57.82:8888/alloy/dbsearch.jsp?sqlstr='+sqlstr)
          .then(response => {
            this.columns = response.data.params.columns
            this.tabledata = response.data.params.data
          })
          .catch(error => {
            console.log('Inside error, fetching product line items failed',error)
          })
        this.$q.loading.hide()
        this.timer = void 0
      }, 1000)
      
    }
    // myFilter (rows,terms,cols,cellValue) {
    //   return rows.filter(
    //     row => cols.some(col => (cellValue(col, row)+'').indexOf(terms) !== -1)
    //   )
    // }
  }
}
</script>
<style lang="sass">
.my-sticky-header-table
  /* max height is important */
  .q-table__middle
    max-height: 100%

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th

  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th

</style>
