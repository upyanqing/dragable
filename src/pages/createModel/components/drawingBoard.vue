<template>
<div>
    drawingBoard
    <div id="mouse-position">
    </div> 
    <div id="map" 
    @drop="dropTable($event)"
    @dragover="allowDrop($event)"
    > 
    </div>
   
    </div>
</template>
<script>
export default {
  name: "drawingBoard",
  mounted(){
        // 实例化鼠标位置控件
    var mousePositionControl = new ol.control.MousePosition({
        coordinateFormat: ol.coordinate.createStringXY(4), //坐标格式
        projection: 'EPSG:4326', //地图投影坐标系
        className: 'custom-mouse-position', //坐标信息显示样式
        // 显示鼠标位置信息的目标容器
        target: document.getElementById('mouse-position'),
        undefinedHTML: '&nbsp' //未定义坐标的标记
    });
      // 实例化Map对象加载地图
      var map = new ol.Map({
        target: 'map', //地图容器div的id
        layers: [ //地图容器加载的图层
            // new ol.layer.Tile({ //加载瓦片图层数据
            //     source: new ol.source.OSM() //数据源，加载OSM数据
            // })
        ],
        view: new ol.View({
            center: [0, 0],
            zoom: 3
        }),
        // 加载控件到地图容器中
        // 加载鼠标位置控件
        controls: ol.control.defaults().extend([mousePositionControl])
    });
  },
  methods:{
      dropTable(ev){
      console.log(ev,'sunccess');      
  },
  allowDrop(ev){
      ev.preventDefault();
      console.log(ev,'成功');
  }
  }
};
</script>
<style scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
