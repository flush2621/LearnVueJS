<template>
    <div>
        <h1>详细内容</h1>
        <p>
            Vue.js是一套用于构建用户界面的渐进式框架。Vue的核心库只关注视图层，不仅易上手，还便于
            第三方库或既有项目的整合。另一方面，当与现代化工具链以及各种支持类库结合使用时，Vue也
            完全能够为复杂的单页应用提供驱动
        </p>
        <div class="newsInfo">
            {{newsinfo}}
        </div>
    </div>
</template>
<script>
export default {
    name: 'Detail',
    data(){
        return {
            newsinfo:''
        }
    },
    mounted(){
        this.axios.post("http://api.komavideo.com/news/list").then(body =>{
            this.newsinfo = body.data;
        });
    }
}
</script>
<style scoped>
    .newsInfo{
        width: 90%;
        font-family: 'Courier New', Courier, monospace;
        color: dimgray;
        margin-left: 5%;
    }
</style>