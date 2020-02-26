<template>
  <div ref="container">

  </div>
</template>
<script>
import * as THREE from 'three'
import OrbitControls from 'three-orbitcontrols'
export default {
  OrbitControls,
  data: () => ({
    controls: {
      scene: null,
      camera: null,
      renderer: null,
      rotationSpeed: .02
    }
  }),
  created () {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    init () {
      this.scene = new THREE.Scene()
      // this.scene.fog = new THREE.Fog(0xcce0ff, 50, 500)
      // let geometry = new THREE.SphereGeometry(60,40,40)
      let geometry = new THREE.BoxGeometry(100,100,100)
      let material = new THREE.MeshLambertMaterial({color: 0xff9b59b6})
      this.mesh = new THREE.Mesh(geometry,material)
      this.scene.add(this.mesh)
      let point = new THREE.PointLight(0xffffff)
      point.position.set(400,200,300)
      this.scene.add(point)
      let ambient = new THREE.AmbientLight(0x444444)
      this.scene.add(ambient)
      let axis = new THREE.AxesHelper(300)
      this.scene.add(axis)
      let width = window.innerWidth
      let height = window.innerHeight
      let k = width / height
      let s = 200
      //camera = new THREE.PerspectiveCamera(55, k, .1, 1000)
      this.camera = new THREE.OrthographicCamera(-s * k,s * k,s,-s,1,1000)
      this.camera.position.set(200,300,200)
      this.camera.lookAt(this.scene.position)
      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setSize(width,height)
      this.renderer.setClearColor(0xd9dbff,1)
      this.renderer.shadowMapEnabled = true
      this.$refs.container.append(this.renderer.domElement)
      this.renderChange()
      let controls = new OrbitControls(this.camera,this.renderer.domElement)
      controls.addEventListener('change',this.renderChange)
      // setInterval(this.renderScene,40)
      // this.renderScene()
      // this.renderer.render(this.scene,this.camera)
    },
    renderChange () {
      this.renderer.render(this.scene,this.camera)
    },
    renderScene () {
      let {controls, scene, mesh, camera, renderer} = this
      mesh.rotateX(controls.rotationSpeed)
      mesh.rotateY(controls.rotationSpeed)
      mesh.rotateZ(controls.rotationSpeed)
      renderer.render(scene, camera)
      requestAnimationFrame(this.renderScene)
    }
  }
}
</script>
<style>
.container{
  margin: 0;
  overflow: hidden;
}
</style>