<template>
    <div class="home">
        <div><circle-loading /></div>
        <div><bubble-loading /></div>
        <div><teacup-loading /></div>
        <div><energy-ball /></div>
        <div><play-button /></div>
        <div><floating-button /></div>
        <div><progress-bar /></div>
    </div>
</template>
<script>
import CircleLoading from '../Buttons/CircleLoading'
import BubbleLoading from '../Buttons/BubbleLoading'
import TeacupLoading from '../Buttons/TeacupLoading'
import EnergyBall from '../Buttons/EnergyBall'
import PlayButton from '../Buttons/PlayButton'
import FloatingButton from '../Buttons/FloatingButton'
import ProgressBar from '../Buttons/ProgressBar'
export default {
    components:{
        CircleLoading,
        BubbleLoading,
        TeacupLoading,
        EnergyBall,
        PlayButton,
        FloatingButton,
        ProgressBar
    }
}
</script>
<style>
.home{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    height: 80vh;
    justify-items: center;
    /* 修改位置 */
    position: absolute;
    top:200px;
    width: 300px;
    /* max-width: 400px; */
    margin: 0 auto;
}
.home > div{
    transform: scale(1.5);
}
</style>