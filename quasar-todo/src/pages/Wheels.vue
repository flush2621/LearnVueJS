<template>
  <div class="wrapper">
    <div class="light"></div>
    <div class="light"></div>
    <div class="light"></div>
    <div class="light"></div>
    <div class="light"></div>
    <div class="light"></div>
    <div class="light"></div>
    <div class="light"></div>
    <div class="light"></div>
    <div class="light"></div>
    <div class="panel">
      <div class="sector">
        <div class="sector-inner">
          <span>谢谢参与</span>
        </div>
      </div>
      <div class="sector">
        <div class="sector-inner">
          <span> 50 积分</span>
        </div>
      </div>
      <div class="sector">
        <div class="sector-inner">
          <span>谢谢参与</span>
        </div>
      </div>
      <div class="sector">
        <div class="sector-inner">
          <span>100话费</span>
        </div>
      </div>
      <div class="sector">
        <div class="sector-inner">
          <span> 50 积分</span>
        </div>
      </div>
      <div class="sector">
        <div class="sector-inner">
          <span>谢谢参与</span>
        </div>
      </div>
      <div class="sector">
        <div class="sector-inner">
          <span>100话费</span>
        </div>
      </div>
      <div class="sector">
        <div class="sector-inner">
          <span>谢谢参与</span>
        </div>
      </div>
      <div class="sector">
        <div class="sector-inner">
          <span> 50 积分</span>
        </div>
      </div>
      <div class="sector">
        <div class="sector-inner">
          <span>10元话费</span>
        </div>
      </div>
      <div class="pointer">开始抽奖</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Wheels',
  data () {
    return {
      deg: 0,
      text: '',
      onRotation: false, // 记录当前是否正在旋转，如果正在旋转，就不能继续点击了
      reward: ['谢谢参与', '50积分', '谢谢参与', '100元话费', '50积分', '谢谢参与', '100元话费', '谢谢参与', '50积分', '10元话费']
    }
  },
  mounted () {
    let getEle = document.getElementsByClassName.bind(document);
    let pointer = getEle('pointer')[0]
    let lights = Array.prototype.slice.call(getEle('light'))
    pointer.addEventListener('transitionend', () => {
      console.log('抽奖结束');
      // let getEle = document.getElementsByClassName.bind(document);
      // let lights = Array.prototype.slice.call(getEle('light'));
      setTimeout(() => { // 等闪烁三下结束
        this.onRotation = false;
        lights.forEach(light => { light.className = 'light'; });
        this.$q.notify({
                position: 'top',
                message: this.text,
                color: 'purple',
                timeout: 2000
              })
      }, 300);
    },true)
    pointer.addEventListener('click', () => {
      if (this.onRotation) return;
      pointer.style.transform = `rotateZ(0)`
      console.log('开始抽奖');
      this.onRotation = true;
      lights.forEach(light => { light.className += ' light-twinkling'; });
      let nextStatus = this.getReward();
      pointer.style.transform = `rotateZ(${this.deg}deg)`;
    },true)
  },
  methods: {
    getReward  () {
      // 转三圈到四圈
      let currentDeg = 0
      let rotateDeg = Math.random() * 360 + 1080
      currentDeg += rotateDeg
      this.deg += currentDeg
      let rewardText = this.reward[Math.floor((this.deg + 18) % 360 / 36)]
      this.text = rewardText === '谢谢参与' ? '很遗憾，您没有获得奖品。' : '恭喜获得: ' + rewardText
    }
  }
}
</script>
<style>
/* 重置默认样式 */
    * {
      margin: 0;
      padding: 0;
      border: none;
      outline: none;
    }
    .wrapper {
      position: relative;
      top: 40px;
      left: 60px;
      height: 240px;
      width: 240px;
      padding: 20px;
      background-color: #c0381f;
      box-shadow: #000000 0px 0px 10px;
      border-radius: 50%;
    }
    .light {
      position: absolute;
      height: 10px;
      width: 10px;
      border-radius: 50%;
      top: 5px;
      left: 115px;
      transform-origin: 5px 115px;
    }
    .light-twinkling {
      animation: 1s twinkling 3, 100ms 3s twinkling 3;
    }
    .light:nth-child(2n) {
      background-color: #fafce7;
    }
    .light:nth-child(2n+1) {
      background-color: #ffe58b;
    }
    .light:nth-child(2) {
      transform: rotate(36deg);
    }
    .light:nth-child(3) {
      transform: rotate(72deg);
    }
    .light:nth-child(4) {
      transform: rotate(108deg);
    }
    .light:nth-child(5) {
      transform: rotate(144deg);
    }
    .light:nth-child(6) {
      transform: rotate(180deg);
    }
    .light:nth-child(7) {
      transform: rotate(216deg);
    }
    .light:nth-child(8) {
      transform: rotate(252deg);
    }
    .light:nth-child(9) {
      transform: rotate(288deg);
    }
    .light:nth-child(10) {
      transform: rotate(324deg);
    }
    .panel {
      position: relative;
      height: 200px;
      width: 200px;
      background-color: #b7b7b7;
      border-radius: 100px;
    }
    .sector {
        position: absolute;
        left: 100px;
        width: 100px;
        height: 200px;
        border-radius: 0px 100px 100px 0;
        overflow: hidden;
        transform-origin: left center;
    }
    .sector:nth-child(1) {
      transform: rotate(-18deg);
    }
    .sector:nth-child(2) {
      transform: rotate(18deg);
    }
    .sector:nth-child(3) {
      transform: rotate(54deg);
    }
    .sector:nth-child(4) {
      transform: rotate(90deg);
    }
    .sector:nth-child(5) {
      transform: rotate(126deg);
    }
    .sector:nth-child(6) {
      transform: rotate(162deg);
    }
    .sector:nth-child(7) {
      transform: rotate(198deg);
    }
    .sector:nth-child(8) {
      transform: rotate(234deg);
    }
    .sector:nth-child(9) {
      transform: rotate(270deg);
    }
    .sector:nth-child(10) {
      transform: rotate(306deg);
    }
    .sector:nth-child(2n+1) .sector-inner {
      background: #fef6e0;
    }
    .sector:nth-child(2n) .sector-inner {
      background: #ffffff;
    }
    .sector-inner {
      text-align: center;
      display: block;
      width: 40px;
      padding: 5px 3px 0 57px;
      height: 200px;
      background: #ffeab1;
      transform: translateX(-62px) rotate(36deg);
      transform-origin: right center;
    }
    .sector-inner span {
      display: block;
      font-size: 10px;
      transform-origin: center;
      transform: rotate(-19deg) translate(-20px,-5px);
      color: #d46854;
    }
    .pointer {
      position: absolute;
      left: 80px;
      top: 80px;
      cursor: pointer;
      z-index: 10;
      height: 40px;
      width: 40px;
      padding: 6px;
      color: #fff899;
      line-height: 15px;
      font-size: xx-small;
      text-align: center;
      background-color: #dc5b5b;
      border-radius: 50%;
      border: 1px solid #c0381f;
      transition: transform 3s cubic-bezier(.2,.93,.43,1);
    }
    .pointer::after {
      content: '';
      position: absolute;
      left: 13px;
      top: -20px;
      border-width: 10px 6px;
      border-style: solid;
      border-color: transparent;
      border-bottom-color: #c0381f;
    }
    @keyframes twinkling {
      50% { background: transparent; }
    }
</style>