<template>
    <div id="second-navigation">
        <div class="title">
            <div class="iconfont">二级菜单</div>
            <div 
            class="iconfont"
            @click="closeSecondNav">&#xe603;</div>
        </div>
       <div class="input">
           <input type="text" placeholder="请输入。。">
       </div>
       <div class="main-table">
           <mtable
           v-for="(item, index) in items" 
           :key="index"
           :obj="item">
           </mtable>
           <!-- <div class="table"><img src="../../../../static/imgs/1.png" alt=""></div>
           <div class="table"><img src="../../../../static/imgs/2.png" alt=""></div>
           <div class="table"><img src="../../../../static/imgs/3.png" alt=""></div>
           <div class="table"><img src="../../../../static/imgs/4.png" alt=""></div>
           <div class="table"><img src="../../../../static/imgs/5.png" alt=""></div>
           <div class="table"><img src="../../../../static/imgs/6.png" alt=""></div>
           <div class="table"><img src="../../../../static/imgs/8.png" alt=""></div> -->
           <!-- <div class="table"><img src="../../../../static/imgs/9.png" alt=""></div>
           <div><img src="../../../../static/imgs/10.png" alt=""></div>
           <div><img src="../../../../static/imgs/12.png" alt=""></div>
           <div><img src="../../../../static/imgs/11.png" alt=""></div>
           <div><img src="../../../../static/imgs/13.png" alt=""></div>        
           <div><img src="../../../../static/imgs/10.png" alt=""></div>
           <div><img src="../../../../static/imgs/12.png" alt=""></div>
           <div><img src="../../../../static/imgs/11.png" alt=""></div>
           <div><img src="../../../../static/imgs/13.png" alt=""></div>
           <div><img src="../../../../static/imgs/7.png" alt=""></div>
           <div><img src="../../../../static/imgs/7.png" alt=""></div> -->
       </div>
    </div>
</template>
<script>
import mtable from "@/pages/components/Table.vue";
// import func from './vue-temp/vue-editor-bridge';
export default {
  name: "secondNavigation",
  data() {
    return {
      items: [
        { name: "1.png" },
        { name: "2.png" },
        { name: "3.png" },
        { name: "4.png" },
        { name: "5.png" },
        { name: "6.png" },
        { name: "7.png" }
      ]
    };
  },
  components: { mtable },
  methods: {
    closeSecondNav() {
      this.$emit("closeSecondNav", 1);
    }
  }
};
</script>
<style lang="less" scoped>
#second-navigation {
  background: #aaaaaa;
  display: flex;
  flex-direction: column;
  .title {
    flex: 1;
    display: flex;
    justify-content: space-between;
    .iconfont {
      font-size: 22px;
      cursor: pointer;
    }
  }
  .input {
    flex: 1;
  }
  .main-table {
    flex: 5;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .table {
        width: 40%;
        padding: 5%;
        text-align: center;
        img {
          width: 100%;
          height: 100%;
        }
    }
  }
}
</style>
