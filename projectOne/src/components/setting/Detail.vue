<template>
    <div class="detailframe">
        <h1>详细内容</h1>
        <p>
            Vue.js是一套用于构建用户界面的渐进式框架。Vue的核心库只关注视图层，不仅易上手，还便于
            第三方库或既有项目的整合。<br>另一方面，当与现代化工具链以及各种支持类库结合使用时，Vue也
            完全能够为复杂的单页应用提供驱动
        </p>
        <div class="newsInfo">
            <ol>
                <li v-for="item in newsinfo" :key="item.data.id">
                    <avatar username="张无忌" :src="item.data.thumbnail" background-color="#fff" color="rgb(255,208,75)"></avatar>
                    {{item.data.title}}
                </li>
            </ol>
        </div>
    </div>
</template>
<script>
import Avatar from 'vue-avatar'
export default {
    name: 'Detail',
    components:{
        Avatar
    },
    data(){
        return {
            newsinfo:[]
        }
    },
    mounted(){
        this.axios.get('https://www.reddit.com/r/aww.json?raw_json=1').then(response =>{
            this.newsinfo = response.data.data.children
            console.log(this.newsinfo)
        })
    }
}
</script>
<style>
.newsInfo{
    width: 90%;
    font-family: 'Courier New', Courier, monospace;
    color: dimgray;
    margin-left: 5%;
}
.detailframe{
    position: relative;
    /* top: -150px; */
}
</style>