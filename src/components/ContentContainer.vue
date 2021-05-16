<template>
    <div>
        <div class="u-content-container">
            <div class="u-titlebar-placeholder"></div>
            <div class="u-container">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
export default {
    name:"ContentContainer"

}
</script>

<style lang="less" scoped>
@import "../assets/common.less";
/*Small screens*/
@media screen and (max-width: 500px)
{
    .u-container{
        display: flex;
        flex-direction: column!important;
        justify-content: flex-start!important;
        width: 100%;
        height: 100%;
    }
}

/* For PC screens */
@media screen and (min-width: 500px)
{
    .u-container{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
    }
}
</style>