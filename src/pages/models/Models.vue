<template>
    <div id="models">
         <div class="model-header">
           <home-header></home-header>
        </div>
        <div class="model-main">models</div>
    </div>
</template>
<script>
import HomeHeader from '../home/components/homeHeader'
export default {
  name: "Models",
    components:{
    HomeHeader
  }
};
</script>
<style>
#models{
  width: 100%;
  height: 100%;
   display: flex;
  flex-direction: column;
}
.model-header{
   width: 100%;
  flex: 1;
}
.model-main{
   width: 100%;
  flex: 10;
}
</style>

