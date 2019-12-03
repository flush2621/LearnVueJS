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
        <q-space />
        <a href="#" @click="signout">Sign Out</a>
      </q-toolbar>
      <div id="headiv" class="q-px-lg q-pt-sm q-mb-sm">
        <div class="text-h3">Todo</div>
        <div class="text-subtitle1">{{ todaysDate }}</div>
        <q-img id="headimg" src="statics/mountains.jpg" class="header-image absolute-top"></q-img>
      </div>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="200"
      :breakpoint="400"
    >
      <q-scroll-area style="height: calc(100% - 144px); margin-top: 144px; border-right: 1px solid #ddd">
        <q-list padding>

          <q-item to="/current" clickable v-ripple exact>
            <q-item-section avatar>
              <q-icon name="border_all" />
            </q-item-section>
            <q-item-section>
              CurrentData
            </q-item-section>
          </q-item>

          <q-item to="/upload" clickable v-ripple exact>
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>
            <q-item-section>
              Upload
            </q-item-section>
          </q-item>
          <q-separator />

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
      
      <q-img id="leftimg" class="absolute-top" src="statics/mountains.jpg">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="60px" class="q-mb-sm">
            <img src="statics/neurons.jpg">
          </q-avatar>
          <div class="text-weight-bold"><font color="#34495e">Machiavelli</font></div>
          <div><font color="#ecf0f1">Every dog has its day</font></div>
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
      headheight : 0,
      leftDrawerOpen: false
    }
  },
  mounted () {
    if(this.$store.state.showcase.drawerState == false)
      this.$router.push('/')
    this.headheight = document.getElementById("headimg").offsetHeight
    document.getElementById("leftimg").style.height = this.headheight+"px"
    document.body.removeAttribute("class","bg")
  },
  methods: {
    signout () {
      this.$router.push('/')
    }
  },
  computed: {
    todaysDate() {
      //alert(document.getElementById("headiv").offsetHeight)
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
