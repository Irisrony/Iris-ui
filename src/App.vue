<template>
  <div>
    这里是首页
  </div>
  <!-- 对话框区域 -->
  <IrisDialog></IrisDialog>
  <!-- 按钮区域 -->
  <!-- <div class="ButtonList">
    <IrisButton type="primary">111</IrisButton>
    <IrisButton type="success">111</IrisButton>
    <IrisButton type="info">222</IrisButton>
    <IrisButton type="warning">333</IrisButton>
    <IrisButton type="danger">111</IrisButton>
    <IrisButton>111</IrisButton>
  </div>
  <div class="ButtonList">
    <IrisButton plain type="primary">111</IrisButton>
    <IrisButton plain type="success">111</IrisButton>
    <IrisButton plain type="info">222</IrisButton>
    <IrisButton plain type="warning">333</IrisButton>
    <IrisButton plain type="danger">111</IrisButton>
    <IrisButton plain>111</IrisButton>
  </div>
  <div class="ButtonList">
    <IrisButton round plain type="primary">111</IrisButton>
    <IrisButton round plain type="success">111</IrisButton>
    <IrisButton round plain type="info">222</IrisButton>
    <IrisButton round plain type="warning">333</IrisButton>
    <IrisButton round plain type="danger">111</IrisButton>
    <IrisButton round plain>111</IrisButton>
  </div>
  <div class="ButtonList">
    <IrisButton circle round plain type="primary">111</IrisButton>
    <IrisButton circle round plain type="success">111</IrisButton>
    <IrisButton circle round plain type="info">222</IrisButton>
    <IrisButton circle round plain type="warning">333</IrisButton>
    <IrisButton circle round plain type="danger">111</IrisButton>
    <IrisButton circle round plain>111</IrisButton>
  </div>
  <div class="ButtonList">
    <IrisButton circle icon="iris-icon-delete" plain type="primary" @click="btnClick"></IrisButton>
    <IrisButton circle icon="iris-icon-search" plain type="success"></IrisButton>
    <IrisButton circle icon="iris-icon-edit" plain type="info"></IrisButton>
    <IrisButton circle icon="iris-icon-check" plain type="warning"></IrisButton>
    <IrisButton circle icon="iris-icon-delete" plain type="danger"></IrisButton>
    <IrisButton circle icon="" plain></IrisButton>
  </div>
  <div class="ButtonList">
    <IrisButton disabled circle icon="iris-icon-delete" plain type="primary" @click="btnClick"></IrisButton>
    <IrisButton disabled circle icon="iris-icon-search" plain type="success"></IrisButton>
    <IrisButton disabled circle icon="iris-icon-edit" plain type="info"></IrisButton>
    <IrisButton disabled circle icon="iris-icon-check" plain type="warning"></IrisButton>
    <IrisButton disabled circle icon="iris-icon-delete" plain type="danger"></IrisButton>
    <IrisButton disabled circle icon="" plain></IrisButton>
  </div> -->
</template>

<script setup lang='ts'>
import IrisButton from './components/IrisButton.vue';
import IrisDialog from './components/IrisDialog.vue';

const btnClick = (e: string) => {
  console.log(e);
  
}

</script>

<style scoped>
.ButtonList{
  display: flex;
  margin-left: 20px;
  .iris-button{
    margin-right: 20px;
  }
}
</style>
