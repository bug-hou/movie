<!--  -->
<template>
  <div class="log">
      <div class="iconfont icon-zhanghao"><input type="text" placeholder="BUG号码/手机/邮箱" v-model="id" title="id由数字构成"></div>
      <div class="iconfont icon-mima"><input :type="type[count]" placeholder="密码" v-model="pwd" title="密码可以为字母，数字，下划线">
      <div class="iconfont icon-shangchuaniconfont pwd" @click="setCount"></div>
      </div>
      <div><button @click="logIn">登录</button></div>
      <div class="register" @click="change">注册</div>
      <span v-show="noterr" class="error err">注意：账号格式错误</span>
      <span v-show="notor" class="error or">注意：密码格式错误</span>
      <div class="noterror" v-show="yanzhen">
        <span v-if="noterror">账号或密码错误</span>
        <div v-if="!noterror"><span>loading...</span></div>
      </div>
  </div>
</template>

<script>
import {log} from "@/network/login/log"

export default {
  data () {
    return {
      id:null,
      pwd:"",
      type:["password","text"],
      count :0,
      noterr:false,
      notor:false,
      data:{},
      noterror:false,
      yanzhen:false
    };
  },

  components: {},

  computed: {},

  mounted(){},

  methods: {
    change(){
      this.$emit("change");
    },
    setCount(){
      if(this.count===0){
         this.count = 1
      }else{
        this.count = 0
      }
    },
    logIn(){
      const reg1 = /^\d{8,13}$/;
      const reg2 =/^[a-zA-Z0-9_]{6,15}$/;
      if(reg1.test(this.id)){
        if(reg2.test(this.pwd)){
        log({
          id:this.id,
          pwd:this.pwd
        }).then(res=>{
          this.data = res.data;
            this.yanzhen = true;
            setTimeout(() => {              
              if(this.data){
                this.yanzhen = false
                this.$bus.$emit("logIn",this.data);
              }else{
                 this.noterror = true;
                 setTimeout(() => {
                   this.yanzhen = false
                   this.pwd = ""
                 }, 1000);
              }
            }, 4000);
        })
        }else{
         this.notor = !this.notor;
         setTimeout(()=>{
           this.notor = !this.notor
         },1000)
        }
      }else{
        this.noterr = !this.noterr;
         setTimeout(()=>{
           this.noterr = !this.noterr
         },1000)
      }

    }
  }
}

</script>
<style scoped>
@import url(//at.alicdn.com/t/font_1796234_ndzj91uw3gr.css);
@keyframes move1 {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
@keyframes move2 {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(-360deg);
  }
}
.noterror>span{
  font-size: 20px;
  line-height: 80px;
  text-align: center;
}
.log>.noterror{
  width: 180px;
  height: 80px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -65px;
  font-size: 20px;
}
.log>.noterror>div{
  width: 80px;
  height: 80px;
  position: absolute;
  transform: translateX(-50%);
  border-radius: 50%;
  border-top: 8px solid red;
  left: 25%;
  animation: move1 2s linear infinite;
}
.log>.noterror>div>span{
  position: absolute;
  left: 10px;
  top: 30px;
  font-size: 13px;
  animation: move2 2s linear infinite;
}
.log>.noterror>div::before{
  content: "";
  width: 80px;
  height: 80px;
  position: absolute;
  border-top: 8px solid green;
  left: 0;
  top: -3px;
  border-radius: 50%;
  transform: rotate(120deg);
}
.log>.noterror>div::after{
  content: "";
  width: 80px;
  height: 80px;
  position: absolute;
  border-top: 8px solid blue;
  left: 0;
  top: -4px;
  border-radius: 50%;
  transform: rotate(240deg);
}
.log>.error{
  position: absolute;
  width: 260px;
  height: 20px;
  font-size: 14px;
  color: white;
  left: 54%;
  transform: translateX(-50%);
}
.log>.err{
  top: 58px;
}
.log>.or{
  top: 125px;
}
.log>.register{
  position: absolute;
  bottom: -37px;
  left: 10px;
  color: white;
  font-size: 20px;
}
.log>.register:hover{
  color: red;
  text-decoration: underline;
}
.log{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
}
.log>div{
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    position: relative;
}
.iconfont{
  font-size: 25px;
}
.pwd::before{
    position: absolute;
    right: 65px;
    top: 71%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
}
input{
    position: relative;
    width: 250px;
    height: 50px;
    border: none;
    padding: 0;
    border-bottom: 1px solid #17b978;
    background: #303a52;
    color: white;
}
button{
    border: 1px solid #a7ff83;
    border-radius: 15px;
    width: 200px;
    height: 50px;
    background: #17b978;
    font-size: 25px;
    line-height: 50px;
    text-align: center;
    position: relative;
}
button:hover::before{
    content: "";
    position: absolute;
    left: -5px;
    right: -5px;
    top: -5px;
    bottom: -5px;
    background: #a7ff83;
    filter: blur(20px);
}
*:focus{
    color: white;
    outline: none;
}
</style>