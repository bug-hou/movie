<!--  -->
<template>
  <div id="search">
      <input type="text" @input="change"><div class="iconfont icon-search icon"></div>
      <ul>
        <li v-for="(item,index) in data" :key="index" @click="alter(item)">{{item.name}}</li>
      </ul>
      <alter id="alter" :data="item" v-show="show" @close="close"/>
      <div class="all">
      <div class="recommend"><span>推荐</span><span class="iconfont icon-refresh" @click="refresh" :class="{active:rotate}"></span></div>
        <div class="list" v-for="(item,index) in showData" :key="index" @click="alter(item)">
        <div class="id">{{index}}</div>
        <div class="image"><img :src="item.image" alt=""></div>
        <div class="content">
           <div class="name">影名:{{item.name}}</div>
           <div class="star">主演:{{item.star}}</div>
           <div class="type">类型:{{item.type}}</div>
        </div>
        <div class="handle">
          <div class="alter iconfont icon-xiugaicopy">修改</div>
        </div>
        </div>
      </div>
  </div>
</template>

<script>
import {search} from '@/network/search/search'
import {data}  from "@/network/search/demo"

import alter from "components/content/alter/alter"

export default {
  data () {
    return {
      data:[],
      show:false,
      item:{},
      showData:[],
      rotate:false
    };
  },

  created() {
    data({
      page:this.random(),
      count:3
    }).then(res=>{
       this.showData = res.data;
    }).catch(err=>{
      console.log("search error");
    })
  },

  components: {
    alter
  },

  computed: {},

  mounted(){},

  methods: {
    change(e){
      search(e.target.value).then(res=>{
        this.data = res.data;
      })
    },
    alter(item){
        this.show = true;
        this.item = item;
    },
    close(){
      this.show = false;
    },
    random(){
        return Math.floor(Math.random()*20+1);
    },
    refresh(){
      this.rotate = true
      setTimeout(()=>{
        this.rotate = false
      },1000)
      data({
      page:this.random(),
      count:3
    }).then(res=>{
       this.showData = res.data;
    }).catch(err=>{
      console.log("search error");
    })
    }
  }
}

</script>
<style scoped>
@import url(//at.alicdn.com/t/font_1796234_gn75426zvsk.css);
@keyframes move{
  0%{
    background-position: 0;
  }
  100%{
    background-position: 100%;
  }
}
.active{
  transform: rotate(360deg);
}
#alter{
  z-index: 10;
}
.recommend{
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 30px;
  color: white;
  position: relative;
}
.recommend>span:nth-child(2){
  position: absolute;
  right: 70px;
  font-size: 20px;
  top: 0px;
    transition: all .5s linear;
}
#search{
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgb(131, 96, 195), rgb(46, 191, 145),rgb(41, 128, 185));
  background-size: 400% 400%;
  overflow: hidden;
  background-position: 0 0;
  animation: move 10s linear infinite alternate;
}
ul,li{
  list-style: none;
}
li{
  width: 60%;
  margin-top: 10px;
  transform: translateX(23%);
  height: 25px;
  border: none;
  padding: 0;
  font-size: 20px;
  line-height: 30px;
  padding-left: 10px;
  color: black;
}
input{
  width: 60%;
  margin-top: 30px;
  transform: translateX(23%);
  height: 50px;
  border: none;
  border: 1px solid black;
  border-radius: 15px;
  padding: 0;
  color: white;
  font-size: 30px;
  line-height: 50px;
  padding-left: 10px;
  background: linear-gradient(to right, rgb(173, 83, 137), rgb(60, 16, 83));
}
input:focus{
  border-radius: 15px;
  border: 1px solid #008c8c;
  outline: none;
}
.icon{
  position: absolute;
  right: 26%;
  top: 62px;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
   font-size: 30px;
  color: white;
}
.name{
  font-size: 30px;
  color: red;
  line-height: 100px;
  padding-left: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.star{
  font-size: 20px;
    white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.content{
  display: flex;
}
.content>*{
  flex: 1;
}
.alter{
  width: 100px;
  height: 60px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
  background-color: #008c8c;
}
#box{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  background: #dee1ec;
  flex-direction: column;
  position: relative;

}
.title{
  width: 100%;
  height: 80px;
  text-align: center;
  line-height: 80px;
  font-size: 40px;
}
.list:nth-child(odd){
  background: #ffcef3;
}
.list:nth-child(even){
  background: #c5e3f6;
}
.list{
  width: 95%;
  height: 100px;
  display: flex;
  justify-content:space-between;
  align-items: center;
  margin-bottom: 10px;
}
.all{
  padding-top: 10px;
  width: 80%;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.list>*{
  display: flex;
  justify-content: center;
  align-items: center;
}
.id{
    width: 50px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
}
.list>.image{
  width: 100px;
  height: 100px;
}
img{
  width: 100%;
  height: 90%;
}
.content{
  height: 100px;
  flex: 1;
}
.handle{
  width: 200px;
  height: 100px;
    display: flex;
  justify-content: center;
  align-items: center;
}
</style>