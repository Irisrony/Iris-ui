<template>
    <div class="container">
        <canvas ref="canvas"></canvas>
    </div>
</template>

<script setup lang='ts'>
import { ref,onMounted, onUnmounted } from 'vue';

type TData = {
    ctx: CanvasRenderingContext2D,
    columnCount: number,
    rowCount: number,
    charIndex: Array<number>,
}

const canvas = ref()

const fontSize = 10 * devicePixelRatio

const data = ref<TData>()

let timer : number | null = null

// const scale = devicePixelRatio
const scale = 1

const init = () => {
    // 宽高缩放
    canvas.value.width = window.innerWidth * scale
    canvas.value.height = window.innerHeight * scale
    // 行列大小
    const columnCount = Math.floor(canvas.value.width / fontSize) 
    const rowCount = Math.floor(canvas.value.height / fontSize)
    data.value = {
        ctx : (canvas.value as HTMLCanvasElement).getContext('2d')!,
        columnCount,
        rowCount,
        charIndex : new Array(columnCount).fill(0),
    }    
}

const draw = () => {
    const value = data.value!
    // 遮罩
    value.ctx.fillStyle = 'rgba(0,0,0,0.1)'
    value.ctx.fillRect(0,0,canvas.value.width,canvas.value.height)
    // 文字样式
    value.ctx.fillStyle = '#6BE445'
    value.ctx.textBaseline = 'top'    
    value.ctx.textAlign = 'center'
    value.ctx.font = `${fontSize}px "Roboto mono"`
    // 更新
    for(let i = 0;i<value.columnCount;++i){
        const x = i*fontSize
        const y = value.charIndex[i]*fontSize
        value.ctx.fillText(getRandomText(),x,y)
        if(y > canvas.value.height && Math.random() > 0.99){            
            value.charIndex[i] = 0
        }else{
            ++value.charIndex[i]
        }
    }
    
}

const getRandomText = () => {
    const textStr = '0123456789abcdefghijklmnopqrstuvwxyz'
    return textStr[Math.floor(Math.random()*textStr.length)]
}

onMounted(() => {
    init()
    timer = setInterval(draw,50)
})

onUnmounted(() => {
    if(timer){
        clearInterval(timer)
        timer = null
    }
})

</script>

<style scoped>
.container{
    background-color: #000;
}
</style>