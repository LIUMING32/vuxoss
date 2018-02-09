<template>
  <div id="app">
      <section> <router-view></router-view></section>
	    <!--底导航-->
	    <tabbar style="position: fixed;">
	      <tabbar-item  link="home">
	        <img slot="icon" src="../build/img/edit.png">
	        <span slot="label">{{tab1}}</span>
	      </tabbar-item>
	      <tabbar-item show-dot link="find">
	        <img slot="icon" src="../build/img/edit.png">
	        <span slot="label">{{tab2}}</span>
	      </tabbar-item>
	      <tabbar-item selected >
	        <img slot="icon" src="../build/img/edit.png">
	        <span slot="label">{{tab3}}</span>
	      </tabbar-item>
	      <tabbar-item badge="2">
	        <img slot="icon" src="../build/img/edit.png">
	        <span slot="label">{{tab4}}</span>
	      </tabbar-item>
	    </tabbar>
  </div>
</template>

<script>
	import { Tabbar, TabbarItem} from 'vux'
export default {
  name: 'app',
  data () {
    return {
    	tab1:'首页',
    	tab2:'发现',
    	tab3:'消息',
    	tab4:'我的',
    	
    }
  },
  components: {
  	Tabbar,
    TabbarItem,
  },
	methods: {
	
	},
	mounted () {
    
  },
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
h1, h2 {
  font-weight: normal;
}
.box1 {
  height: 100px;
  position: relative;
  width: 1490px;
  margin-top: 10px;
}
.box1-item {
  width: 200px;
  height: 100px;
  background-color: #ccc;
  display:inline-block;
  margin-left: 15px;
  float: left;
  text-align: center;
  line-height: 100px;
}
.box1-item:first-child {
  margin-left: 0;
}
.box2-wrap {
  height: 300px;
  overflow: hidden;
}
</style>
