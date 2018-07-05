<template>
           <div class="table"
           
          >
          <img :src="imgs+obj.name"
          alt=""
          draggable="true" 
          @dragstart="tableDrag($event)">
          </div>
</template>
<script>
export default {
  name: "Table",
  props: {
    obj: Object
  },
  data() {
    return {
      imgs: "../../../static/imgs/"
    };
  },
  methods:{
    tableDrag(ev){
      console.log(ev);
      
    }
  }
};
</script>
 <style lang="less" scoped>
</style>

