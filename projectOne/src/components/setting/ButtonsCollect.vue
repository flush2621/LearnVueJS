<template>
    <div class="home">
        <div><circle-loading /></div>
        <div><bubble-loading /></div>
        <div><teacup-loading /></div>
        <div><energy-ball /></div>
        <div><play-button /></div>
        <div><floating-button /></div>
        <div><progress-bar /></div>
        <div><badge /></div>
        <div><land-mark /></div>
        <div><heart /></div>
        <div><mail /></div>
        <div><calendar /></div>
        <div><joker /></div>
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
import Badge from '../Buttons/Badge'
import LandMark from '../Buttons/LandMark'
import Heart from '../Buttons/Heart'
import Mail from '../Buttons/Mail'
import Calendar from '../Buttons/Calendar'
import Joker from '../Buttons/Joker'
export default {
    components:{
        CircleLoading,
        BubbleLoading,
        TeacupLoading,
        EnergyBall,
        PlayButton,
        FloatingButton,
        ProgressBar,
        Badge,
        LandMark,
        Heart,
        Mail,
        Calendar,
        Joker
    }
}
</script>
<style>
.home{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    height: 80vh;
    align-items: center;
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