<!--  -->
<template>
  <div id="log">
  <div class="main">
   <div class="logo">
      <div class="iconfont icon-dianying">movie</div>
   </div>
   <div class="header">
       <log v-if="show" @change="change"></log>
       <register v-else @change="change"></register>
   </div>
   <div class="iconfont icon-guanbi close" @click="close"></div>
  </div>
  </div>
</template>

<script>
import log from "./in";
import register from './register'
export default {
  data () {
    return {
        show: true
    };
  },

  components: {
      log,
      register
  },

  computed: {},

  mounted(){},

  methods: {
      change(){
          this.show =!this.show;
      },
      close(){
          this.$emit("close");
      }
  }
}

</script>
<style scoped>
@import url(//at.alicdn.com/t/font_1796234_89dty3rjq1e.css);
#log{
    z-index: 20;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(100, 100, 100, .3);
}
.close{
    width: 50px;
    height: 50px;
    position: absolute;
    right: -5px;
    top: 15px;
    font-size: 20px;
}
.main{
    border-radius: 15px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 450px;
    height: 450px;
    background: #303a52;
}
.logo>div{
    width: 100%;
    height: 200px;
    line-height: 200px;
    font-size: 60px;
    text-align: center;
    font-style: italic;
    word-spacing: 5px;
    color: pink;
}
.header{
    width: 450px;
    height: 200px;
}
</style>