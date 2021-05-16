<template>
    <div class="u-bottom-item" v-bind:class="{'u-bottom-item-hover':hoverEnabled}">
        <slot></slot>
    </div>
</template>

<script>
/* eslint-disable */

export default {
    name:"BottomBarItem",
    props:['hoverEnabled'],
    data:function(){
        return {

        }
    }
    
};
</script>

<style lang="less">
@import "../assets/common.less";

.u-bottom-item{
    display: flex;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 100%;
}

.u-bottom-item-hover:hover{
    display: flex;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    /*background-color: darken(@bottom-color,5%);*/
    opacity: 0.7;
    cursor: pointer;
}
</style>