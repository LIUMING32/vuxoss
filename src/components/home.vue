<template>
  <div class="hello">
    <div>
    	<!--标题栏-->    	
    	<x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">with more menu</x-header>
    	<!--搜索框-->
    	<search
		    @result-click="resultClick" 
		    @on-change="getResult"
		    :results="results"
		    v-model="value"
		    position="absolute"
		    auto-scroll-to-top top="46px"
		    @on-focus="onFocus"
		    @on-cancel="onCancel"
		    @on-submit="onSubmit"
		    ref="search"></search>
	  <!--滚动-->
    	<divider>{{ msg3 }}</divider>
	    <scroller lock-y :scrollbar-x=false>
	      <div class="box1">
	        <div class="box1-item" v-for="i in 7"><span>{{' ' + i + ' '}}</span></div>
	      </div>
	    </scroller>
	    <divider>{{ msg2 }} </divider>
	    <scroller lock-x  @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="200">
	      <div class="box2">
	      
	        <p v-for="i in bottomCount">placeholder {{i}}</p>
	        <load-more tip="loading"></load-more>
	        <br />
	        <divider>{{msg}}</divider>
	      </div>
	    </scroller>
	    <!--底导航-->
	    <tabbar style="position: fixed;">
	      <tabbar-item>
	        <img slot="icon" src="../assets/edit.png">
	        <span slot="label">Wechat</span>
	      </tabbar-item>
	      <tabbar-item show-dot>
	        <img slot="icon" src="../assets/edit.png">
	        <span slot="label">Message</span>
	      </tabbar-item>
	      <tabbar-item selected link="">
	        <img slot="icon" src="../assets/edit.png">
	        <span slot="label">Explore</span>
	      </tabbar-item>
	      <tabbar-item badge="2">
	        <img slot="icon" src="../assets/edit.png">
	        <span slot="label">News</span>
	      </tabbar-item>
	    </tabbar>
	  </div>
	  <br />
 		
  </div>
</template>

<script>

import { Tabbar, TabbarItem, Group, Cell,Divider,XHeader,Scroller,LoadMore,Search  } from 'vux'
export default {
	name: 'HelloWorld',
  data () {
    return {
      showMenus: false,
      onFetching: false,
      bottomCount: 20,
      msg:'我是有底线的',
    	msg2:'竖屏滚动',
    	msg3:'轮播图',
    }
  },
  components: {
  	Tabbar,
    TabbarItem,
    Group,
    Cell,
    Divider,
    XHeader,
    Scroller,
    LoadMore,
    Search 
  },
	methods: {
		onScrollBottom () {
		  if (this.onFetching) {
		    // do nothing
		  } else {
		    this.onFetching = true
		    setTimeout(() => {
		      this.bottomCount += 10
		      this.$nextTick(() => {
		        this.$refs.scrollerBottom.reset()
		      })
		      this.onFetching = false
		    }, 2000)
		  }
		},
	},
	mounted () {
    this.$nextTick(() => {
      this.$refs.scrollerBottom.reset({top: 0})
    })
  },
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
