import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Player from '@/components/Player'
import PlayerProfile from '@/components/Player/Profile'
import PlayerStats from '@/components/Player/Stats'
import SettingDetail from '@/components/setting/Detail'
import SettingHeader from '@/components/setting/Header'
import SettingSiderbar from '@/components/setting/SideBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components:{
        myDetail: SettingDetail,
        myHeader: SettingHeader,
        mySiderbar: SettingSiderbar
      }
    },
    {
      path: '/player/:uid',
      name: 'Player',
      component: Player,
      children:[
        {
          path: 'profile',
          component: PlayerProfile
        },
        {
          path: 'stats',
          component: PlayerStats
        }
      ]
    }
  ]
})
