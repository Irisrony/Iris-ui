<template>
  <div class="container">
    <IrisFlipCard :num=1></IrisFlipCard>
  </div>
</template>

<script setup lang='ts'>
import IrisFlipCard from './components/IrisFlipCard.vue';

</script>

<style scoped>
.container{
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #666;
}
:deep .iris-flipcard {
  top: 30%;
}
</style>
