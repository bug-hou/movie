<!--  -->
<template>
  <div id="register">
    <div><input type="text" placeholder="昵称" v-model="name"></div>
    <div><input type="text" placeholder="账号" v-model="id"></div>
    <div><input type="password" placeholder="密码" v-model="pwd"></div>
    <div class="captcha"><input type="text" placeholder="验证码" v-model="captcha">
    <div class="image" :style="{background:color}" @click="change">{{number}}</div>
    </div>
    <div><button @click="add">注册</button></div>
    <div class="log" @click="exchange">登录</div>
    <span ref="error" class="error" v-show="show">{{error}}</span>
  </div>
</template>

<script>
import {add} from '@/network/login/add'
export default {
  data () {
    return {
      name:"",
      id:null,
      pwd:"",
      captcha:null,
      number:null,
      color:"",
      error:"",
      show:false
    };
  },

  components: {},

  computed: {
  },

  mounted(){
    this.getNumber();
    this.getColor();
  },

  methods: {
    add(){
      const reg1 = /^\S{2,6}$/;
      const reg2 = /^\d{8,13}$/;
      const reg3 = /^\w{6,15}$/;
      if(reg1.test(this.name)){
        if(reg2.test(this.id)){
          if(reg3.test(this.pwd)){
            if(this.captcha==this.number){
               add({
                 id:this.id,
                 pwd:this.pwd,
                 name:this.name
               }).then(res=>{
                 console.log(res.data)
                  if(!res.data){
                    this.show = true;
                    setTimeout(() => {
                    this.show = false
                    }, 2000);
                    this.$refs.error.style.height = "100px"
                    this.$refs.error.style.fontSize = "25px"
                    this.$refs.error.style.textAlign = "center"
                    this.error = "该账号已经存在"
                  }else{
                    this.show = true;
                    setTimeout(() => {
                    this.show = false;
                    this.$bus.$emit("logIn",{
                      id:this.id,
                      pwd:this.pwd,
                      name:this.name,
                      root:1
                    });
                    }, 2000);
                    this.$refs.error.style.height = "100px"
                    this.$refs.error.style.fontSize = "25px"
                    this.$refs.error.style.textAlign = "center"
                    this.error = "添加成功，即将跳转";
                    ;}
               })
            }else{        
              this.show = true;
        setTimeout(() => {
          this.show = false
        }, 2000);
            this.$refs.error.style.top = "209px";
            this.error = "验证码错误"
            }
          }else{
                    this.show = true;
        setTimeout(() => {
          this.show = false
        }, 2000);
            this.$refs.error.style.top = "155px";
            this.error = "密码格式不正确"
          }
        }else{
                  this.show = true;
        setTimeout(() => {
          this.show = false
        }, 2000);
            this.$refs.error.style.top = "101px";
            this.error = "账号格式不正确"
        }
      }else{
        this.show = true;
        setTimeout(() => {
          this.show = false
        }, 2000);
            this.$refs.error.style.top = "48px";
            this.error = "昵称格式不正确"
      }
    },
    exchange(){
      this.$emit("change");
    },
    random(boo=true){
      if(boo){
        return Math.floor(Math.random()*10);
      }else{
        return Math.floor(Math.random()*266);
      }
    },
    getNumber(){
      var str = ""
      for(let i=0;i<4;i++){
          str += this.random();
      }
      this.number = str;
    },
     getColor(){
      this.color = "rgb("+this.random(false)+","+this.random(false)+","+this.random(false)+")";
    },
    change(){
      this.getNumber();
      this.getColor();
    }
  }
}
</script>
<style scoped>
@import url(//at.alicdn.com/t/font_1796234_bar782bniib.css);
.error{
  position: absolute;
  width: 250px;
  height: 20px;
  left: 50%;
  transform: translateX(-50%);
  top: 100px;
}
.captcha>input{
width: 150px;
margin-right: 10px;
}
.image{
  width: 90px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 20px;
}
#register>.log{
  position: absolute;
  left: 10px;
  top: 270px;
  font-size: 20px;
  color: white;
}
#register>.log:hover{
  color: red;
  text-decoration: underline;
}
#register{
  margin-bottom: -50px;
  margin-top: -55px;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 270px;
  width: 450px;
}
#register>div{
 display: flex;
 flex: 1;
 justify-content: center;
 align-items: center;
}
input{
    position: relative;
    width: 250px;
    height: 40px;
    border: none;
    padding: 0;
    border-bottom: 1px solid #17b978;
    background: #303a52;
    font-size: 20px;
    color: white;
    line-height: 60px;
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