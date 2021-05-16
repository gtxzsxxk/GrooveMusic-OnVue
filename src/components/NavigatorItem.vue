<template>
    <div class="u-navigator-side-item" v-bind:class="{'u-navigator-side-item-chosen':selected}">
        <slot></slot>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name:"NavigatorItem",
    props:{
        selected:{
            type:Boolean,
            default:function(){
                return false;
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import "../assets/common.less";
.u-navigator-side-item{
    padding-left: 20px;
    padding-right: 15px;
    font-size: 1.0em;
    height: @titlebar-height * 1.8;
    line-height: @titlebar-height * 1.8;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    
}
.u-navigator-side-item-chosen{
    border-left:solid;
    border-color: #ffffff - @bottom-color;
    border-width: 6px;
    padding-left: calc(20px - 6px)!important;
}

.u-navigator-side-item:hover{
    padding-left: 20px;
    padding-right: 15px;
    font-size: 1.0em;
    height: @titlebar-height * 1.8;
    line-height: @titlebar-height * 1.8;
    background-color: darken(@basecolor,5%);
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>