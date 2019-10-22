<template>
    <div class="joker">55</div>
</template>
<style>
.joker{
    position: relative;
    margin: 5px 0;
    border-radius: 4px;
    width: 40px;
    height: 30px;
    top: -10px;
    background-color: red;
    overflow: hidden;
}
.joker::before{
    content: 'xx';
}
.joker::after{
    content: "yy";
}
</style>