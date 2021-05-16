<template>
    <div class="u-bottom" v-bind:style="{'--backgroundImageUrl':backgroundImageUrl,
    'background-color':backgroundColor,'color':backgroundFontColor}">
        <slot></slot>
    </div>
</template>

<script>
/* eslint-disable */

export default {
    name:"BottomBar",
    props:{
        backgroundImage:{
            type:String,
            default:function(){
                return ""
            }
        },
        backgroundColor:{
            type:String,
            default:function(){
                return ""
            }
        },
        backgroundFontColor:{
            type:String,
            default:function(){
                return ""
            }
        }
    },
    computed:{
        backgroundImageUrl:function(){
            if(this.backgroundImage=="")
                return "none";
            else
                return "url(\""+this.backgroundImage+"\")";
        }
    },
    mounted:function(){
        console.log(this.backgroundImage);
    },
    data:function(){
        return {

        }
    }
    
};
</script>

<style lang="less">
@import "../assets/common.less";
.u-bottom{
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    background-color: @bottom-color;
    color:lighten(@bottom-font-color,35%);
    height: @bottom-height;
    font-size: @titlebar-fontsize;
    font-weight: lighter;
    display: flex;
    align-items:center;
    justify-content: space-between;
}
</style>
<style scoped>
.u-bottom::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: var(--backgroundImageUrl);
    filter: blur(8px);
    opacity: 0.25;
    z-index:-1;
    background-size: cover;
}
</style>