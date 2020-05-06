<!--  -->
<template>
  <div id="rootvar">
      <item path="/home"><div class="iconfont icon-shouye1">电影首页</div></item>
      <item path="/search"><div class="iconfont icon-search">电影搜索</div></item>
      <item path="/root"><div class="iconfont icon-quanxian">用户权限</div></item>
      <item path="/profile"><div class="iconfont icon-gerenzhongxin-zhong">用户中心</div></item>
  </div>
</template>

<script>
import item from './item'
export default {
  data () {
    return {
        
    };
  },
 
  components: {
      item
  },

  computed: {
  },

  mounted(){},

  methods: {}
}

</script>
<style scoped>
@import url(//at.alicdn.com/t/font_1796234_4blrmkq8wqr.css);
#rootvar{
    margin-top: 6vh;
    display: flex;
    flex-direction: column;
    background: #303a52;
    color: white;
    width: 200px;
    height: 94vh;
}
.iconfont::after{
    content:">";
}
</style>