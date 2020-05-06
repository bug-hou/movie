<!--  -->
<template>
  <div id="box">
    <span class="title">电影首页</span>
    <div class="iconfont icon-listpress icon">
    <list class="type" :title="title" @type="type"/>
    </div>
    <div class="all">
      <div class="list" v-for="(item,index) in data" :key="index" @click="alter(item)">
        <div class="id">{{getcount(index)}}</div>
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
        <div class="none" v-show="none">
          内容已经没有了，我们正在努力进行添加新的电影，敬请期待
        </div>
      </div>
      <paging></paging>
      <alter v-show="show" :data="currentData" @close="close"></alter>
  </div>
</template>

<script>
import {limit} from '../../network/home/home'

import alter from "components/content/alter/alter"

import list from './list/list'

import paging from "../../components/common/paging/paging"
export default {
  data () {
    return {
      page:1,
      count:5,
      data:{},
      currentData:{},
      show:false,
      none:false,
      title:"全部"
    };
  },
  created() {
    limit({
      page:this.page,
      count:this.count,
      type:this.title
    }).then(res=>{
      this.data = res.data;
    }).catch(err=>{
      console.log("err");
    })
  },
  components: {
    paging,
    alter,
    list
  },

  computed: {
  },
  mounted(){
    this.$bus.$on("change",item=>{
      this.page = item;
      limit({
      page:this.page,
      count:this.count,
      type:this.title
    }).then(res=>{
      this.data = res.data;
      if(this.data.length===0){
        this.none = true
      }else{
      this.none = false
    }
    }).catch(err=>{
      console.log("err");
    })
    })
  },

  methods: {
     getcount(index){
        return (this.page - 1)*this.count + index+1;
    },
    alter(item){
      this.show = true;
      this.currentData = item
    },
    close(){
      this.show = false;
    },
    type(item){
      this.title = item;
      limit({
      page:this.page,
      count:this.count,
      type:this.title
    }).then(res=>{
      this.data = res.data;
      if(this.data.length===0){
        this.none = true
      }else{
      this.none = false
    }
    }).catch(err=>{
      console.log("err");
    })
    }
}
}

</script>
<style scoped>
@import url(//at.alicdn.com/t/font_1796234_pgke0co672e.css);
img:hover{
  overflow: hidden;
  transform: scale(1.5);
}
.icon{
  position: absolute;
  left: 3%;
  top: 3%;
  font-size: 30px;
  color: #49c0b6;
}
.icon>.type{
  display: none;
  background-color: rgba(200, 200, 200, .5);
}
.icon:hover>.type{
  display: block;
}
.none{
  width: 60%;
  margin: 10px auto;
  font-size: 30px;
  line-height: 50px;
  color: #008c8c;
}
.name{
  font-size: 30px;
  color: red;
  line-height: 100px;
  padding-left: 20px;
}
.star{
  font-size: 20px;
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
  width: 95%;
  border-radius: 10px;
  background-color: #f7e8e8;
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
  overflow: hidden;
}
img{
  overflow: hidden;
  width: 100px;
  height: 90px;
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