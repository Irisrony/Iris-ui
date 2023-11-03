<template>
    <div id="container">
        <div id="circle">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
    </div>
</template>

<script setup lang='ts'>

</script>

<style lang="scss" scoped>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

$containerSize: 150px; // 容器大小
$ballSize: 10px; // 小球大小

$n: 36; // 小球数量
$perDeg: calc(360deg / $n); // 每个小球的角度

$d: 2s; // 动画时间

#container{
    width: $containerSize;
    height: $containerSize;
    background-color: transparent;
}
#circle{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    //outline: 1px solid #fff;
    position: relative;
    .dot{
        position: absolute;
        left: 50%;
        right: 0%;
        width: $ballSize;
        height: $ballSize;
        margin-left: calc(-1 * $ballSize / 2);
        margin-top: calc(-1 * $ballSize / 2);
        // 景深
        perspective: 70px;
        transform-style: preserve-3d;
        // 旋转角度
        transform-origin: center calc(($ballSize + $containerSize)/2);
        @for $i from 1 through $n {
            &:nth-child(#{$i}){
                transform: rotate(calc($perDeg * ($i - 1)));
                &::before,
                &::after{
                    animation-delay: calc(-1 * $d / $n * ($i - 1) * 6);
                }
            }
        }
        &::before,&::after{
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
        &::before{
            top: -100%;
            background-color: #000;
            animation: rotation-black $d infinite;
            @keyframes rotation-black {
                0%{
                    animation-timing-function: ease-in;
                }
                25%{
                    animation-timing-function: ease-out;
                    transform: translate3d(0,100%,$ballSize);
                }
                50%{
                    animation-timing-function: ease-in;
                    transform: translate3d(0,200%,0);
                }
                75%{
                    animation-timing-function: ease-out;
                    transform: translate3d(0,100%,- $ballSize);
                }
            }
        }
        &::after{
            top: 100%;
            background-color: #fff;
            animation: rotation-white $d infinite;
            @keyframes rotation-white {
                0%{
                    animation-timing-function: ease-in;
                }
                25%{
                    animation-timing-function: ease-out;
                    transform: translate3d(0,-100%,- $ballSize);
                }
                50%{
                    animation-timing-function: ease-in;
                    transform: translate3d(0,-200%,0);
                }
                75%{
                    animation-timing-function: ease-out;
                    transform: translate3d(0,-100%,$ballSize);
                }
            }
        }
    }
}
</style>