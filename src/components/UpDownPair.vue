<template>
    <div class="u-bottom-updown">
        <div class="u-bottom-updown-element" style="font-size:medium">
            <slot name="utop"></slot>
        </div>
        <div v-bind:class="isCenter?'u-bottom-updown-element-center':'u-bottom-updown-element'" style="font-size:small">
            <slot name="ubottom" class="u-bottom-updown-element"></slot>
        </div>
    </div>
</template>

<script>
/* eslint-disable */

export default {
    name:"UpDownPair",
    props:{
        isCenter:{
            type:Boolean,
            default:function(){
                return false;
            }
        }
    },
    data:function(){
        return {

        }
    }
    
};
</script>

<style lang="less" scoped>
@import "../assets/common.less";



.u-bottom-updown{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.u-bottom-updown-element{
    display: flex;
    flex-direction: row;
    /*justify-content: space-around;*/
}

.u-bottom-updown-element-center{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>