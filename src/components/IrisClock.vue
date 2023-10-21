<template>
    <div class="iris-clock">
        <IrisFlipCard :num="date[0]" ref="h1"></IrisFlipCard>
        <IrisFlipCard :num="date[1]" ref="h2"></IrisFlipCard>
        <em>:</em>
        <IrisFlipCard :num="date[2]" ref="m1"></IrisFlipCard>
        <IrisFlipCard :num="date[3]" ref="m2"></IrisFlipCard>
        <em>:</em>
        <IrisFlipCard :num="date[4]" ref="s1"></IrisFlipCard>
        <IrisFlipCard :num="date[5]" ref="s2"></IrisFlipCard>
    </div>
</template>

<script setup lang='ts'>
import { Ref, onMounted, ref } from 'vue';
import IrisFlipCard from './IrisFlipCard.vue';

type TData = {
    time?: Date
    duration?: number
}

const props = defineProps<TData>()

const date = ref(new Array(6))

const h1 = ref()
const h2 = ref()
const m1 = ref()
const m2 = ref()
const s1 = ref()
const s2 = ref()

const flip = (el :Ref<any>, curNum: string,nextNum: string) => {
    if(curNum !== nextNum){
        el.value.flip(nextNum)
    }
}

const init = () => {
    const now = props.time || new Date()

    date.value = formatDate(new Date(now.getTime()),'hhiiss').split('').map(v => Number.parseInt(v))    
}

const formatDate = (time: Date,format: string) : string => {
    if(/y+/.exec(format)){
        const ret = /y+/.exec(format)!
        format = format.replace(ret[1],(time.getFullYear + '').substring(4-ret[1].length))
    }
    const o : {[key: string]: number} = {
        'm+': time.getMonth() + 1,
        'd+': time.getDate(),
        'h+': time.getHours(),
        'i+': time.getMinutes(),
        's+': time.getSeconds()
    }
    for(const k in o){
        const ret = new RegExp(`(${k})`).exec(format)
        if(ret){
            const str = o[k] + ''
            format = format.replace(ret[1],ret[1].length === 1 ? str : padLeftZero(str))
        }
    }
    return format
}

const padLeftZero = (str: string) : string => {
    return ('00' + str).substring(str.length)
}

const run = () => {
    
    setInterval(() => {        
        const now = new Date()
        const nowTimeStr = formatDate(new Date(now.getTime() - 1000),'hhiiss')
        const nextTimeStr = formatDate(now,'hhiiss')
        flip(h1,nowTimeStr[0],nextTimeStr[0])
        flip(h2,nowTimeStr[1],nextTimeStr[1])
        flip(m1,nowTimeStr[2],nextTimeStr[2])
        flip(m2,nowTimeStr[3],nextTimeStr[3])
        flip(s1,nowTimeStr[4],nextTimeStr[4])
        flip(s2,nowTimeStr[5],nextTimeStr[5])
    }, 1000)
}

onMounted(() => {
    init()
    run()
})

</script>

<style scoped>
.iris-clock{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.iris-clock em{
    padding: 2px 2px;
    font-size: 66px;
    font-style: normal;
}

</style>