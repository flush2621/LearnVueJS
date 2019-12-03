<template>
  <div class="q-pa-none">
    <q-table
      class="my-sticky-header-table"
      title="Treats"
      :columns="columns"
      :data="tabledata"
      row-key="name"
      separator="cell"
      loading-label="Data is loading"
      :pagination.sync="pagination"
    >
    <template v-slot:top="props">
      <div class="toolsbar">
        <q-btn flat round color="primary" icon="autorenew" @click="loadingData" />
        <q-btn flat round dense color="primary"
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen" />
      </div>
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
      pagination: { rowsPerPage: 12 },
      columns: [],
      tabledata: []
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
        var sqlstr='select area_no 区域, item 货号, exec_time 导入时间 from erp_weekend_item order by 1,2';
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
