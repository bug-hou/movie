<!--  -->
<template>
  <div class="box">
    <div class="img">
        <img :src="data.image" alt="">
    </div>
    <div class="content">
    <div class="name"><span>影名:</span>{{data.name}}</div>
    <div class="name"><span>主演:</span>{{data.star}}</div>
    <div class="name"><span>类型:</span>{{data.type}}</div>
    <div class="name"><span>上映:</span>{{data.date}}</div>
    <div class="name"><span>票价:</span>{{26|price}}</div>
    <div class="zhu">
        声明：该影片内容不得擅自修改，否则一切后果自负
    </div>
    </div>
    <div class="iconfont icon-guanbi" @click="close"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  props:{
   data:{
       type:Object,
       default(){
           return {};
       }
   }
  },

  filters:{
      price(price){
          return "￥" + price.toFixed(2);
      }
  },

  components: {},

  computed: {},

  mounted(){},

  methods: {
      close(){
          this.$emit("close");
      }
  }
}

</script>
<style scoped>
@import url(//at.alicdn.com/t/font_1796234_udk66yw7ple.css);
.iconfont{
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 25px;
    color: white;
}
.box{
    position: absolute;
    width: 800px;
    height: 560px;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    background: linear-gradient(to right, rgb(18, 194, 233), rgb(196, 113, 237), rgb(246, 79, 89));
}
.content{
    flex: 1;
}
.img{
    width: 260px;
    height: 100%;
    padding-top: 80px;
}
.name{
    width: 80%;
    height: 100px;
    font-size: 30px;
   color: #008c8c;
   line-height: 100px;
   border-bottom: 1px solid black;
     white-space: nowrap;
}
.zhu{
    margin-top: 30px;
    height: 30px;
}
span{
    margin-right: 50px;
}
</style>