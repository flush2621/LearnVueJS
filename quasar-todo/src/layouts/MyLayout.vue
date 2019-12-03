<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />
      </q-toolbar>
      <div class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h3">Todo</div>
        <div class="text-subtitle1">{{ todaysDate }}</div>
        <q-img src="statics/mountains.jpg" class="header-image absolute-top"></q-img>
      </div>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="200"
      :breakpoint="400"
    >
      <q-scroll-area style="height: calc(100% - 192px); margin-top: 192px; border-right: 1px solid #ddd">
        <q-list padding>
          <q-item to="/todo" clickable v-ripple exact>
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>

            <q-item-section>
              Todo
            </q-item-section>
          </q-item>
          <q-item to="/report" clickable v-ripple exact>
            <q-item-section avatar>
              <q-icon name="grid_on" />
            </q-item-section>

            <q-item-section>
              Report
            </q-item-section>
          </q-item>
          <q-item to="/barcode" clickable v-ripple exact>
            <q-item-section avatar>
              <q-icon name="filter_center_focus" />
            </q-item-section>

            <q-item-section>
              Codigo
            </q-item-section>
          </q-item>
          <q-item to="/upload" clickable v-ripple exact>
            <q-item-section avatar>
              <q-icon name="cloud_upload" />
            </q-item-section>

            <q-item-section>
              Upload
            </q-item-section>
          </q-item>
          <q-item to="/help" clickable v-ripple exact>
            <q-item-section avatar>
              <q-icon name="help" />
            </q-item-section>

            <q-item-section>
              Help
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img class="absolute-top" src="statics/mountains.jpg" style="height: 192px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="60px" class="q-mb-sm">
            <img src="statics/gd.jpg">
          </q-avatar>
          <div class="text-weight-bold">Chris</div>
          <div>魑魅魍魉</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
      <!-- <keep-alive> 
        <router-view />
      </keep-alive> -->
    </q-page-container>
  </q-layout>
</template>

<script>
import { date } from 'quasar'

export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  },
  computed: {
    todaysDate() {
      let timeStamp = Date.now()
      return date.formatDate(timeStamp, 'dddd D MMMM')
    }
  }
}
</script>

<style lang="scss">
.header-image{
  height: 100%;
  z-index: -1;
  opacity: .2;
  filter: grayscale(100%);
}
</style>
