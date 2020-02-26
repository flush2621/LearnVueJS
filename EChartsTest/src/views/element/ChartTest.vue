<template>
  <div>
    123
    <div id="Main"></div>
    <el-button size="medium" round @click="requestData">加载数据</el-button>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    mounted () {
    },
    methods: {
      requestData () {
        let myChart = echarts.init(document.getElementById('Main'))
        myChart.setOption({
          title: {
            text: '门店近7天销售'
          },
          // grid: {
          //   right: '20%'
          // },
          tooltip: {
            trigger: 'axis',
            // axisPointer: {
            //   type: 'cross'
            // }
          },
          legend: {
            data: ['金额','来客']
          },
          toolbox: {
            feature: {
              dataView: {show: true, readOnly: false},
              magicType: {show: true, type: ['line','bar']},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          xAxis: {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: []
          },
          yAxis: [
            {
              type: 'value',
              name: '金额',
              position: 'left',
            },
            {
              type: 'value',
              min: 0,
              max: 6000,
              name: '来客',
              position: 'right',
            }
          ],
          series: [
            {
              name: '金额',
              type: 'bar',
              data: []
            },
            {
              name: '来客',
              type: 'bar',
              data: []
            },
          ]
        })
        myChart.showLoading()
        let names = []
        let nums = []
        let sql = 'select to_char(tran_date,\'yyyymmdd\') trandate, location, visit_numb, vat_total_retail '+
                  'from erp_jxc_location '+
                  'where location=100103 and tran_date between sysdate-7 and sysdate '+
                  'order by 2,1'
        this.$http.get('http://61.132.57.82:8888/alloy/dbsearch.jsp?sqlstr='+sql).then((response) => {
          let rows = response.data.params.data
          let arr = new Array()
          let arrv = new Array()
          let j = 0
          for(let i in rows[0]){
            arr[j] = i
            arrv[j] = rows[0][i]
            //console.log('key is '+arr[j]+',value is '+arrv[j])
            j++
          }
          // for(let k=0; k < rows.length; k++){
          //   console.log(rows[k][arr[1]])
          // }
          let qtys = []
          for(let m=0; m < rows.length; m++){
            names.push(rows[m][arr[0]])
            nums.push(rows[m][arr[3]])
            qtys.push(rows[m][arr[2]])
          }
          myChart.hideLoading()
          myChart.setOption({
            xAxis: {
              name: '日期',
              data: names
            },
            series: [
              {
                name: '金额',
                data: nums
              },
              {
                name: '来客',
                yAxisIndex: 1,
                data: qtys,
              },
            ]
          })
        })
      }
    }
  }
</script>

<style scoped>
#Main{
  width: 600px;
  height: 400px;
  border: 1px;
}
</style>