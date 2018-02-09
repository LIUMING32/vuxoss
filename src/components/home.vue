<template>
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
    	results: [],
      value: 'test'
    }
  },
  components: {
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
		    setFocus () {
      this.$refs.search.setFocus()
    },
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult (val) {
      console.log('on-change', val)
      this.results = val ? getResult(this.value) : []
    },
    onSubmit () {
      this.$refs.search.setBlur()
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      })
    },
    onFocus () {
      console.log('on focus')
    },
    onCancel () {
      console.log('on cancel')
    }
	},
	mounted () {
    this.$nextTick(() => {
      this.$refs.scrollerBottom.reset({top: 0})
    })
  },
	
}
function getResult (val) {
  let rs = []
  for (let i = 0; i < 20; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}
</script>

<style>

</style>
