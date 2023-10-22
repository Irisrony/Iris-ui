<template>
    <div class="iris-clock">
        <div class="cards-container">
            <div class="cards-content">
                <IrisFlipCard :num="date[0]" ref="h1"></IrisFlipCard>
                <IrisFlipCard :num="date[1]" ref="h2"></IrisFlipCard>
            </div>
            <div class="cards-description">
                <span>hh</span>
            </div>
        </div>
        <em>:</em>
        <div class="cards-container">
            <div class="cards-content">
                <IrisFlipCard :num="date[2]" ref="m1"></IrisFlipCard>
                <IrisFlipCard :num="date[3]" ref="m2"></IrisFlipCard>
            </div>
            <div class="cards-description">
                <span>mm</span>
            </div>
        </div>
        <em>:</em>
        <div class="cards-container">
            <div class="cards-content">
                <IrisFlipCard :num="date[4]" ref="s1"></IrisFlipCard>
                <IrisFlipCard :num="date[5]" ref="s2"></IrisFlipCard>
            </div>
            <div class="cards-description">
                <span>ss</span>
            </div>
        </div>
        
    </div>
</template>

<script setup lang='ts'>
import { Ref, onMounted, ref } from 'vue';
import IrisFlipCard from './IrisFlipCard.vue';
import {formatDate} from '../utils/TimeFormatter'

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

const cards = [h1,h2,m1,m2,s1,s2]

const flip = (el :Ref<any>, curNum: string,nextNum: string) => {
    if(curNum !== nextNum && el.value.flip){
        el.value.flip(nextNum)
    }
}

const init = () => {
    const now = props.time || new Date()

    date.value = formatDate(new Date(now.getTime()),'hhiiss').split('').map(v => Number.parseInt(v))    
}

const run = () => {
    
    setInterval(() => {        
        const now = new Date()
        const nowTimeStr = formatDate(new Date(now.getTime() - 1000),'hhiiss')
        const nextTimeStr = formatDate(now,'hhiiss')
        for(let i = 0;i<cards.length;++i){
            flip(cards[i],nowTimeStr[i],nextTimeStr[i])
        }
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
    margin-bottom: 35px;
    padding: 2px 2px;
    font-size: 66px;
    font-style: normal;
}

.cards-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.cards-content{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 10px;
}

.cards-description span{
    background-color: #888;
    border-radius: 5px;
    padding: 0 5px;
}


</style>