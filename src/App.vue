<template>
  <div id="app">
    <topvar/>
    <div class="view">
      <keep-alive>
    <router-view/> 
      </keep-alive>
    </div>
    <rootvar/>
  </div>
</template>

<script>
import rootvar from './components/content/rootvar/rootvar'
import topvar from './components/content/topvar/topvar'
export default {
  components:{
    rootvar,
    topvar
  }
}
</script>
<style>
@import url(./assets/css/base.css);
.view{
  position: fixed;
  left: 200px;
  top: 6vh;
  bottom: 0;
  right: 0;
}
</style>
