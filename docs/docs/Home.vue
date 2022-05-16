<template>
  <div id="home-page">
    <div class="main-title">
      <h1>Js Utils </h1>
    </div>

    <div class="sub-title">Js utility functions</div>

    <div class="get-start" @click="getStart">Get Started</div>
  </div>
</template>

<script setup lang="ts">
import { useRouter ,withBase } from "vitepress";



const router = useRouter();

const getStart = () => {
  router.route.path = "/guide/getStarted";
  router.go(withBase("/guide/getStarted") );
};
</script>

<style scoped>
body {
  overflow: hidden;
}
#home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  justify-content: center;
}

.main-title h1 {
  font-size: 60px;
}

.main-title {
  margin-bottom: 15px;
  /* font-size: 30px; */
}

.sub-title {
  font-size: 20px;
  margin-bottom: 50px;
}

.get-start {
  box-sizing: border-box;
  padding: 15px 30px;
  background-color: #42b883;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
}
</style>
