<template>
    <div class="iris-flipcard">
        <div class="flipcard-item card1">{{ num2 }}</div>
        <div class="flipcard-item card2">{{ num2 }}</div>
        <div class="flipcard-item card3">{{ num1 }}</div>
        <div class="flipcard-item card4">{{ num1 }}</div>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const num1 = ref(0)
const num2 = ref(1)

</script>

<style scoped>
.iris-flipcard{
    position: relative;
    text-align: center;
    display: inline-block;
    width: 60px;
    height: 100px;
    border: 1px solid #000;
    border-radius: 10px;
    background-color: #fff;
    font-size: 66px;
    color: #fff;
    box-shadow: 0 0 6px rgba(0, 0, 0, .5);
}

.flipcard-item{
    width: 100%;
    height: 50%;
    position: absolute;
    left: 0;
    right: 0;
    background-color: #000;
    box-sizing: border-box;
    overflow: hidden;
    transition: 0.5s;
}

.card1,.card3{
    line-height: 150%;
    border-bottom: solid 1px #666;
    border-radius: 10px 10px 0 0;
}

.card2,.card4{
    top: 50%;
    border-radius: 0 0 10px 10px;
    line-height: 0;
}

.card1,.card4 {
    z-index: 1;
}

.card2{
    transform-origin: center top;
    backface-visibility: hidden;
    transform: rotateX(180deg);
    z-index: 2;
}

.card3{
    transform-origin: center bottom;
    backface-visibility: hidden;
    z-index: 2;
}

.iris-flipcard:hover .card2 {
    transform: rotateX(0);
}

.iris-flipcard:hover .card3 {
    transform: rotateX(-180deg);
}

</style>