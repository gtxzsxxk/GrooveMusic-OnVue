<template>
    <div class="content-view">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'ContentView'
}
</script>

<style lang="less" scoped>
.content-view{
    margin:10px;
    flex:1;
}
</style>