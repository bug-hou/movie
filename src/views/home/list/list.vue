<!--  -->
<template>
  <div>
      <ul>
          <li v-for="(item,index) in list" :key="index" @click="type(item)" :class="{active:title===item}">{{item}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
        list:["全部","喜剧","动画","剧情","恐怖","科幻","动作","悬疑","犯罪"
        ,"战争","奇幻","运动","家庭","古装","武侠","西部","历史","传记","歌舞","黑色电影","短片","纪录片"],

    };
  },

  props:{
    title:""
  },

  components: {},

  computed: {},

  mounted(){},

  methods: {
    type(item){
      this.$emit("type",item);
    }
  }
}

</script>
<style scoped>
.active{
  background: pink;
}
ul,li{
    list-style: none;
    font-size: 16px;
    border-radius: 10px;
    padding: 2px;
    border: 1px solid #999;
}
li:hover{
    background: #cabbe9;
    color: white;
}
ul{
    display: grid;
    width: 300px;
    grid-template-columns: repeat(3,1fr);
    justify-items: center;
    align-items: center;
    grid-gap: 1em;
}
</style>