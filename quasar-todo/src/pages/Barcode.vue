<template>
  <q-layout>
    <q-toolbar>
      <q-toolbar-title>Lector Codigo De Barra</q-toolbar-title>
    </q-toolbar>
		<div class="q-pa-md column q-gutter-sm">
    	<q-btn color="orange" outline @click="getData" class="width:100%">Escanear codigo</q-btn>
			<q-select color="teal" filled v-model="model" :options="options" label="选择门店">
        <template v-slot:prepend>
          <q-icon name="home" />
        </template>
      </q-select>
			<q-table
				grid
				title="item information"
				:columns="columns"
				:data="tabledata"
				row-key="name"
				separator="cell"
				loading-label="Data is loading"
			>
			</q-table>
		</div>
  </q-layout>
</template>
<script>
import axios from 'axios'
import { QSpinnerGears } from 'quasar'
export default {
	name: "Codigo",
	data () {
		return {
			imageSrc: '',
      columns: [],
      tabledata: [],
			model: null,
			barcodes: '112',
      options: [
        '10', '16', '84', '89'
      ]
		}
	},
  methods: {
		loadingData (bar) {
      var sqlstr = 'select descr, art_no, sell_pr, stock_on_hand from jqdy.jqdy@store'+this.model+'x t1, erp_item@store'+this.model+'x t2 where t1.art_no=t2.item and barcode ='+bar
			//console.log(sqlstr)
			axios.get('http://61.132.57.82:8888/alloy/dbsearch.jsp?sqlstr='+sqlstr)
				.then(response => {
					this.columns = response.data.params.columns
					this.tabledata = response.data.params.data
				})
				.catch(error => {
					console.log('Inside error, fetching product line items failed',error)
				})
      
		},
		scanner () {
			let that = this
			cordova.plugins.barcodeScanner.scan(function (result) {
				// window.open(result.text,'_system','location=yes')
				that.barcodes = result.text
				that.loadingData(result.text)
			}, function (error) { console.log(error) })
		},
		getData () {
			//alert('x'+this.barcodes)
			this.scanner()
			//this.loadingData('6956416206113')
		}
		// captureImage () {
		// 	navigator.camera.getPicture(
		// 		data => {
		// 			this.imageSrc = `data:image/jpeg;base64,${data}`
		// 		},
		// 		() => {
		// 			this.$q.notify('Could not access device camera.')
		// 		},
		// 		{

		// 		}
		// 	)
		// }
	}
};
</script>