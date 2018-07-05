<template>
    <div id="first-navigation">
           <ul>
                 <li v-for="(item , index) in items"
                 @click="openSecNav" 
                :key="index" 
                class="iconfont"
                v-html="item.src">  
                </li> 
            </ul>
    </div>
</template>
<script>
export default {
  name: "firstNavigation",
  // props:{

  // },
  data() {
    return {
      items: [{ src: "&#xe60f;" }, { src: "&#xe60f;" }]
    };
  },
  methods:{
      openSecNav(){
          this.$emit('openSecNav',1)
      }
  }
};
</script>
<style scoped>
li {
  font-size: 33px;
  list-style: none;
  cursor: pointer;
  margin: 0;
  border: bisque 0.5px solid
}
</style>
