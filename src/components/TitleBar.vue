<template>
    <div class="u-titlebar">
        <div class="u-title-left">{{title}}</div>
        <div class="u-title-right">
            <button class="u-title-button" v-if="minimizeBtn"><i class="fa fa-minus" aria-hidden="true"></i></button>
            <button class="u-title-button" v-if="maxmizeBtn"><i class="fa fa-window-maximize" aria-hidden="true"></i></button>
            <button class="u-title-button" v-if="closeBtn"><i class="fa fa-window-close-o" aria-hidden="true"></i></button>
        </div>
    </div>
</template>

<script>
/* eslint-disable */

export default {
    name:"TitleBar",
    props:{
        title:{
            type:String,
            default:function(){
                return "No title"
            }
        },
        minimizeBtn:{
            type:Boolean,
            default:function(){
                return true
            }
        },
        maxmizeBtn:{
            type:Boolean,
            default:function(){
                return true
            }
        },
        closeBtn:{
            type:Boolean,
            default:function(){
                return true
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
@import url("../assets/common.less");

.u-titlebar{
    position:fixed;
    top:0;
    left:0;
    right:0;
    background-color: @basecolor;
    color:@font-color;
    height: @titlebar-height;
    font-size: @titlebar-fontsize;
    font-weight: lighter;
    display: flex;
    align-items:center;

}

.u-titlebar-placeholder{
    display: block;
    width: 100%;
    height: @titlebar-height;
}

.u-title-left:first-child{
    margin-left: 15px;
}

.u-title-right{
    margin-left: auto;
}

.u-title-button{
    height: @titlebar-height;
    width: @titlebar-height;
    display: inline-block;
    line-height: @titlebar-height;
    text-align: center;
    border:none;
}

.u-title-button:hover{
    height: @titlebar-height;
    width: @titlebar-height;
    display: inline-block;
    line-height: @titlebar-height;
    text-align: center;
    background-color: lighten(@basecolor,3%);
    cursor: pointer;
    border:none;
}
</style>