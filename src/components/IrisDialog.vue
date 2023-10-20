<template>
    <!-- 对话框遮罩 -->
    <div class="iris-dialog__wrapper">
        <!-- 对话框 -->
        <div class="iris-dialog">
            <!-- 头部 -->
            <div class="iris-dialog__header">
                <slot name="title">
                    <span class="iris-dialog__title">{{ props.title }}</span>
                </slot>
                <button class="iris-dialog__headerBtn">
                    <i class="iris-icon-close"></i>
                </button>
            </div>
            <!-- 主体区域 -->
            <div class="iris-dialog__body">
                <span>这是一段信息</span>
            </div>
            <!-- 底部 -->
            <div class="iris-dialog__footer">
                <IrisButton>取消</IrisButton>
                <IrisButton type="primary">确定</IrisButton>
            </div>
        </div>
    </div>
    
</template>

<script setup lang='ts'>
import IrisButton from './IrisButton.vue';
type TData = {
    title?: string
}

const props = withDefaults(defineProps<TData>(),{
    title: "提示"
})

</script>

<style scoped>

.iris-dialog__wrapper{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    margin: 0;
    z-index: 2001;
    background-color: rgba(0,0,0,.5);
}

.iris-dialog{
    position: relative;
    margin: 15vh auto 50px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
    box-sizing: border-box;
    width: 50%;
    .iris-dialog__header{
        text-align: left;
        padding: 20px 20px 10px;
        .iris-dialog__title{
            line-height: 24px;
            font-size: 18px;
            color: #303133;
        }
        .iris-dialog__headerBtn{
            position: absolute;
            top: 20px;
            right: 20px;
            padding: 0;
            background: transparent;
            border: none;
            outline: none;
            cursor: pointer;
            font-size: 16px;
            .iris-icon-close{
                color: #909399;
            }
        }
    }
    .iris-dialog__body{
        text-align: left;
        padding: 30px 20px;
        color: #606266;
        font-size: 14px;
        word-break: break-all;
    }
    .iris-dialog__footer{
        padding: 10px 20px 20px;
        text-align: right;
        box-sizing: border-box;
        .iris-button:first-child{
            margin-right: 20px;
        }
    }
}

</style>