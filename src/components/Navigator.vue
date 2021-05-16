<template>
    <div class="u-navigator-side">
        <slot></slot>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name:"Navigator"
}
</script>

<style lang="less" scoped>
@import "../assets/common.less";
/*Small screens*/
@media screen and (max-width: 500px)
{
    .u-navigator-side{
        display: flex;
        flex-direction: column;
        width: 100%!important;
        height: fit-content;
        background-color: @basecolor;
    }
}

/* For PC screens */
@media screen and (min-width: 500px)
{
    .u-navigator-side{
        display: flex;
        flex-direction: column;
        width: 20vw;
        background-color: @basecolor;
        height: 100%;
    }
}
</style>