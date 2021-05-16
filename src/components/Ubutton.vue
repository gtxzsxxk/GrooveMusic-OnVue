<template>
    <div class="u-button-base" v-bind:class="{
        'u-button-lg':standardSize=='lg',
        'u-button-sm':standardSize=='sm',
        'u-button-circle':isCircle,
        'u-button-border-highlight':highlightBorderEnabled
    }">
        <slot></slot>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name:"Ubutton",
    props:{
        isCircle:{
            type:Boolean,
            default:function(){
                return false;
            }
        },
        standardSize:{
            type:String,
            default:function(){
                return "sm";
            }
        },
        highlightBorderEnabled:{
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

.u-button-base{
    display:flex;
    align-items: center;
    justify-content: center;
}

.u-button-circle{
    border:none;
    border-radius: 100px;
}

.u-button-border-highlight{
    border:none;
    border-color:transparent;
    padding: 2px;
    opacity: 1;
    transition: border-color .3s;
}

.u-button-border-highlight:hover{
    border:solid;
    border-width: 2px;
    padding: 0px;
    border-color: #ffffff7c;
    opacity: 1!important;
}

.u-button-lg{
    color:inherit;
    height: 50px;
    width: 50px;
    font-size: 30px;
    line-height: 50px;
    text-align: center;
    background-color: transparent;
}

.u-button-lg:hover{
    color:inherit;
    height: 50px;
    width: 50px;
    /*background-color: darken(@bottom-color,10%);*/
    opacity: 0.75;
    font-size: 30px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    background-color: transparent;
}

.u-button-sm{
    color:inherit;
    height: 30px;
    width: 30px;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    background-color: transparent;
}

.u-button-sm:hover{
    color:inherit;
    height: 30px;
    width: 30px;
    /*background-color: darken(@bottom-color,10%);*/
    opacity: 0.75;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
    background-color: transparent;
}
</style>