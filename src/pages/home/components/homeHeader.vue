<template>
    <div id="home-header">
        <span 
        class="iconfont"
        @click="toHome" >&#xe66b;</span>
        <h3>银行合规</h3> 
        <div>其他内容</div>
    </div>
</template>
<script>
export default {
  name: "HomeHeader",
  methods:{
      toHome(){
          this.$router.push('/')
      }
  }
};
</script>
<style lang="less" scoped>
#home-header {
  background: #7d7cc7;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  span {
    font-size: 40px;
    text-align: start;
    margin: 5px 10px;
  }
  div{
      font-size: 20px;
  }
}
</style>




