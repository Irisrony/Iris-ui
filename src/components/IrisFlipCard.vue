<template>
    <div class="iris-flipcard">
        <div class="flipcard-item card1" ref="card1"></div>
        <div class="flipcard-item card2" ref="card2"></div>
        <div class="flipcard-item card3" ref="card3">{{ props.num }}</div>
        <div class="flipcard-item card4" ref="card4">{{ props.num }}</div>
    </div>
</template>

<script setup lang='ts'>
import { onUnmounted, ref } from 'vue';

type TData = {
    num?: number
    duration?: number
}

const props = withDefaults(defineProps<TData>(),{
    num: 0,
    duration: 600
})

const isFlipping = ref(false)

const card1 = ref()
const card2 = ref()
const card3 = ref()
const card4 = ref()

let timer : null | number = null

const setFrontNum = (num: number) => {
    card4!.value.innerHTML = card3!.value.innerHTML = "" + num
}

const flip = (nextNum: number) => {

    if(isFlipping.value){
        return
    }

    // 设置底下的数字
    card1!.value.innerHTML = card2!.value.innerHTML = "" + nextNum

    // 设置动画
    card2!.value.setAttribute('class','flipcard-item card2 card2FlipUp')
    card3!.value.setAttribute('class','flipcard-item card3 card3FlipUp')

    isFlipping.value = true

    timer = setTimeout(()=>{
        // 清除动画
        card2!.value.setAttribute('class','flipcard-item card2')
        card3!.value.setAttribute('class','flipcard-item card3')
        // 更新顶部的数字
        setFrontNum(nextNum)
        isFlipping.value = false
    },props.duration)
    
}

defineExpose({
    flip
})

onUnmounted(() => {
    if(timer)[
        clearTimeout(timer),
        timer = null
    ]
})

</script>

<style scoped>
.iris-flipcard{
    margin-left: 2px;
    margin-right: 2px;
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

.card2FlipUp{
    animation: card2FlipUp 0.6s ease-in-out both;
}

.card3FlipUp{
    animation: card3FlipUp 0.6s ease-in-out both;
}

@keyframes card2FlipUp{
    0% {
        transform: rotateX(180deg);
    }

    100% {
        transform: rotateX(0);
    }
}

@keyframes card3FlipUp{
    0% {
        transform: rotateX(0);
    }

    100% {
        transform: rotateX(-180deg);
    }
}

</style>