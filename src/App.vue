<template>
  <canvas ref="canvasRef" id="canvas"></canvas>
  <div class="app" ref="appRef">
    <div class="route">
      <router-link to="/home" class="route-item" active-class="active">
        <transition>
          <keep-alive>
            <button>首页 Home</button>
          </keep-alive>
        </transition>
      </router-link>
      <router-link to="/about" class="route-item" active-class="active">
        <transition>
          <keep-alive>
            <button>关于 About</button>
          </keep-alive>
        </transition>
      </router-link>
      <router-link to="/category" class="route-item" active-class="active">
        <transition>
          <keep-alive>
            <button>分类 Category</button>
          </keep-alive>
        </transition>
      </router-link>
      <router-link to="/user" class="route-item" active-class="active">
        <transition>
          <keep-alive>
            <button>用户 User</button>
          </keep-alive>
        </transition>
      </router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup name="App">
  import {onMounted, ref} from "vue"
  import { DrawCanvas } from "./utils/canvas.js"
  import { My_debounce } from "./utils/My_debounce.js"

  const canvasRef = ref(null)

  onMounted(() => {
    let drawCanvas = new DrawCanvas(0, 0, canvasRef)
    drawCanvas.renderCanvas()
    function clickNotCanvas() {
      drawCanvas.updateCanvas()
    }

    const timer = setInterval(() => {
      clickNotCanvas()
      clearInterval(timer)
    }, 1000)
  })
</script>

<style scoped>
  #app {
    padding: 0;
    margin: 0;
  }
  #canvas {
    padding: 0;
    margin: -8px;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1;
  }
  .app {
    .route {
      width: 80%;
      margin: 0 auto;
      flex-direction: row;
      display: flex;
      justify-content: space-between;

      .route-item {
        text-decoration: none;
        button {
          width: 120px;
          height: 30px;
          line-height: 30px;
          text-align: center;
        }

        button:hover{
          background: deepskyblue;
          cursor: pointer;
        }
      }

      .active button {
        background: indianred;
      }
    }
    .content {
      background: white;
      width: 80%;
      margin: 0 auto;
      position: absolute;
      text-align: center;
      left: 0;
      right: 0;
      top: 50px;
    }
  }
</style>