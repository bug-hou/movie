<!--  -->
<template>
  <div :class="{active:judge}" class="item" @click="push">
      <slot>
      </slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  props:{
    title:{
        type:String
    },
    path:{
        type:String
    }
  },

  components: {},

  computed: {
      judge(){
          return this.$route.path.indexOf(this.path) !==-1 ? true : false;
      }
  },

  mounted(){},

  methods: {
    push(){
      this.$router.push(this.path);
    }
  }
}

</script>
<style scoped>
.active{
    color: red;
}
.item>*{
  display: grid;
  width: 100%;
  height: 80px;
  grid-template-columns: 1fr 2fr 1fr;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
}
</style>