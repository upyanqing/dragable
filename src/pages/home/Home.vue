<template>
    <div id="home"> 
        <div class="home-header">
           <home-header></home-header>
        </div>
        <div class="home-main"> 
           <home-main>
            
           </home-main>
        </div>
    </div>
</template>
<script>
import HomeHeader from "./components/homeHeader";
import HomeMain from "./components/homeMain";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeMain
  }
};
</script>
<style>
body{
    width: 100%;
    height: 100%;
    margin: 5px;
    padding: 0;
}
#home {
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.home-header {
  width: 100%;
  flex: 1;
}
.home-main {
  width: 100%;
  flex: 10;
}
</style>

