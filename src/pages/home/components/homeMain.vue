<template>
    <div id="homeMain">
        <router-link to="/CreateModel">新建模型</router-link>
            <router-link to="/models">模型库</router-link>
    </div>
</template>
<script>
export default {
  name: "HomeMain"
};
</script>
<style>
#homeMain{
    background: url("../../../../static/imgs/banner.png") 490px 20px no-repeat;
    width: 100%;
    height: 100%;
}
</style>

