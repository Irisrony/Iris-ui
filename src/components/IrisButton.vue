<template>
    <button class="iris-button" :class="[`iris-button--${props.type}`,{
        'is-plain': props.plain,
        'is-round': props.round,
        'is-circle': props.circle,
        'is-disabled': props.disabled
    }]"
        @click="handleClick"
        :disabled="props.disabled"
    >
        <i v-if="props.icon" :class="props.icon"></i>
        <span v-if="slots.default">
            <slot></slot>
        </span>
    </button>
</template>

<script setup lang='ts'>
import { useSlots } from 'vue';

type TData = {
    type?: string
    plain?: boolean
    round?: boolean
    circle?: boolean
    disabled?: boolean
    icon?: string
}
const props = withDefaults(defineProps<TData>(),{
    type: "default",
    plain: false,
    round: false,
    circle: false,
    disabled: false,
    icon: ''
})

const slots = useSlots()

const emit = defineEmits(['click'])

const handleClick = () => {
    emit('click',"孩子信息")
}

</script>

<style scoped>
.iris-button{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    /* 禁止元素的文字被选中 */
    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &:hover,
    &:focus{
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
    }
}

.iris-button--primary{
    color:#fff;
    background-color: #409eff;
    border-color: #409eff;
    &:hover,
    &:focus{
    background: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
    }
}
.iris-button--success{
    color:#fff;
    background-color: #67c23a;
    border-color: #67c23a;
    &:hover,
    &:focus{
    background: #85ce61;
    background-color: #85ce61;
    color: #fff;
    }
}
.iris-button--info{
    color:#fff;
    background-color: #909399;
    border-color: #909399;
    &:hover,
    &:focus{
    background: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;
    }
}
.iris-button--warning{
    color:#fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
    &:hover,
    &:focus{
    background: #ebb563;
    background-color: #ebb563;
    color: #fff;
    }
}
.iris-button--danger{
    color:#fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &:hover,
    &:focus{
    background: #f78989;
    background-color: #f78989;
    color: #fff;
    }
}

.iris-button.is-plain{
  &:hover,
  &:focus{
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}
.iris-button--primary.is-plain{
  color: #409eff;
  background: #ecf5ff;
  &:hover,
  &:focus{
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.iris-button--success.is-plain{
  color: #67c23a;
  background: #c2e7b0;
  &:hover,
  &:focus{
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.iris-button--info.is-plain{
  color: #909399;
  background: #d3d4d6;
  &:hover,
  &:focus{
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.iris-button--warning.is-plain{
  color: #e6a23c;
  background: #f5dab1;
  &:hover,
  &:focus{
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.iris-button--danger.is-plain{
  color: #f56c6c;
  background: #fbc4c4;
  &:hover,
  &:focus{
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}

.iris-button.is-round{
    border-radius: 20px;
    padding: 12px 23px;
}

.iris-button.is-circle{
    border-radius: 50%;
    padding: 12px;
}

.iris-button.is-disabled{
    cursor: not-allowed;
    background-image: none;
    opacity: 0.85;
}

.iris-button [class*=iris-icon-] + span{
    margin-left: 5px;
}

</style>