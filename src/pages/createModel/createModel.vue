<template>
    <div id="create-model">
      <div class="create-header">
        <home-header></home-header>
      </div>
      <div class="create-main">
        <div class="first-navigation">
          <first-navigation
          @openSecNav="openSecNav">
          </first-navigation>
          </div>
        <div class="second-navigation" v-show="closesecnav" ref="secondnav">
          <second-navigation
          @closeSecondNav="closeSecondNav">
          </second-navigation>
          </div>
        <div class="drawing-board">
          <drawing-board></drawing-board>
        </div>
        <div class="subgroup">过滤选择组件</div>
      </div>
    </div>
    
</template>
<script>
import HomeHeader from '../home/components/homeHeader'
import firstNavigation from '../createModel/components/firstNavigation'
import secondNavigation from '../createModel/components/secondNavigation'
import drawingBoard from '../createModel/components/drawingBoard'

export default {
  name: "CreateModel",
  data(){
    return{
      closesecnav:true,
    }
  },
  components:{
    HomeHeader,
    firstNavigation,
    secondNavigation,
    drawingBoard
  },
  methods:{
    closeSecondNav(){
      this.closesecnav=false;
    },
    openSecNav(){
       this.closesecnav=true;
    }
  }
};
</script>
<style scoped>
#create-model{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.create-header{
  width: 100%;
  flex: 1;
}
.create-main{
  flex:10;
  display: flex;
}
.first-navigation{
  background: #eeeeee;
  flex: 1;
}
.second-navigation{
  flex: 3;
  background: #c98888;
}
.drawing-board{
  flex: 12;
  background: #6daa5e
}
.subgroup{
  display: none;
}
</style>

