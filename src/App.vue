<template>
  <div class="app">
    <div class="route">
      <router-link to="/home" class="route-item" active-class="active">
        <button>首页 Home</button>
      </router-link>
      <router-link to="/about" class="route-item" active-class="active">
        <button>关于 About</button>
      </router-link>
      <router-link to="/category" class="route-item" active-class="active">
        <button>分类 Category</button>
      </router-link>
      <router-link to="/user" class="route-item" active-class="active">
        <button>用户 User</button>
      </router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup name="App">
</script>

<style scoped>
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
      width: 80%;
      margin: 0 auto;
      position: absolute;
      text-align: center;
      left: 0;
      right: 0;
      top: 50px
    }
  }
</style>