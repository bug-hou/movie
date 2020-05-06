<!--  -->
<template>
  <div id="topvar">
      <div v-if="show" class="not">
        <i class="prompt">请先登录在进行操作</i>
        <div class="log" @click="input">登录/注册</div>
      </div>
      <div v-else class="logIn">
        <div  class="image"><img src="~@/assets/img/eat.jpg" alt=""></div>
        <div class="name">{{user.name}}</div>
        <div class="root">权限等级<span>{{user.root}}</span></div>
        <div class="alter" @click="alter">修改</div>
        <div class="back" @click="back">退出</div>
      </div>
      <log v-show="not" @close="close"/>
  </div>
</template>

<script>
import log from './log/log'
export default {
  data () {
    return {
      user:{},
      show:true,
      not : false
    };
  },
  created() {
    if(this.$store.state.empty){
      this.show = !this.show;
    this.user = this.$store.state.current;
    }else
    this.show = true;
    this.$bus.$on("logIn",(data)=>{
      this.$store.commit("add",data);
      this.not = false;
      this.show = false
      this.user = data;
    })
  },
  components: {
    log
  },

  computed: {},

  mounted(){},

  methods: {
    input(){
      this.not = true
    },
    close(){
      this.not = false
    },
    back(){
      this.$store.commit("delete");
      this.show = true;
    }
  }
}

</script>
<style scoped>
.alter,.back{
  border-radius: 15px;
  width: 100px;
  height: 50px;
  background: #9e579d;
  line-height: 50px;
  text-align: center;
  margin-left: 100px;
}
.back{
  margin-left: 50px;
}
.root{
  justify-self: center;
  margin-left: 1050px;
  font-size: 18px;
  line-height: 100%;
}
.root>span{
  font-size: 30px;
  font-style: italic;
  line-height: 50px;
  text-align: center;
  margin-left: 5px;
}
.logIn{
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
}
.name{
  font-size: 30px;
  font-style: italic;
  line-height: 100%;
  margin-left: 50px;
  color: white;
  align-self: center;
}
.image{
  width: 55px;
  height: 55px;
  margin-left: 100px;
}
img{
  width: 100%;
  height: 100%;
}
#topvar{
  background: #002651;
  height: 6vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  color: white;
}
.not{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.not>i{
  margin-left: 150px;
  font-size: 3vh;
  line-height: 6vh;
  filter: blur(1px);
}
.not>div{
  margin-right: 200px;
  border-radius: 15px;
  width: 200px;
  height: 4vh;
  font-size: 2vh;
  line-height: 4vh;
  text-align: center;
  border: 1px solid #56479b;
  color: #d352a8;
  box-shadow: 1px 1px 5px black,-1px -1px 3px white;
}
</style>