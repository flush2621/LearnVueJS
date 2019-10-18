<template>
    
    <div>
        <div class="energy-ball">
            <div class="energy-ball-child"></div>        
        </div>         
    </div>
</template>
<style>
.energy-ball{
    display:inline-block;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    overflow: hidden;
    background-color: rgba(255, 0, 0, 0.2);
    /* transform-style:preserve-3d; */
    /* -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC); */
}
.energy-ball-child{
    width: 60px;
    height: 60px;
    border-radius: 40%;
    background-color: red;
    position: relative;
    top: 45%;
    left: -50%;
    animation:wave 5s linear infinite;
    z-index:66;
}
/* @-webkit-keyframes wave {
    from {
        -webkit-transform: rotateZ(0deg) ;
        transform: rotateZ(0deg);
    }
    to {
        -webkit-transform: rotateZ(360deg);
        transform: rotateZ(360deg);
    }
} */

@keyframes wave {
    from {
        /* -webkit-transform: rotateZ(0deg); */
        transform: rotateZ(0deg);
    }
    to {
        /* -webkit-transform: rotateZ(360deg); */
        transform: rotateZ(360deg);
    }
}
</style>