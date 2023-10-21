<template>
    <div class="iris-flipcard">
        <div class="flipcard-item card1"></div>
        <div class="flipcard-item card2"></div>
        <div class="flipcard-item card3">{{ props.num }}</div>
        <div class="flipcard-item card4">{{ props.num }}</div>
    </div>
    <div class="btnController">
        <button id="btnUp">向上翻转</button>
        <button id="btnDown" @click="flipDown">向下翻转</button>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';


type TData = {
    num: number
}

const props = withDefaults(defineProps<TData>(),{
    num: 0
})

const isFlipping = ref(false)

const flipDown = () => {
    if(isFlipping.value){
        return
    }
    const card1 = document.querySelector('.card1')
    const card2 = document.querySelector('.card2')
    const card3 = document.querySelector('.card3')
    const card4 = document.querySelector('.card4')

    const  curNum = Number.parseInt(card3!.innerHTML)
    const  nextNum = (curNum + 9) % 10
    card1!.innerHTML = card2!.innerHTML = "" + nextNum

    card2!.setAttribute('class','flipcard-item card2 card2FlipUp')
    card3!.setAttribute('class','flipcard-item card3 card3FlipUp')

    isFlipping.value = true

    setTimeout(()=>{
        card2!.setAttribute('class','flipcard-item card2')
        card3!.setAttribute('class','flipcard-item card3')
        card4!.innerHTML = card3!.innerHTML = "" + nextNum
        card1!.innerHTML = card2!.innerHTML = "" + ((nextNum + 9) % 10)
        isFlipping.value = false
    },600)
    
}

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