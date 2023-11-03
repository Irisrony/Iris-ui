<template>
    <div class="container">
      <IrisClock></IrisClock>
    </div>
  </template>
  
  <script setup lang='ts'>
  import IrisClock from '../components/IrisClock.vue';
  </script>
  
  <style scoped>
  .container{
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #666;
  }
  </style>
  